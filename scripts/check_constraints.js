const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');

const envPath = path.join(process.cwd(), '.env.local');
const envContent = fs.readFileSync(envPath, 'utf8');
const env = {};
envContent.split('\n').forEach(line => {
    const [key, value] = line.split('=');
    if (key && value) env[key.trim()] = value.trim();
});

const supabaseUrl = env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

async function checkConstraints() {
    console.log('Checking unique constraints for weight_logs...');

    // Supabase usually allows running raw SQL via rpc if configured, but let's try a simpler approach.
    // We can try to upsert with ONLY client_id to see if it complains about missing unique constraint for that.
    // Or we can try to find an 'id' column.

    const { data, error } = await supabase.from('weight_logs').select('*').limit(1);
    if (data && data.length > 0) {
        console.log('Columns:', Object.keys(data[0]));
    } else {
        // Try to trigger a specific error that might reveal primary key
        const { error: err } = await supabase.from('weight_logs').upsert({ weight: 70 }, { onConflict: 'id' });
        if (err) console.log('Upsert with id error:', err.message);

        const { error: err2 } = await supabase.from('weight_logs').upsert({ weight: 70 }, { onConflict: 'client_id' });
        if (err2) console.log('Upsert with client_id error:', err2.message);
    }
}

checkConstraints();

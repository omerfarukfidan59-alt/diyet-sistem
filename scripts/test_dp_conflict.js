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

async function checkDP() {
    console.log('Testing diet_progress onConflict: client_id, day_number');
    const { error } = await supabase.from('diet_progress').upsert({ day_number: 99 }, { onConflict: 'client_id, day_number' });
    if (error) {
        console.log(`FAILED: ${error.message}`);
    } else {
        console.log(`SUCCESS: client_id, day_number is a valid unique constraint for diet_progress.`);
    }
}

checkDP();

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

async function check() {
    const tests = [
        ['client_id, log_date'],
        ['id'],
        ['client_id'],
        ['log_date']
    ];

    for (const t of tests) {
        console.log(`Testing onConflict: ${t}`);
        const { error } = await supabase.from('weight_logs').upsert({ weight: 0 }, { onConflict: t.join(',') });
        if (error) {
            console.log(`FAILED: ${error.message}`);
        } else {
            console.log(`SUCCESS: ${t} is a valid unique constraint.`);
        }
    }
}

check();

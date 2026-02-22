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

async function checkDietProgress() {
    console.log('Checking diet_progress columns...');
    const { data, error } = await supabase.from('diet_progress').select('*').limit(1);
    if (!error && data.length > 0) {
        console.log('diet_progress columns:', Object.keys(data[0]));
    } else {
        console.log('diet_progress error or empty:', error ? error.message : 'empty');
    }
}

async function tryCommonWeightLogs() {
    const commonNames = ['date', 'log_date', 'logged_at', 'recorded_at', 'weight_date'];
    for (const name of commonNames) {
        const { error } = await supabase.from('weight_logs').select(name).limit(1);
        if (!error) {
            console.log(`Success! Found column: ${name}`);
            return;
        } else {
            console.log(`Column '${name}' failed: ${error.message}`);
        }
    }
}

async function run() {
    await checkDietProgress();
    await tryCommonWeightLogs();
}

run();

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
    const { error } = await supabase.from('diet_progress').select('log_date').limit(1);
    if (!error) {
        console.log('diet_progress has log_date');
    } else {
        console.log('diet_progress does NOT have log_date:', error.message);
        // Try to trigger a informative error by inserting garbage
        const { error: error2 } = await supabase.from('diet_progress').insert({ fake: 1 });
        console.log('Error hint:', error2.message);
    }
}

checkDietProgress();

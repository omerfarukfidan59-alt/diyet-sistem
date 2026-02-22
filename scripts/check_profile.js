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

async function checkProfile() {
    console.log('Checking profiles columns...');
    const { data, error } = await supabase.from('profiles').select('*').limit(1);
    if (!error && data.length > 0) {
        console.log('Profiles columns:', Object.keys(data[0]));
        console.log('Sample profile data:', data[0]);
    } else if (error) {
        console.log('Profiles error:', error.message);
    } else {
        console.log('Profiles table is empty.');
    }
}

checkProfile();

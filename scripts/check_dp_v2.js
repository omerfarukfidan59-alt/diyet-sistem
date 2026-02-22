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
    // Try to insert with a known column to see if it works, or if it fails with other missing columns
    const { error } = await supabase.from('diet_progress').insert({ client_id: '00000000-0000-0000-0000-000000000000' });
    console.log('Error for client_id only:', error ? error.message : 'Success (unexpected)');

    // Try to select just one row and see if we get ANY error that lists columns
    const { error: selectError } = await supabase.from('diet_progress').select('non_existent').limit(1);
    console.log('Select error:', selectError.message);
}

checkDP();

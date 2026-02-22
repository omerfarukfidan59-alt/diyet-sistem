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

async function checkColumns() {
    console.log('Trying to insert dummy data to trigger column error...');
    const { data, error } = await supabase
        .from('weight_logs')
        .insert({
            client_id: '00000000-0000-0000-0000-000000000000',
            some_fake_column: 'test'
        });

    if (error) {
        console.log('Error Message:', error.message);
        console.log('Error Details:', error.details);
        console.log('Error Hint:', error.hint);
    }
}

checkColumns();

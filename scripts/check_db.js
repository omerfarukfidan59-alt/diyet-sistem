const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');

// Manually read .env.local
const envPath = path.join(process.cwd(), '.env.local');
const envContent = fs.readFileSync(envPath, 'utf8');
const env = {};
envContent.split('\n').forEach(line => {
    const [key, value] = line.split('=');
    if (key && value) env[key.trim()] = value.trim();
});

const supabaseUrl = env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
    console.error('Supabase URL or Key not found in .env.local');
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function checkColumns() {
    console.log('Checking weight_logs table...');
    const { data, error } = await supabase
        .from('weight_logs')
        .select('*')
        .limit(1);

    if (error) {
        console.error('Error selecting from weight_logs:', error.message);
        if (error.message.includes('not found')) {
            console.log('Table weight_logs might not exist.');
        }
    } else {
        console.log('Sample data found:', data.length > 0);
        if (data.length > 0) {
            console.log('Columns in weight_logs:', Object.keys(data[0]));
        } else {
            console.log('Table exists but is empty. Trying to list columns another way...');
            // In a real scenario, we might use an RPC or try an insert that fails to see error details
        }
    }
}

checkColumns();

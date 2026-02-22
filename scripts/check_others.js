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

async function checkDateColumns() {
    console.log('Checking columns for diet_progress and diets...');

    const tables = ['diet_progress', 'diets'];
    for (const table of tables) {
        const { error } = await supabase.from(table).select('date').limit(1);
        if (error) {
            console.log(`Table '${table}' date column check FAILED: ${error.message}`);
            // Try log_date
            const { error: error2 } = await supabase.from(table).select('log_date').limit(1);
            if (!error2) {
                console.log(`Table '${table}' has 'log_date' instead of 'date'.`);
            } else {
                // Try created_at or just list any column if we can find one
                const { data, error: error3 } = await supabase.from(table).select('*').limit(1);
                if (data && data.length > 0) {
                    console.log(`Table '${table}' actual columns:`, Object.keys(data[0]));
                } else {
                    console.log(`Table '${table}' is empty or error:`, error3 ? error3.message : 'empty');
                }
            }
        } else {
            console.log(`Table '${table}' has 'date' column.`);
        }
    }
}

checkDateColumns();

const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

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

async function testInsert() {
    const testId = crypto.randomUUID();
    console.log('Attempting to insert profile with random ID:', testId);

    const { data, error } = await supabase.from('profiles').insert([
        {
            id: testId,
            full_name: 'Test Manual Client',
            role: 'client',
            age: 30,
            height: 180,
            weight: 75,
            target_weight: 70
        }
    ]).select();

    if (error) {
        console.error('Insert Error:', error.message);
    } else {
        console.log('Insert Success:', data);
        await supabase.from('profiles').delete().eq('id', testId);
        console.log('Test profile cleaned up.');
    }
}

testInsert();

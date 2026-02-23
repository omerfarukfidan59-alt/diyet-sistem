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

const authClient = createClient(supabaseUrl, supabaseKey, {
    auth: {
        autoRefreshToken: false,
        persistSession: false,
        detectSessionInUrl: false
    }
});

async function testSignUp() {
    const randomSuffix = Date.now();
    const email = `manual_${randomSuffix}@diyet.local`;
    const password = 'Password123!';

    console.log('Testing sign up for:', email);

    const { data, error } = await authClient.auth.signUp({
        email,
        password,
        options: {
            data: {
                full_name: 'Test Manual Client',
                role: 'client'
            }
        }
    });

    if (error) {
        console.error('Signup Error:', error.message);
        return;
    }

    console.log('Signup Success:', data.user.id);

    // Explicitly insert into profiles
    const { data: insertData, error: insertError } = await authClient.from('profiles').upsert({
        id: data.user.id,
        full_name: 'Test Manual Client',
        role: 'client',
        height: 180,
        weight: 80,
        target_weight: 75,
        age: 30
    }).select();

    if (insertError) {
        console.error('Upsert Error:', insertError.message);
    } else {
        console.log('Upsert Success:', insertData);
    }
}

testSignUp();

import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

// Bu instance, sadece anonim veya login olmuş kullanıcıların erişebileceği yetkilerle çalışır (Row Level Security - RLS kurallarına uyar)
export const supabase = createClient(supabaseUrl, supabaseAnonKey)

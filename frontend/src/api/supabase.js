import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// create and export the Supabase client — import this wherever you need to query the database
export const supabase = createClient(supabaseUrl, supabaseAnonKey)

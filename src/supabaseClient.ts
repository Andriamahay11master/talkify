import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = process.env.REACT_APP_SUPABASE_URL;  // Remplace par ton URL
const SUPABASE_KEY = process.env.REACT_APP_SUPABASE_ANON_KEY;  // Remplace par ta clé publique

if (!SUPABASE_URL) {
    throw new Error('REACT_APP_SUPABASE_URL environment variable is not set');
  }

  if (!SUPABASE_KEY) {
    throw new Error('REACT_APP_SUPABASE_ANON_KEY environment variable is not set');
  }

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

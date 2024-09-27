import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://vigvboudtcdgvvnhziem.supabase.co';  // Remplace par ton URL
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZpZ3Zib3VkdGNkZ3Z2bmh6aWVtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjc0MTQxNTMsImV4cCI6MjA0Mjk5MDE1M30.mVvbXh2GxKFt7qovYBWrIqQusp2L5OSKjKkLDOOB9CA';  // Remplace par ta clé publique

if (!SUPABASE_URL) {
    throw new Error('REACT_APP_SUPABASE_URL environment variable is not set');
  }

  if (!SUPABASE_KEY) {
    throw new Error('REACT_APP_SUPABASE_ANON_KEY environment variable is not set');
  }

  console.log('Supabase URL:', SUPABASE_URL);
console.log('Supabase Key:', SUPABASE_KEY); // Vérifie que les valeurs sont correctes


export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

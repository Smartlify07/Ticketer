import { createClient } from '@supabase/supabase-js';

const projectUrl = 'https://hqszuqdrkjqydagoeaan.supabase.co';
const supabase = createClient(
  projectUrl,
  import.meta.env.VITE_SUPABASE_SERVICE_KEY!
);
export { supabase };

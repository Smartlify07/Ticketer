import { createClient } from '@supabase/supabase-js';

const projectUrl = import.meta.env.VITE_API_URL!;
const supabase = createClient(
  projectUrl,
  import.meta.env.VITE_SUPABASE_ANON_KEY!
);

export { supabase }

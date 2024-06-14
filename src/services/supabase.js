import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://phplhwuyexoqughwimtm.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBocGxod3V5ZXhvcXVnaHdpbXRtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI3NzU5ODksImV4cCI6MjAyODM1MTk4OX0.68bS-hjvHniqsK1FQi9gJzK2nFU5xMFqPutIjS4Jy60";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;

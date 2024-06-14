import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://wxywapntefztohssfexj.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind4eXdhcG50ZWZ6dG9oc3NmZXhqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTgzNDQ1NTcsImV4cCI6MjAzMzkyMDU1N30.rfG4f5e6yl3OOcFnIbbJkKlMC9TU43pbmiajJic8888";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

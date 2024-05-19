import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://gawjedbltlqronycdsbe.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdhd2plZGJsdGxxcm9ueWNkc2JlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTU3MDA0MzcsImV4cCI6MjAzMTI3NjQzN30.7ktfkK5z4KHuIvuKxuZwSnl2UOBbLBTkLmkgQbuLEIA";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

import { create } from "zustand";
import { supabase } from "..";

interface SupabaseUser {
    id: string;
    email: string;
}

interface AuthStore {
  signInWithEmail: (credentials: { email: string; pass: string }) => Promise<null | SupabaseUser>;
  signOut: () => Promise<void>;
}

export const useAuthStore = create<AuthStore>()((set,get) => ({
    signInWithEmail: async(credentials) => {
        const { data, error } = await supabase.auth.signInWithPassword({
            email: credentials.email,
            password: credentials.pass,
          });
          if(error){
            return null;
          }
          return data.user as SupabaseUser;
    },

    signOut: async() => {
        const { error } = await supabase.auth.signOut();
        if(error) throw new Error("Ha ocurrido un error durante el cierre de sesión" + error);
    } ,
}))
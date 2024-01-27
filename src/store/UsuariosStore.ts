import { create } from "zustand";
import { InsertarUsuarios, supabase } from "..";

interface SupabaseUser {
    id?: string;
    correo?: string;
}

interface UsuariosStore {
    insertarUsuarioAdmin: (credentials: { correo: string; pass: string }) => Promise<null | SupabaseUser | void>;
    
  }

export const useUsuariosStore = create<UsuariosStore>()((set,get) => ({
    insertarUsuarioAdmin: async(credentials) => {
        const { data, error } = await supabase.auth.signUp({
            email: credentials.correo,
            password: credentials.pass,
        });

        console.log({data})

        if(error) return;

        const datauser = await InsertarUsuarios({idauth: data.user?.id!, fecharegistro: new Date(), tipouser: "admin"});

        return datauser;
    },
}))
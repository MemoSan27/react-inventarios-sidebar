import Swal from "sweetalert2";
import { supabase } from "."

interface credentials {
    id?: number;
    nombre?: string;
    ine?: string;
    telefono?: string;
    direccion?: string;
    fecharegistro: Date;
    estado?: string;
    tipouser: string;
    idauth: string | number;
    tipodoc?: string;
    correo?: string;
}

export const InsertarUsuarios = async(credentials: credentials) => {
    const { data, error } = await supabase.from('usuarios')
                             .insert(credentials)
                             .select().maybeSingle();

    if(error){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Error al insertar usuario" + error.message,
            
          });
    }

    if(data) return data;
}
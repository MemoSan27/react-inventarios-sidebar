import styled from 'styled-components';
import { Btnsave } from '..';
import { useUsuariosStore } from '../../store/UsuariosStore';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

export function LoginTemplate(){
    const { insertarUsuarioAdmin } = useUsuariosStore();
    const navigate = useNavigate();

    const mutationInsertUser = useMutation({
        mutationKey: ["insertar usuario admin"],
        mutationFn: async() =>  {
            const p = {
                correo: "pruebas6@gmail.com",
                pass: "memo123"
            }

            const dt = await insertarUsuarioAdmin(p)
            if(dt){
                navigate("/");
            }
        }
    });

    const handleBtnsaveClick = async () => {
        await mutationInsertUser.mutateAsync();
    };

    return(
    <Container>
        <Btnsave titulo='Crear cuenta' bgcolor='#fff' funcion={handleBtnsaveClick}/>
    </Container>)
}

const Container = styled.div`
    height: 100vh;
`
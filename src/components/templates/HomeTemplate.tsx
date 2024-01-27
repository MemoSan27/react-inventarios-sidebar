import styled from 'styled-components';
import { Btnsave } from '..';
import { useAuthStore } from '../../store/AuthStore';

export function HomeTemplate(){
    const { signOut } = useAuthStore();
    

    return(
    <Container>
        <h1> Home Template </h1>
        <Btnsave titulo='Cerrar Sesion' bgcolor='#fff' funcion={signOut}/>
    </Container>)
};

//*STYLES
const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    overflow: hidden;
    background-color: ${(props) => props.theme.bgtotal};
    color: ${(props) => props.theme.text};
    width: 100%;
`
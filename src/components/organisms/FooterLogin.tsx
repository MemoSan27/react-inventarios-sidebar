import styled from "styled-components";
import { GiPadlock } from "react-icons/gi";


export const FooterLogin = () => {
  return (
    <Container>
      <section className="lock">
        <GiPadlock />
        <span>
          Esta es una página segura de DevSolutios. Si tienes dudas sobre la
          autenticidad de la web, comunícate con
          <br /> nosotros al (+52)669-941-81-29 o a través de nuestros medios digitales.
        </span>
      </section>
      <section className="derechos">
        <span>StockPRO S.A </span>
        <div className="separador"></div>
        <span>Todos los derechos reservados</span>
        <div className="separador"></div>
        <span>© 2023 DevSolutions</span>
      </section>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 12.2px;
  color: #91a4b7;
  gap:5px;
  .lock {
    border-bottom: 1px solid rgba(145, 164, 183,0.3);
    gap:5px;
    display:flex;
    align-items:center;
  }
  .derechos {
    display: flex;
    justify-content: space-between;
   .separador{
    width:1px;
    background-color:rgba(145, 164, 183,0.3);
    margin-top:4px;
    height:80%;
    align-items:center;
    display:flex;
   }
    span{
      margin-top:5px;
    }
  }
`;
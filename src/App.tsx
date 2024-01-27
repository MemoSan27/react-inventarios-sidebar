import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import styled, { ThemeProvider } from 'styled-components';
import { AuthContextProvider, MyRoutes, Light, Dark, Sidebar, MenuHambur, Login } from './';
import { createContext, useState } from 'react';
import { Device } from './styles/breakpoints';
import { useLocation } from 'react-router-dom';


export interface ThemeContextProps {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}

export const ThemeContext = createContext<ThemeContextProps | null>(null);

function App() {

  const [themeuse, setTheme] = useState("dark");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const theme = themeuse === 'light' ? 'light' : 'dark';
  const themeStyle = theme === 'light' ? Light : Dark;
  const { pathname } = useLocation();

  return (
    <>
    <ThemeContext.Provider value={{theme, setTheme}}>
      <ThemeProvider theme={themeStyle}>
        <AuthContextProvider>
          {
            pathname != "/login" 
            ? (
                <Container className={sidebarOpen ? 'active': ''}>
                  <section className='ContentSidebar'>
                    <Sidebar state={sidebarOpen} setState={() => setSidebarOpen(!sidebarOpen)} />
                  </section>
                  <section className='ContentMenuambur'>
                    <MenuHambur />
                  </section>
                  <section className='ContentRoutes'>
                    <MyRoutes />
                  </section>
                </Container>
              )
            : (
                <Login />
              )
          }
          
          <ReactQueryDevtools initialIsOpen={false} />
        </AuthContextProvider>
      </ThemeProvider>
    </ThemeContext.Provider>

    </>
  )
}

//*STYLES
const Container = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  background-color: ${(props) => props.theme.bgtotal};

  .ContentSidebar{
    display: none;
  }
  .ContentMenuambur{
    display: block;
    position: absolute;
    left: 20px;
  }
  @media ${Device.tablet} {
    grid-template-columns: 65px 1fr;
    &.active{
      grid-template-columns: 220px 1fr;
    }
    .ContentSidebar{
      display: initial;
    }
    .ContentMenuambur{
      display: none;
    }
  }
  .ContentRoutes{
    grid-column: 1;
    width: 100%;
    @media ${Device.tablet}  {
      grid-column: 2;
    }
  }
`

export default App

import { ReactNode, createContext, useContext, useEffect, useState } from 'react';
import { AuthChangeEvent, Session, User } from '@supabase/supabase-js';
import { supabase } from '..';

interface AuthContextProps {
    user: User | null;
}

const AuthContext = createContext<AuthContextProps>({ user: null });

interface AuthContextProviderProps {
    children: ReactNode;
}

export const AuthContextProvider: React.FC<AuthContextProviderProps> = ({children}) => {
    const [user, setUser] = useState<User | null>(null)


    useEffect(() => {
        const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
                async (event: AuthChangeEvent, session: Session | null) => {
                    console.log(event,session)
                    if(session?.user === null){
                        setUser(null)
                    }else{
                        setUser(session?.user!)
                    }
                }
          })

          return () => {
            authListener.subscription;
          }
    }, []);

    return (
        <AuthContext.Provider value={{ user }}>
          {children}
        </AuthContext.Provider>
      );
};

export const UserAuth = (): AuthContextProps => {
    return useContext(AuthContext)
}


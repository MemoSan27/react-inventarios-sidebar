import { Route, Routes } from "react-router-dom";
import { Home, Login, UserAuth } from "..";
import { ProtectedRoute } from "../hooks/useProtectedRoute";

export function MyRoutes(){
    const {user} = UserAuth();

    return(
        <Routes>
            <Route path="/login" element={<Login />}/>
            <Route element={<ProtectedRoute user={user} redirectTo="/login"/>}>
                <Route path="/" element={<Home />}/>
            </Route>
        </Routes>
        
    )
}
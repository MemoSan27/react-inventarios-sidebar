import { Route, Routes } from "react-router-dom";
import { Home } from "..";

export function MyRoutes(){

    return(
        <Routes>
            <Route path="/" element={<Home />}/>
        </Routes>
        
    )
}
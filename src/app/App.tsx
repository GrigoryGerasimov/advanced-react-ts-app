import { MainPageLazy, AboutPageLazy } from "./pages";
import { Routes, Route } from "react-router-dom";
import { Suspense } from "react";

const App = () => {
    return (
        <Suspense fallback={"...loading"}>
            <Routes>
                <Route path="/about" element={<AboutPageLazy/>}/>
                <Route path="/" element={<MainPageLazy/>}/>
            </Routes>
        </Suspense>
    )
};

export default App;
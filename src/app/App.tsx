import { AboutPageLazy, MainPageLazy, CounterPageLazy } from "./pages";
import { Header } from "./components/Header/Header";
import { Routes, Route } from "react-router-dom";
import Loader from "./components/Loader/Loader";
import { Suspense } from "react";

const App = () => {
    return (
        <div>
            <Header/>
            <Suspense fallback={<Loader/>}>
                <Routes>
                    <Route path="/about" element={<AboutPageLazy/>}/>
                    <Route path="/counter" element={<CounterPageLazy/>}/>
                    <Route path="/" element={<MainPageLazy/>}/>
                </Routes>
            </Suspense>
        </div>
    )
};

export default App;
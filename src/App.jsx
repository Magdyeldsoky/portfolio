import {BrowserRouter, Routes , Route} from "react-router-dom";
import NotFound from "../padges/NotFound.jsx";
import HOU from "../padges/Home.jsx";


const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route index element={<HOU />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </>
    )

}
export default App
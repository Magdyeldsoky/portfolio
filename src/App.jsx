import {BrowserRouter, Routes , Route} from "react-router-dom";
import NotFound from "../padges/NotFound.jsx";
import HOU from "../padges/Home.jsx";


const App = () => {
    return (
        <>

                <Routes>
                    <Route index element={<HOU />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>

        </>
    )

}
export default App

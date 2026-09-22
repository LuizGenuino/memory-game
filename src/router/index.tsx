import { Route, Routes } from "react-router"
import MemoryGame from "../pages/MemoryGame"
import Home from "../pages/Home"
import NotFound from "../pages/NotFoundPage"

const Routers: React.FC = () => {

    return (
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/:slug" element={<MemoryGame />}></Route>
            <Route path="*" element={<NotFound/>}></Route>
        </Routes>
    )
}

export default Routers
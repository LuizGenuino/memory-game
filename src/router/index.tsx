import { Route, Routes } from "react-router"
import MemoryGame from "../pages/MemoryGame"

const Routers: React.FC = () => {

    return (
        <Routes>
            <Route path="/"></Route>
            <Route path="/:slug" element={<MemoryGame />}></Route>
        </Routes>
    )
}

export default Routers
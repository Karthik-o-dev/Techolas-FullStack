import { BrowserRouter, Route, Routes } from "react-router"
import { HomePage } from "./pages/Homepage"

export const App = () => {
  return <BrowserRouter>
    <Routes>
      <Route path="/" Component={HomePage} />
    </Routes>
  </BrowserRouter>
}
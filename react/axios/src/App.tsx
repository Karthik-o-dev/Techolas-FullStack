import { BrowserRouter, Route, Routes } from "react-router"
import { AxiosPage } from "./pages/AxiosPage"

export const App = () => {
  return <BrowserRouter>
    <Routes>
      <Route path="/" Component={AxiosPage} />
    </Routes>
  </BrowserRouter>
}
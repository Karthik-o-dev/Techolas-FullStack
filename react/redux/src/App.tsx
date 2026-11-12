import { BrowserRouter, Route, Routes } from "react-router"
import { ReduxPage } from "./Pages/ReduxPage"

export const App = () => {
  return <BrowserRouter>
    <Routes>
      <Route path="/" Component={ReduxPage} />
    </Routes>
  </BrowserRouter>
}
import { BrowserRouter, Route, Routes } from "react-router"
import { UseRef } from "./page/UseRef"

export const App = () => {
  return <BrowserRouter>
    <Routes>
      <Route path="/" Component={UseRef} />
    </Routes>
  </BrowserRouter>
}
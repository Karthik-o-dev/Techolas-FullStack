import { BrowserRouter, Route, Routes } from "react-router"
import { HomePage } from "./pages/HomePage"
import { UserPage } from "./pages/userPage"

export const App = () => {
  return <BrowserRouter>
    <Routes>
      <Route path="/" Component={HomePage} />
      <Route path="/user/:id" Component={UserPage} />
    </Routes>
  </BrowserRouter>
}
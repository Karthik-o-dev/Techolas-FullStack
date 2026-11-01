import { BrowserRouter, Route, Routes } from "react-router"
import { LandingPage } from "./pages/LandingPage"
import { CartPage } from "./pages/CartPage"
import { ProductPage } from "./pages/ProductPage"

export const App = () => {
  return <BrowserRouter>
    <Routes>
      <Route path="/" Component={LandingPage} />
      <Route path="/cart" Component={CartPage} />
      <Route path="/p/:id" Component={ProductPage} />
    </Routes>
  </BrowserRouter>
}
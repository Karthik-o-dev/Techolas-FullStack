import { BrowserRouter, Route, Routes } from "react-router"
import { HomePage } from "./pages/HomePage"
import { AboutPage } from "./pages/AboutPage"
import { TopNavBar } from "./component/TopNavBar"
import { ContactPage } from "./pages/ContactPage";
import { ProfilePage } from "./pages/ProfilePage";
import { ProductPage } from "./pages/ProductPage";
import { SingleProduct } from "./pages/SingleProduct";

export const RouteMap = {
  home: "/",
  about: "/about",
  contact: "/contact",
  profile: "/profile/:id",
  product: "/products",
  singleProduct: "/product/:id"
} as const;

export const App = () => {
  return <BrowserRouter>

    <TopNavBar />

    <Routes>
      <Route path={RouteMap.home} Component={HomePage} />
      <Route path={RouteMap.about} Component={AboutPage} />
      <Route path={RouteMap.contact} Component={ContactPage} />
      <Route path={RouteMap.profile} Component={ProfilePage} />
      <Route path={RouteMap.product} Component={ProductPage} />
      <Route path={RouteMap.singleProduct} Component={SingleProduct} />

    </Routes>
  </BrowserRouter>
}
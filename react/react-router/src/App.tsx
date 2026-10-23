import { BrowserRouter, Route, Routes } from "react-router"
import { HomePage } from "./pages/HomePage"
import { AboutPage } from "./pages/AboutPage"
import { TopNavBar } from "./component/TopNavBar"
import { ContactPage } from "./pages/ContactPage";

export const RouteMap = {
  home: "/",
  about: "/about",
  contact: "/contact"
} as const;

export const App = () => {
  return <BrowserRouter>

    <TopNavBar />

    <Routes>
      <Route path={RouteMap.home} Component={HomePage} />
      <Route path={RouteMap.about} Component={AboutPage} />
      <Route path={RouteMap.contact} Component={ContactPage} />
    </Routes>
  </BrowserRouter>
}
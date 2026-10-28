import { createBrowserRouter, RouterProvider, type RouteObject } from "react-router"
import { HomePage } from "./pages/HomePage"
import { AboutPage } from "./pages/AboutPage";
import { CounterProvider } from "./providers/CounterProvider";

const routesData: RouteObject[] = [
  { path: "/", Component: HomePage },
  { path: "/about", Component: AboutPage }
];

const routes = createBrowserRouter(routesData);


export const App = () => {

  return <CounterProvider>
    <RouterProvider router={routes} />
  </CounterProvider>
}
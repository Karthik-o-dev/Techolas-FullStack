import { createBrowserRouter, RouterProvider, type RouteObject } from "react-router"
import { HomePage } from "./pages/HomePage"
import { AboutPage } from "./pages/AboutPage";
import { createContext, useState } from "react";

const routesData: RouteObject[] = [
  {
    path: "/",
    Component: HomePage
  },
  {
    path: "/about",
    Component: AboutPage
  }]

export type CounterContextType = {
  counter: number;
  setCounter: React.Dispatch<React.SetStateAction<number>>;

}

const routes = createBrowserRouter(routesData);

export const CounterContext = createContext<CounterContextType | null>(null)

export const App = () => {

  const [counter, setCounter] = useState(0);

  return <CounterContext.Provider value={{ counter, setCounter }} >
    <RouterProvider router={routes} />
  </CounterContext.Provider >
}
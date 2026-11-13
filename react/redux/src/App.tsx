import { BrowserRouter, Route, Routes } from "react-router"
import { ReduxPage } from "./Pages/ReduxPage"
import { TodoPage } from "./Pages/TodoPage"

export const App = () => {
  return <BrowserRouter>
    <Routes>
      <Route path="/" Component={ReduxPage} />
      <Route path="/todo" Component={TodoPage} />
    </Routes>
  </BrowserRouter>
}
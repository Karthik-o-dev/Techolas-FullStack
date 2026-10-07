import { Fragment } from "react";
import { ChildComponet } from "./ChildComponent";

export const App = () => {
  return <Fragment>
    <h1>helloo</h1>
    <p>heyy</p>
    <ChildComponet p1="data1" p2="data2" data="data">
      <span>This is the child Element(App.tsx)</span>
    </ChildComponet>
  </Fragment>
}

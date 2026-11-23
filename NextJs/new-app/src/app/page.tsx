// "use client"
import Alert from "@/components/fetch";
import { Suspense } from "react";

// import { useState } from "react"

async function Fetching() {
  const response = await fetch('https://dummyjson.com/products');
  const data = await response.json();
  console.log(data)

  return <div>
    {data.products.map((item: any) => <Alert key={item.id} item={item} />)}
  </div>
}

export default function App() {

  // const [count, setCount] = useState(0)
  return <div>
    {/* <h1>count: {count}</h1>
    <button onClick={() => setCount(count + 1)}>Add</button> */}

    <div>
      <h1>Products</h1>
      <Suspense fallback={<div>...Loading</div>}><Fetching /></Suspense>
    </div>
  </div>
}
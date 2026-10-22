// useEffect();
import { useEffect, useState } from "react"
export const UseEffect = () => {

  type Product = {
    title: string;
    images: string[];
  }

  const [counter1, setCounter1] = useState<number>(0);
  const [counter2, setCounter2] = useState<number>(0);
  const [timer, setTimer] = useState<number>(0)
  const [product, setProduct] = useState<Product | null>(null);
  const [productId, setProductId] = useState<number>(1);

  // useEffect(() => {
  //   console.log("mounted")
  //   return () => {
  //     console.log("unmounted")
  //   }
  // }, [counter1, counter2]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
    return () => {
      clearInterval(interval);
    }
  }, [counter1, counter2]);

  const handleFetch = async () => {
    try {
      const response = await fetch(`https://dummyjson.com/products/${productId}`);
      const data = await response.json();
      setProduct(data);
    } catch (err) {
      console.log(err)
    }
  }

  const generateRandomNumber = () => Math.floor(Math.random() * 194) + 1;

  useEffect(() => {
    handleFetch();
  }, [productId]);

  return <div className="flex justify-center h-screen items-center flex-col gap-3">
    <div>Counter 1 : {counter1}</div>
    <div>Counter 2 : {counter2}</div>
    <div>Timer : {timer}</div>
    <div>
      <div className="h-95 w-95">
        <img src={product?.images[0]} alt={product?.title} />
      </div>
      <div>Product Title: {product?.title} </div>
      <button className="bg-blue-200 px-4 p-3 rounded-md" onClick={() => setProductId(generateRandomNumber())}>Random product</button>
    </div>
    <div className="flex gap-2">
      <button className="bg-blue-200 px-4 p-3 rounded-md" onClick={() => setCounter1(counter1 + 1)}>Click 1</button>
      <button className="bg-blue-200 px-4 p-3 rounded-md" onClick={() => setCounter2(counter2 + 1)}>Click 1</button></div>
  </div>
}
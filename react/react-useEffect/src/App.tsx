import { useEffect, useState } from "react"
import { getProduct } from "./services/product";
import type { DummyJsonResponse, Product } from "./types/dummyJson";

const limit = 30;

export const App = () => {
    const [products, setProduct] = useState<Product[]>([]);
    const [page, setPage] = useState<number>(1);
    const [totalPage, setTotalPage] = useState<number>(0)
    const [openModel, setOpenMOdel] = useState<Product | null>(null);
    const [prodImage, setProdImage] = useState<string | null>(null)

    useEffect(() => {
        (
            async () => {
                const response = await getProduct(limit, (page - 1) * limit);
                if (!response.ok) {
                    return alert(response.message)
                }
                const data = response.data as DummyJsonResponse;
                const total_pages = Math.ceil(data.total / limit);
                setProduct(data.products);
                setTotalPage(total_pages);
            }
        )();
    }, [page]);

    return <div className="bg-gray-100 p-5">
        {openModel && <div className="fixed top-0 left-0 flex justify-center items-center backdrop-blur-md bg-black/10 h-screen w-screen z-2">
            <div className="bg-white w-full max-w-125 p-10 relative rounded-lg">
                <button onClick={() => { setOpenMOdel(null); setProdImage(null); }} className="absolute top-2 right-2 bg-red-400 p-1 px-2 rounded-md cursor-pointer text-white">Close</button>
                {prodImage && <img src={prodImage} alt="" />}
                <div>
                    {openModel.title}
                </div>
                <div className="flex gap-2 mt-2 overflow-auto scrollbar-none">
                    {
                        openModel.images.map((image, index) => {
                            return <img onMouseOver={() => setProdImage(image)} src={image} alt="" key={index} className="h-30 border border-gray-300 rounded-md" />
                        })
                    }
                </div>
            </div>
        </div>}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-10 mx-5">
            {
                products.map(product => {
                    return <div key={product.id} onClick={() => {
                        setOpenMOdel(product);
                        setProdImage(product.images[0])
                    }} className="flex flex-col items-center shadow shadow-gray-300 p-5 transition-transform duration-300 ease-in-out hover:scale-105 rounded-md bg-white cursor-pointer">
                        <img src={product.images[0]} alt={product.title} />
                        <h2>{product.title}</h2>
                    </div>
                })
            }
        </div>
        <div className="flex justify-center gap-2 mt-5">
            {
                new Array(totalPage).fill(0).map((_, index) => index + 1).map(number => {
                    return <button onClick={() => setPage(number)} key={number} className="bg-amber-700 text-white w-10 h-10 rounded-full">{number}</button>
                })
            }
        </div>
    </div>
}
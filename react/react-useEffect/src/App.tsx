import { useEffect, useState } from "react"
import { getProduct } from "./services/product";
import type { DummyJsonResponse, Product } from "./types/dummyJson";

const limit = 30;

export const App = () => {
    const [products, setProduct] = useState<Product[]>([]);
    const [page, setPage] = useState<number>(1);
    const [totalPage, setTotalPage] = useState<number>(0)

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

    return <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
            {
                products.map(product => {
                    return <div key={product.id}>
                        <img src={product.images[0]} alt={product.title} />
                        <h2>{product.title}</h2>
                    </div>
                })
            }
        </div>
        <div className="flex justify-center gap-2">
            {
                new Array(totalPage).fill(0).map((_, index) => index + 1).map(number => {
                    return <button onClick={() => setPage(number)} key={number} className="bg-amber-700 text-white w-10 h-10 rounded-full">{number}</button>
                })
            }
        </div>
    </div>

}
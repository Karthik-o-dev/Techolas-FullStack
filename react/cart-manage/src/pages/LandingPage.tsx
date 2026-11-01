import { Fragment, useEffect, useState } from "react"
import { FETCH_LIMIT } from "../constants/api"
import { getProducts } from "../services/dummyJson";
import type { Product } from "../types/dummyJson";

export const LandingPage = () => {
    const [products, setProducts] = useState<Product[]>([])
    const [page, setPage] = useState<number>(0);
    useEffect(() => {
        const fetchProductData = async () => {
            const skip = (page - 1) * FETCH_LIMIT;
            const response = await getProducts(FETCH_LIMIT, skip);
            if (!response.ok) {
                alert(response.message);
                return
            }
            setProducts(response.data?.products || []);
        };
        fetchProductData();
    }, [page]);
    return <Fragment>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
            {products.map((product) => (
                <ProductCard navigate={navigate} key={product.id} product={product} onAddToCart={handleAddToCart} />
            ))}
        </div>
    </Fragment>
}
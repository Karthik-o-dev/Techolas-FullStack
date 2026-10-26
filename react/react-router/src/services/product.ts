import { productApi } from "../contants/api";


export const getProduct = async (limit: number, skip: number) => {
    try {
        const response = await fetch(`${productApi}?limit=${limit}&skip=${skip}`);
        const data = await response.json();
        return { ok: true, data };
    } catch (err) {
        return { ok: false, message: "can't fetch product" }
    }
}


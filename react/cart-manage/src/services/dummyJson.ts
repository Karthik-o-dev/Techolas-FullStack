import { productApi } from "../constants/api";
import type { DummyJsonResponse, Product } from "../types/dummyJson";

export const getProducts = async (limit: number, skip: number) => {
    try {
        const response = await fetch(`${productApi}/products?limit=${limit}&skip=${skip}`);
        const data = await response.json() as DummyJsonResponse;
        return { ok: true, data };
    } catch (error) {
        return { ok: false, message: "can't fetch product" }
    }
}

export const getProduct = async (id: number) => {
    try {
        const response = await fetch(`${productApi}/products/${id}`);
        const data = await response.json() as Product;
        return { ok: true, data };
    } catch (error) {
        return { ok: false, message: "Unable to fetch products." };
    }
}

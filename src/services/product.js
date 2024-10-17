import { apiClient } from "./config";

// to get products
export const apiGetProducts = async()=>{
    return apiClient.get("/products");
};

// to add product
export const apiAddProduct = async(payload)=>apiClient.post("/products",payload);

// to get single product
export const apiGetOneProduct = async(slug)=>apiClient.get(`/products/${slug}`);


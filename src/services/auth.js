import { apiClient } from "./config"

export const apiSignup = async (payload) =>{
    return apiClient.post("/users/signup",payload);
};

//implicit return for login
export const apiLogin = async payload =>
 apiClient.post("/users/login",payload);


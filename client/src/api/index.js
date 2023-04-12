import axios from "axios"

const API = axios.create({ baseURL: "http://localhost:8080" }); // server url

API.interceptors.request.use((req) => {
    // will run for each request to send token to server (to know if user is logged in or not)
    if (localStorage.getItem("profile")) {
      req.headers.Authorization = `Bearer ${
        JSON.parse(localStorage.getItem("profile")).response.token
      }`;
      // console.log(JSON.parse(localStorage.getItem("profile")).response.token)
    }
    return req;
  });

export const fetchProducts = () => API.get("/getproducts"); // http://localhost:1300 + /admin concatinated
export const createProducts = (newAdminItem) => API.post("/user/sell", newAdminItem);

export const fetchOwnerItems = () => API.get("/owner");
export const createOwnerItems = (newOwnerItem) => API.post("/owner", newOwnerItem);

export const signIn = (formData) => API.post("/user/signin", formData);
export const signUp = (formData) => API.post("/user/signup", formData);


export const fetchCartItem =()=>API.get("/user/getcart");
export const addCartItem =(newCartItem)=>API.post("/user/updatecart",newCartItem)
export const deleteCartItem =()=>API.delete("/cart");
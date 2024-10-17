import { toast } from "react-toastify";
import { apiGetProducts } from "../../services/product";


const Products = () => {
    let products;
    console.log("first : ",products)
    const fetchData = async ()=> {
        
       try {
        // const products = await apiGetProducts();
         products = [{name:"strapless bra", slug:"1-e"},
            {name:"sneakers", slug:"2-s"}];
        console.log("Products: ", products);
        return products;

       } catch (error) {
        toast.error(error.message);
        console.log(error.message);
        
       }
    };
    fetchData();
    console.log("Second : ", products);
  return <div>

  </div>;
  
};


export default Products;
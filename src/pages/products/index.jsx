import { toast } from "react-toastify";
import { apiGetProducts } from "../../services/product";
import { useEffect, useState } from "react";


const Products = () => {
    const[products, setProducts] = useState([]);
  
    console.log("first : ",products)
    // function to fetch from api
    const fetchData = async ()=> {
        
       try {
        const fetchedProducts = await apiGetProducts();
        //  products = [{name:"strapless bra", slug:"1-e"},
        //     {name:"sneakers", slug:"2-s"}];
        console.log("Products: ", fetchedProducts);
        setProducts(fetchedProducts);

       } catch (error) {
        toast.error(error.message);
        console.log(error.message);
        
       }
    };
    useEffect(()=>{
      fetchData();
     
    },[]);
    
  return <div>
    <h1>Here are the products</h1>
    <div className="h-[80%] w-[80%] border flex flex-col">
      {products.map((product)=> (
        <div key={product.slug}>
          {products.name}
        </div>
      )
       
      )}
    </div>
  </div>;
  
};


export default Products;
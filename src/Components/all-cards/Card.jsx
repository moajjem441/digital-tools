// import { useState } from "react";
import toast from "react-hot-toast";


const Card = ({ product ,cart,setCart,selectedCart,setSelectedCart}) => {
//  const [buttonClick,setButtonClick]=useState(false)

 const isAdded=selectedCart.some((item)=>item.id===product.id);

 const handleButtonClick=(e)=>{
  e.preventDefault();
  if(!isAdded){
    toast.success(`${product.name} added to cart!`);
    setCart(cart+1);
    // setButtonClick(true);
    setSelectedCart([...selectedCart,product])

  }
  
 }

  // console.log("product in card", product)
  return (
    <div>

   <div className="card w-91 sm:w-96 bg-base-100 shadow-sm">
  <div className="card-body">
    <div className="flex items-center justify-between gap-4">
      <img src={`/assets/products/${product.icon}`}></img>
    <span className={`badge badge-xs ${product.tag === "Best Seller" ? "text-[#bb4d00] bg-[#fef3c6]" : product.tag === "New" ? "text-[#0a883e] bg-[#dbfce7]" : "bg-gradient-to-r from-[#4f39f6] to-[#9514fa] bg-clip-text text-transparent"} text-lg p-4 rounded-4xl`}>{product.tag}</span>
    </div>
    <div className="text-left">
      <h2 className="text-2xl font-bold">{product.name}</h2>
      <span className="text-xl">${product.price.toFixed(2)}/{product.period}</span>
    </div>
    <ul className="mt-6 flex flex-col gap-2 text-xs">
    
     
   {product.features.map((feature,index) => (<li className="text-left" key={index}>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span >{feature}</span>
      </li>))}
      
      
    </ul>
    <div className="mt-6">
      <button disabled={isAdded}
      type="button"
       onClick={handleButtonClick} className={` w-full p-3 rounded-4xl text-white ${isAdded ? "bg-green-600 text-white": "bg-gradient-to-r from-[#4f39f6] to-[#9514fa] "} `}>{isAdded ? "Added to Cart" : "Buy Now"} </button>
    </div>
  </div>
</div>

    </div>
  );
};

export default Card;
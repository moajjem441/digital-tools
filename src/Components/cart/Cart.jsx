

const Cart = ({product,cart,setCart,selectedCart,setSelectedCart}) => {
    const cartItem=selectedCart.find((item) => item.id === product.id);

    console.log("Cart item",cartItem)

    if(!cartItem){
        return null;
    }
    return (
       <div>

 <div >
            

            <div className="w-full flex justify-between items-center gap-4 p-4 border-1 border-gray-200 rounded">
           
          <div className="flex items-center gap-4">

             <div>
                <img src={`/assets/products/${cartItem.icon}`}></img>
             </div>

              <div className="text-left">
                <h1>{cartItem.name}</h1>
              <p>${cartItem.price.toFixed(2)}</p>
              </div>
          </div>
            
            
            
            <button onClick={()=>{
                if (cart > 0){
                    setCart(cart-1);
                }
                
                const updatedCart=selectedCart.filter((item)=>item.id !== product.id);
                setSelectedCart(updatedCart);
            }} className="bg-white text-red-500 px-4 py-2 rounded">Remove  </button>
        </div>

       

        </div>
        

       </div>
    );
};

export default Cart;


const Cart = ({product,cart,setCart,selectedCart,setSelectedCart}) => {
    const cartItem=selectedCart.find((item) => item.id === product.id);

    if(!cartItem){
        return null;
    }
    return (
        <div className="max-w-[83.33%] mx-auto">
            <h1>{cartItem.name}</h1>
            <button onClick={()=>{
                if (cart > 0){
                    setCart(cart-1);
                }
                
                const updatedCart=selectedCart.filter((item)=>item.id !== product.id);
                setSelectedCart(updatedCart);
            }} className="bg-red-500 text-white px-4 py-2 rounded">Remove from Cart</button>
        </div>
    );
};

export default Cart;
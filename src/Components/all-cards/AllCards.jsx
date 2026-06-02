import { use, useState } from "react";
import Card from "./Card";
import Cart from "../cart/Cart";
import toast from "react-hot-toast";


const AllCards = ({ productData, cart, setCart }) => {

    const [buttonType, setButtonType] = useState("product");

    const [selectedCart, setSelectedCart] = useState([]);

    // const [color,setColor]=useState("product")

    // console.log("product data", productData)
    const handleCheckOutButton=()=>{
        setSelectedCart([]);
        setCart(0);
        toast.success("Checkout successfull!")
    }

    const data = use(productData);
    // console.log("data", data);


    const active = "bg-gradient-to-r from-[#4f39f6] to-[#9514fa] rounded-4xl";
    const inActive = "bg-gray-600 text-white";


    return (
        <div className=" w-full md:max-w-10/12 mx-auto my-20 text-center flex flex-col gap-15">
            <div>
                <h1 className="text-5xl md:text-7xl font-bold p-3">Premium Digital Tools</h1>
                <p className="text-gray-500 p-3">Choose from our curated collection of premium digital products designed
                    to boost your productivity and creativity.</p>

                <div className=" flex items-center justify-center gap-4 my-6">
                    <button onClick={() => setButtonType("product")} className={`${buttonType === "product" ? active : inActive} text-white font-bold py-2 px-4 `}>
                        Products
                    </button>
                    <button onClick={() => setButtonType("cart")} className={`${buttonType === "cart" ? active : inActive} text-white font-bold py-2 px-4 `}>Cart</button>

                </div>

            </div>


            <div >
                {

                    buttonType === "product" ?

                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-content items-center gap-10  mx-auto">
                            {

                                data.map((product) => <Card key={product.id} product={product} cart={cart} setCart={setCart} selectedCart={selectedCart} setSelectedCart={setSelectedCart}></Card>)
                            }


                        </div>
                        :
                        <div className="border-1 border-gray-200 rounded p-4">
                            <p className="text-2xl font-bold text-left my-4">Your Cart</p>

                            {
                                buttonType === "cart" && selectedCart.length === 0
                                    ? (
                                        <h2 className="text-2xl font-bold">
                                           Empty
                                        </h2>
                                    )
                                    : (
                                        selectedCart.map((product) => (
                                            <Cart
                                                key={product.id}
                                                product={product}
                                                cart={cart}
                                                setCart={setCart}
                                                selectedCart={selectedCart}
                                                setSelectedCart={setSelectedCart}
                                            />
                                        ))
                                    )
                            }

                            <div>
                                <p className=" text-2xl font-bold my-4 text-left">Total: ${selectedCart.reduce((acc, item) => acc + item.price, 0).toFixed(2)}</p>
                               
                               <button onClick={handleCheckOutButton} className="bg-gradient-to-r from-[#4f39f6] to-[#9514fa] text-white p-3 rounded-4xl w-full">Proceed to Checkout</button>
                            </div>
                        </div>

                }
            </div>


        </div>
    );
};

export default AllCards;
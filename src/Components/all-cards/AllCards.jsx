import { use } from "react";


const AllCards = ({productData}) => {
    console.log("product data",productData)

    const data = use(productData);
    console.log("data",data);

    return (
        <div className=" w-full md:max-w-10/12 mx-auto my-20 text-center">
            <h1 className="text-5xl md:text-7xl font-bold p-3">Premium Digital Tools</h1>
            <p className="text-gray-500 p-3">Choose from our curated collection of premium digital products designed
                to boost your productivity and creativity.</p>

                <button className="bg-gradient-to-r from-[#4f39f6] to-[#9514fa] text-white font-bold py-2 px-4 rounded">
                    Get Started
                </button>

        </div>
    );
};

export default AllCards;
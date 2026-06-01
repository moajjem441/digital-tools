

const CardSeperator = () => {
    return (
        <div className="text-white bg-gradient-to-r from-[#4f39f6] to-[#9514fa] flex flex-row gap-10  md:px-10 md:px-50 items-center justify-between h-40 w-full py-10">
           
           <div>
            <h1 className="text-3xl font-bold">50k+</h1>
            <p className="text-gray-300 font-bold">Active Users</p>
           </div>

            <div> 
            <h1 className="text-3xl font-bold">200+</h1>
            <p className="text-gray-300 font-bold">Premium Tools</p>
           </div>

            <div>
            <h1 className="text-3xl font-bold">4.9</h1>
            <p className="text-gray-300 font-bold">Rating</p>
           </div>

           


        </div>
    );
};

export default CardSeperator;
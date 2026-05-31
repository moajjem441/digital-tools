
const Banner = () => {
    return (
        <div className="grid grid-cols-12 gap-4 mt-20 max-w-10/12 mx-auto ">
            <div className="grid col-span-12  md:col-span-6 gap-6">

                <div className="  w-full  shadow-sm">

                            <div className=" max-w-[90%] mx-auto mb-4 rounded-4xl bg-[#e1e7ff] text-[#e039f6] flex items-center gap-2 px-3 py-1 rounded-lg">
                                <img className="" src="../../../public/assets/rectangle-3.png"></img>
                                <p> New: AI-Powered Tools Available</p>
                            </div>
                      
                        <h1 className="text-5xl font-bold my-3 text-center">Supercharge Your
                            Digital Workflow</h1>
                        <p className="text-center">
                            Access premium AI tools, design assets, templates, and productivity

                            software—all in one place. Start creating faster today.


                            Explore </p>
                        <div className="flex items-center gap-4 justify-center mt-6">
                            <div className="bg-gradient-to-r from-[#4f39f6] to-[#9514fa] text-white px-4 py-2 rounded-4xl">Explore Products</div>
                            <div className="flex border-2 rounded-2xl p-2 gap-2"> <img src="../../../public/assets/Play.png"></img> <button>Watch Demo</button></div>
                        </div>
                    
                </div>
            </div>

            <div className="col-span-12 md:col-span-6">
                <img className="w-full h-full object-cover" src="../../../public/assets/banner.png" alt="banner"></img>
            </div>
        </div>
    );
};

export default Banner;
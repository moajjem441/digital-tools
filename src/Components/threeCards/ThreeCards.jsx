

const ThreeCards = () => {
    return (
        <div className="bg-[#f9fafc]  my-10 py-10">
            <h1 className="text-5xl font-bold text-center mt-8 mb-4">Get Started in 3 Steps</h1>
            <p className="text-center text-gray-600 mb-10">Start using premium digital tools in minutes, not hours.</p>


            {/* cards part */}
            <div className="flex flex-col md:flex-row items-center gap-4 max-w-full md:max-w-10/12 mx-auto justify-center  px-5">
                <div className="card bg-base-100 w-91 md:w-96 shadow-sm rounded-2xl border-1 border-gray-300">
                    <div className="flex justify-end p-4">
                        <div className="flex bg-gradient-to-r from-[#4f39f6] to-[#9514fa] rounded-full w-10 h-10 items-center justify-center text-white font-bold">01</div>
                    </div>
                    <figure className="px-10 pt-10">
                        <img
                            src="/assets/user.png"
                            className=" rounded-full bg-[#e5d0f7] p-4" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-2xl">Create Account</h2>
                        <p className="text-gray-600 mb-8">Sign up for free in seconds. No credit card required to get started.</p>

                    </div>
                </div>



                <div className="card bg-base-100 w-91 md:w-96 shadow-sm rounded-2xl border-1 border-gray-300">
                    <div className="flex justify-end p-4">
                        <div className="flex bg-gradient-to-r from-[#4f39f6] to-[#9514fa] rounded-full w-10 h-10 items-center justify-center text-white font-bold">02</div>
                    </div>
                    <figure className="px-10 pt-10">
                        <img
                            src="/assets/package.png"
                            className=" rounded-full bg-[#e5d0f7] p-4" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-2xl">Choose Products</h2>
                        <p className="text-gray-600 mb-8">Browse our catalog and select the tools
                            that fit your needs.</p>

                    </div>
                </div>



                <div className="card bg-base-100 w-91 md:w-96 shadow-sm rounded-2xl border-1 border-gray-300">
                    <div className="flex justify-end p-4">
                        <div className="flex bg-gradient-to-r from-[#4f39f6] to-[#9514fa] rounded-full w-10 h-10 items-center justify-center text-white font-bold">03</div>
                    </div>
                    <figure className="px-10 pt-10">
                        <img
                            src="/assets/rocket.png"
                            className=" rounded-full bg-[#e5d0f7] p-7" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-2xl">Start Creatingt</h2>
                        <p className="text-gray-600 mb-8">Download and start using your premium
                            tools immediately.</p>

                    </div>
                </div>

            </div>


        </div>
    );
};

export default ThreeCards;
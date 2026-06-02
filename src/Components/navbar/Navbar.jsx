
const Navbar = ({cart}) => {

    return (
        <div className="navbar  shadow-sm max-w-full ">
            
            <div className="navbar max-w-full   md:max-w-10/12 mx-auto ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a>Products</a></li>
        <li><a>Features</a></li>
        <li><a>Pricing</a></li>
        <li><a>Testimonials </a></li>
        <li><a>FAQ </a></li>
        
      </ul>
    </div>
    <a className="btn btn-ghost  bg-gradient-to-r from-[#4f39f6] to-[#9514fa] bg-clip-text text-transparent text-2xl sm:text-4xl my-3">DigiTools</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
       <li><a>Products</a></li>
        <li><a>Features</a></li>
        <li><a>Pricing</a></li>
        <li><a>Testimonials </a></li>
        <li><a>FAQ </a></li>
    </ul>
  </div>
  <div className="navbar-end gap-4 sm:flex flex-col md:flex-row">
    <div className="relative">
    <span className="badge bg-[#e65b5b] text-white absolute -top-4 -right-5">{cart}</span>
      <img src="/assets/products/shopping-cart.png" alt="Shopping Cart" className="h-6 w-6  text-white"></img>
    </div>
    <button className="btn btn-ghost">Login</button>
    <a className="btn bg-gradient-to-r from-[#4f39f6] to-[#9514fa] text-white rounded-4xl">Get Started</a>
  </div>
</div>

        </div>
    );
};

export default Navbar;
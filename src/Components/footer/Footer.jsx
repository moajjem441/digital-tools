

const Footer = () => {
    return (
        <div>
            <footer className="footer sm:footer-horizontal bg-gray-950 text-white p-10 py-20">
  <aside>
    <h1 className="text-4xl font-bold">DigiTools</h1>
    <p>
      Premium digital tools for creators, professionals, and businesses. <br /> Work smarter with our suite of powerful tools.
    </p>
  </aside>
  <nav>
    <h6 className="font-bold text-lg">Product</h6>
    <a className="link link-hover">Features</a>
    <a className="link link-hover">Pricing</a>
    <a className="link link-hover">Templates</a>
    <a className="link link-hover">Integrations</a>
  </nav>
  <nav>
    <h6 className="font-bold text-lg">Company</h6>
    <a className="link link-hover">About </a>
    <a className="link link-hover">Blog</a>
    <a className="link link-hover">Careers</a>
    <a className="link link-hover">Press</a>
  </nav>
  <nav>
    <h6 className="font-bold text-lg">Resources</h6>
    <a className="link link-hover">Documentation</a>
    <a className="link link-hover">Community</a>
    <a className="link link-hover">Contact</a>
  </nav>

  <nav>
    <h6 className="font-bold text-lg">Social Links</h6>
    <div className="flex items-center gap-4">
       
    <a className="link link-hover"><img className="bg-white rounded-4xl" src="/assets/Instagram.png"></img></a>
    <a className="link link-hover"><img className="bg-white rounded-4xl" src="/assets/facebook.png"></img></a>
    <a className="link link-hover"><img className="bg-white rounded-4xl" src="/assets/twitter.png"></img></a>
    </div>
    
  </nav>

  
</footer>

<div className="bg-gray-950 text-gray-500 p-4 flex flex-col md:flex-row items-center justify-between border-t border-gray-800">
  <p className="text-center md:text-left">
    © 2024 DigiTools. All rights reserved.
  </p>

  <ul className="flex flex-col md:flex-row justify-center gap-2 md:gap-4 mt-2 md:mt-0 text-center">
    <li>Privacy Policy</li>
    <li>Terms of Service</li>
    <li>Cookies</li>
  </ul>
</div>
        </div>
    );
};

export default Footer;
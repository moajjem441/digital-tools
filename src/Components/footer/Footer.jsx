

const Footer = () => {
    return (
        <div>
            <footer className="footer sm:footer-horizontal bg-gray-950 text-white p-10 py-40">
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
        </div>
    );
};

export default Footer;
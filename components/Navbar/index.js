
import Image from 'next/image'
import Logo from '../../images/logo.svg'
const Navbar = () => {
    return (
        <div className="navbar">

        <div className="site-name">
        <Image src={Logo} alt="Girl working on laptop" className="header__image" />
        </div>
        <input type="checkbox" className="menu" name="menu" id="menu" />
     
          <label htmlFor="menu"></label>
  
        
    
        <nav className="nav">
          <ul className="nav__items">
            <li className="nav__item">
              <a href="#" className="nav-link">Features</a>
            </li>
            <li className="nav__item">
              <a href="#" className="nav-link">Pricing</a>
            </li>
            <li className="nav__item">
              <a href="#" className="nav-link">Resources</a>
            </li>
          </ul>
    
          <ul className="nav__buttons">
            <li className="nav__item">
              <a href="#" className="nav-link">Login</a>
            </li>
            <li className="nav__item">
              <a href="#"className="btn--round btn">Sign Up</a>
            </li>
          </ul>
        </nav>
    
      </div>
    )
}

export default Navbar;

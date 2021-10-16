import Image from 'next/image';
import FB from '../../images/icon-facebook.svg';
import TB from '../../images/icon-twitter.svg';
import PIN from '../../images/icon-pinterest.svg';
import INS from '../../images/icon-instagram.svg';

const Footer = () => {
    return (
     <>
    <footer className="footer">
    <div className="site__name">
      Shortly
    </div>

    <div className="site__features">
      <p className="headers">Features</p>
      <ul className="features__list">
        <li className="features__item">
          <a href="" className="features__link">Link Shortening</a>
        </li>
        <li className="features__item">
          <a href="" className="features__link">Branded Links</a>
        </li>
        <li className="features__item">
          <a href="" className="features__link">Analytics</a>
        </li>
      </ul>
    </div>

    <div className="site__resources">
      <p className="headers">Resources</p>
      <ul className="resources__list">
        <li className="resources__item">
          <a href="" className="resources__link">Blog</a>
        </li>
        <li className="resources__item">
          <a href="" className="resources__link">Developers</a>
        </li>
        <li className="resources__item">
          <a href="" className="resources__link">Support</a>
        </li>
      </ul>
    </div>

    <div className="site__pages">
      <p className="headers">Company</p>
      <ul className="pages__list">
        <li className="pages__item">
          <a href="#" className="pages__link">About</a>
        </li>
        <li className="pages__item">
          <a href="#" className="pages__link">Our Team</a>
        </li>
        <li className="pages__item">
          <a href="#" className="pages__link">Carers</a>
        </li>
        <li className="pages__item">
          <a href="#" className="pages__link">Contact</a>
        </li>
      </ul>
    </div>

    <div className="site__socials">
      <Image src={FB} alt="Facebook" className="site__social-media" width="30" height="30" /> 
      <Image src={TB} alt="Twitter" className="site__social-media" width="30" height="30" />
      <Image src={PIN} alt="Pinterest" className="site__social-media" width="30" height="30" />  
      <Image src={INS} alt="Instagram" className="site__social-media" width="30" height="30" />
    </div>

  </footer>
  </>

    )
}

export default Footer;

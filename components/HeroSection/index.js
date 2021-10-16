
import Image from 'next/image';
import HeroImage from '../../images/illustration-working.svg'



const HeroSection = () => {
    return (
        <main>
        <header className="header">  

    <div className="header__text-box">
      <h1 className="heading-primary">
        More than just shorter links
      </h1>
      <p className="header__text">
        Build your brand’s recognition and get detailed insights on how your links are performing.
      </p>
      <a href="#" className="header__cta btn--round btn ">Get Started</a>
    </div>

    <Image src={HeroImage} alt="Girl working on laptop" className="header__image" />

  </header>
 
  </main>
    )
}

export default HeroSection;

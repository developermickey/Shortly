import Image from 'next/image';
import First from '../../images/icon-brand-recognition.svg';
import Second from '../../images/icon-detailed-records.svg';
import Last from '../../images/icon-fully-customizable.svg';

const AdvancedStatistics = () => {
    return (

  <section className="statistics">

<div className="statistics__text-box">
  <h2 className="heading-secondary">
    Advanced Statistics
  </h2>
  <p className="statistics__text">
    Track how your links are performing across the web with our advanced statistics dashboard.
  </p>
</div>

<div className="statistics__info">

  <hr className="statistics__line" />

  <figure className="statistic__box statistic__box--1">
    <div className="statistic__image">
    <Image src={First} alt="icon-brand-recognition" className="statistic__img" />
    </div>
    <figcaption>Brand Recognition</figcaption>
    <p className="statistic__info-1">
      Boost your brand recognition with each click. Generic links don’t 
      mean a thing. Branded links help instil confidence in your content.
    </p>
  </figure>

  <figure className="statistic__box statistic__box--2">
    <div className="statistic__image">
    <Image src={Second} alt="icon-detailed-records" className="statistic__img" />
    </div>
    <figcaption>Detailed Records</figcaption>
    <p className="statistic__info-2">
      Gain insights into who is clicking your links. Knowing when and where 
people engage with your content helps inform better decisions.
    </p>
  </figure>

  <figure className="statistic__box statistic__box--3">
    <div className="statistic__image">
    <Image src={Last} alt="icon-fully-customizable" className="statistic__img" />
    </div>
    <figcaption>Fully Customizable</figcaption>
    <p className="statistic__info-3">
      Improve brand awareness and content discoverability through customizable 
links, supercharging audience engagement.
    </p>
  </figure>

</div>
</section>


    )
}

export default AdvancedStatistics;

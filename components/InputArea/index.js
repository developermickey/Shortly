import AdvancedStatistics from '../AdvancedStatistics';
import CTASection from '../CTASection';
const InputArea = () => {
    return (

<main className="main">
    <section className="links">

      <form action="#" className="link__input-box" id="user-form">
        <input type="text" className="user__link" id="user__link" placeholder="Shorten a link here..." />
        <label className="user__link-label" htmlFor="user__link">Please add a link</label>
        <button className="btn--rect btn submit__btn">Shorten it!</button>
      </form>

 
      <div className="link__output-boxes">

        

      </div>

    </section>
    <AdvancedStatistics />
    <CTASection />
    </main>


    )
}

export default InputArea;

import AdvancedStatistics from '../AdvancedStatistics';
import CTASection from '../CTASection';
import { useState } from 'react'
import axios from 'axios';
const InputArea = () => {
const [err, setErr] = useState(false);
const [mainurl, setMainurl] = useState("");
const [shorturl, setShorturl] = useState("");

const shortly = async (e) => {
  e.preventDefault()
  const {user__link} = e.target.elements


  if(!user__link.value.length>0) {
    console.log("mukesh")
    setErr(true)
  }
 else{
  setErr(false)
  setMainurl(user__link.value)
  console.log("Hello", user__link.value );
  const mukesh = await axios.get(`https://api.shrtco.de/v2/shorten?url=${user__link.value}`)
  console.log(mukesh.data.result.full_short_link)
  setShorturl(mukesh.data.result.full_short_link) 

 }
}
return (
<main className="main">
    <section className="links">
      <form action="#" className="link__input-box" id="user-form" onSubmit={shortly}>
        <input type="text" className="user__link" id="user__link" placeholder="Shorten a link here..." />
        <label className="user__link-label" htmlFor="user__link">Please add a link</label>
        <button className="btn--rect btn submit__btn">Shorten it!</button>
      </form>
{err&&<p>Please Provide Valid URL</p>}
 
      <div className="link__output-boxes">
        {shorturl&&<div className="link__output-box data-box--1">
        <p className="input__link">{mainurl}</p>
        <p className="output__link">{shorturl}</p>
        <button className="btn--rect btn data-btn--1 copy-btn">Copy</button>
      </div>}
        

      </div>

    </section>
    <AdvancedStatistics />
    <CTASection />
    </main>


    )
}

export default InputArea;

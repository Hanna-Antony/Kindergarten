import React from 'react'
import mail from '../../assets/email.svg'
import call from '../../assets/call.svg'
import location from '../../assets/location.svg'
import './Contact.css'
const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const apiToken = '194f9fc7-d736-4610-b1f1-8ad604a971dc'; // Replace with your Web3Forms API token
    const apiUrl = 'https://api.web3forms.com/submit';

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiToken}`,
          'Content-Type': 'multipart/form-data',
        },
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        console.log('Success', result);
      } else {
        console.error('Error', result);
      }
    } catch (error) {
      console.error('Error', error);
    }
  };


  
  return (
    <div id='contact' className='contact'>
        
        <div className="contact-tittle">
        <h1 className='heading'>Get in touch</h1>
        </div>
        <div className='contact-section'>
           <div className="contact-left">
            <h1>Let's talk</h1>
            <p> For enquires and admission contact any of the mentioned mode of communication</p>
           <div className="contact-details">
            <div className="contact-detail">

             <img src={mail} alt="" /><p>hannaantony2002@gmail.com</p>
            </div>
            <div className="contact-detail">
            <img src={call} alt="" /> <p>+772-825-524</p>
        
            </div>
            <div className="contact-detail">
             <img src={location} alt="" /> <p>Hill palace ,villa road Angamaly</p>
                
            </div>
           </div>
           </div>
           <form onSubmit={onSubmit} className='contact-right'>
<label htmlFor="">Your Name</label>
<input type="text" placeholder='Enter your name' name='name' />
<label htmlFor="">Your Email</label>
<input type="email" placeholder='enter your email' name='email' />
<label htmlFor="">Write your message here</label>
<textarea name="message"  rows="8" placeholder='Enter your message here'></textarea>
<button type='submit' className='contact-submit'>Submit Now</button>
           </form>
        </div>
        </div>
  )
}

export default Contact
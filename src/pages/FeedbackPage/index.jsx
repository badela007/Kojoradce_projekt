import React from 'react';
import './style.css';


export const FeedbackPage = () => {

  const form = document.querySelector("#form")
  const submitButton = document.querySelector("#submit")
  const scriptURL = 'https://script.google.com/macros/s/AKfycbzer36J_WZNMqZ9et3Ov1hrsytUFMXFIH1LORgkD2HCCO6yZ1r5Q5OkhgVWVAMH3qU7/exec'

  const handleSubmit = (e) => {

e.preventDefault()
    let requestBody = new FormData(e.target)
    fetch(scriptURL, { method: 'POST', body: requestBody})
      .then(response => {
         alert('Success!', response)
         submitButton.disabled = false
        })
      .catch(error => {
      alert('Error!', error.message)
        submitButton.disabled = false

      }
      )
  } 
 
  return (
    <>
    <div className='feedback_container'>
    <form className="feedback" onSubmit={handleSubmit}>
  <label>Byli informace od Kojorádce od Kojorádce pro váas užitečné? Zanechte nám zvkaz <input id="age-input" type="text" name="message" /></label>
  <button className="answerButton" type="submit">Odeslat</button>
</form>
</div>
    </>
  );
};

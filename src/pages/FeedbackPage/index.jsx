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
    <form onSubmit={handleSubmit}>
  <label>Zadej svůj věk: <input id="age-input" type="text" name="message" /></label>
  <button type="submit">Odeslat</button>
</form>
    </>
  );
};

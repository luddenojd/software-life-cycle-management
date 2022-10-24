import React from "react"
import "./BetterPage.css"
const BetterPage = ({ updatePage }) => {
  return (
    <div className="wrapper">
      <div className="form-start">
        <h2>Vad kunde ha varit bättre?</h2>
        <div>
          <p>Dina förslag:</p>
          <textarea name="" id="" cols="50" rows="10"></textarea>
        </div>
        <button onClick={() => updatePage(null)}>
          <h4>Skicka in</h4>
        </button>
      </div>
    </div>
  )
}

export default BetterPage

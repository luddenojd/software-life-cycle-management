import React from "react"
import "./KursPlan.css"
const KursPlan = ({ updatePage }) => {
  return (
    <div className="wrapper">
      <div className="form-start">
        <h2>
          Hur relevant tycker du att kursplanen har varit för din utbildning?
        </h2>
        <div className="radio-buttons">
          <input type="radio" name="choice" />
          <p>Helt orelevant</p>
          <input type="radio" name="choice" />
          <p>Ganska orelevant</p>
          <input type="radio" name="choice" />
          <p>Relevant</p>
          <input type="radio" name="choice" />
          <p>Väldigt relevant</p>
          <input type="radio" name="choice" />
          <p>Oerhört relevant</p>
        </div>
        <button onClick={() => updatePage(null)}>
          <h4>Nästa</h4>
        </button>
      </div>
    </div>
  )
}

export default KursPlan

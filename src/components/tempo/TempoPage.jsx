import React from "react"
import "./TempoPage.css"
const TempoPage = ({ updatePage }) => {
  return (
    <div className="wrapper">
      <div className="form-start">
        <h2>Hur har du upplevt tempot under kursens gång?</h2>
        <div className="radio-buttons">
          <input type="radio" name="choice" />
          <p>För lågt</p>
          <input type="radio" name="choice" />
          <p>Ganska lågt</p>
          <input type="radio" name="choice" />
          <p>Lagom</p>
          <input type="radio" name="choice" />
          <p>Ganska högt</p>
          <input type="radio" name="choice" />
          <p>Väldigt högt</p>
        </div>
        <button onClick={() => updatePage(null)}>
          <h4>Nästa</h4>
        </button>
      </div>
    </div>
  )
}

export default TempoPage

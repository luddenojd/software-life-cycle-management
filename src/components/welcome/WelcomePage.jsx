import React from "react"
import "./WelcomePage.css"

const WelcomePage = ({ updatePage }) => {
  return (
    <div className="wrapper">
      <div className="form-start">
        <h2>Kursutvärdering för kursen "Software Lifecycle Management"</h2>
        <button onClick={() => updatePage("first")}>
          <h4>Starta utvärdering</h4>
        </button>
      </div>
    </div>
  )
}

export default WelcomePage

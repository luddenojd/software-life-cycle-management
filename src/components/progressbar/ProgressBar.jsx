import React from "react"
import "./ProgressBar.css"
const ProgressBar = ({ width }) => {
  return (
    <div className="progress-wrapper">
      <div className="progress-bar">
        <div style={{ width: width }} className="progress-fill"></div>
      </div>
    </div>
  )
}

export default ProgressBar

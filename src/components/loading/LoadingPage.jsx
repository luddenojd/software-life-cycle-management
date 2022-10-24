import React from "react"
import { useState, useEffect } from "react"
import "./LoadingPage.css"

const LoadingPage = ({ updatePage }) => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="wrapper">
      {show !== true ? (
        <div class="lds-roller">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      ) : (
        <div className="back-wrapper">
          <h1 className="thank-you">Tack för din medverkan!</h1>
          <button onClick={() => updatePage(null)}>
            <h4>Tillbaka</h4>
          </button>
        </div>
      )}
    </div>
  )
}

export default LoadingPage

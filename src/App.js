import WelcomePage from "./components/welcome/WelcomePage.jsx"
import KursPlan from "./components/kursplan/KursPlan.jsx"
import TempoPage from "./components/tempo/TempoPage.jsx"
import BetterPage from "./components/better/BetterPage.jsx"
import LoadingPage from "./components/loading/LoadingPage.jsx"
import ProgressBar from "./components/progressbar/ProgressBar.jsx"
import { useState, useEffect } from "react"
import "./App.css"

function App() {
  const [page, setPage] = useState(null)
  const [progress, setProgress] = useState(100)

  const updatePage = (nextPage) => {
    setPage(nextPage)
  }

  useEffect(() => {
    if (page === null) {
      setProgress(100)
    }
    if (page === "first") {
      setProgress(200)
    }
    if (page === "tempo") {
      setProgress(300)
    }
    if (page === "better") {
      setProgress(400)
    }
  }, [page])

  return (
    <div className="App">
      <h1>Undersökning IT-Högskolan 2022</h1>
      <ProgressBar width={progress} />
      {page === null ? <WelcomePage updatePage={updatePage} /> : ""}
      {page === "first" ? <KursPlan updatePage={updatePage} /> : ""}
      {page === "tempo" ? <TempoPage updatePage={updatePage} /> : ""}
      {page === "better" ? <BetterPage updatePage={updatePage} /> : ""}
      {page === "loading" ? <LoadingPage updatePage={updatePage} /> : ""}
    </div>
  )
}

export default App

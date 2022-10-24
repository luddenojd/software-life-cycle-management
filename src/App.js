import WelcomePage from "./components/welcome/WelcomePage.jsx"
import KursPlan from "./components/kursplan/KursPlan.jsx"
import TempoPage from "./components/tempo/TempoPage.jsx"
import BetterPage from "./components/better/BetterPage.jsx"
import { useState } from "react"
import "./App.css"

function App() {
  const [page, setPage] = useState(null)

  const updatePage = (nextPage) => {
    setPage(nextPage)
  }

  return (
    <div className="App">
      <h1>Undersökning IT-Högskolan 2022</h1>
      {page == null ? <WelcomePage updatePage={updatePage} /> : ""}
      {page == "first" ? <KursPlan updatePage={updatePage} /> : ""}
      {page == "tempo" ? <TempoPage updatePage={updatePage} /> : ""}
      {page == "better" ? <BetterPage updatePage={updatePage} /> : ""}
    </div>
  )
}

export default App

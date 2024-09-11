import { useState, createContext } from "react"
import './App.css'
import TotalWorth from "./components/TotalWorth";
import Header from "./components/Header"
import PageContent from "./components/PageContent";
import Receipts from "./components/Receipts";

export const AppContext=createContext(null);


function App() {

  const [totalWorth, setTotalWorth]=useState(100000000000);

  return (
    <AppContext.Provider value={{totalWorth, setTotalWorth}}>
      <div>
        <Header/>
        <TotalWorth/>
        <PageContent/>
        <Receipts/>
      </div>
    </AppContext.Provider>
  )
}

export default App

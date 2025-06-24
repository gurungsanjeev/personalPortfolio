import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import Alert from './components/Alert'


function App() {
  const [mode, setMode] = useState("light")
  const [alert, setAlert] = useState(null)

  // creating the showAlert function
  // it wii take two parametes as type and message
  const showAlert = (type, message) => {
    setAlert({
      type: type,
      msg: message
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }


  const togglemode = () => {
    if (mode === "light") {
      setMode("dark")

      document.body.style.backgroundColor = "rgb(51, 50, 60)";
      document.body.style.color = "white";
      showAlert("success", "Dark Mode is enable")
      document.title = "sanjeev-DarkMode"

      setInterval(() => {
        document.title = "Sanjeev Portfolio";
      }, 2000);
      setInterval(() => {
        document.title = "Welcome";
      }, 1500);

    }
    else {
      setMode("light")

      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("success", "light Mode is enable")
      document.title = "sanjeev-LightMode"
    }
  }
  return (


    <>

      <Navbar mod={mode} togglemod={togglemode} />
      <Alert alert={alert} />
      <Outlet />
      <Footer />
    </>
  )
}

export default App

import ContactUs from "./Components/ContactUs/ContactUs"
import Footer from "./Components/Footer/Footer"
import GetStarted from "./Components/GetStarted/GetStarted"
import HeroSection from "./Components/HeroSection/HeroSection"
import LogosSec from "./Components/LogosSec/LogosSec"
import Navbar from "./Components/Navbar/Navbar"
import OurValue from "./Components/OurValue/OurValue"
import Residencies from "./Components/Residencies/Residencies"

function App() {
  

  return (
    <>
      <Navbar/>
      <HeroSection/>   
      <LogosSec/>
      <Residencies/>
      <OurValue/>
      <ContactUs/>
      <GetStarted/>
      <Footer/>
    </>
  )
}

export default App

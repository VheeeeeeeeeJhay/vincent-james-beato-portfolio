import './App.css'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

function App() {

  return (
    <>
      <Navbar />
      <Footer />
    </>
  )
}

export default App

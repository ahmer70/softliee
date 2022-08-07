

import HomePage from './components/pages/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import {

  BrowserRouter as Router,
  Routes,
  Route,

} from 'react-router-dom'
import Navbar from './components/Navbar';
import SubNav from './components/SubNav';
import Footer from './components/Footer';
import NewsLetter from './components/NewsLetter';
import ProductPage from './components/pages/productpage';
import './App.css';
import './index.css'
import MobileMenu from './layout/MobileMenu';


let path = window.location.pathname
function App() {
  return (
    <>


      <Router>
        <div>
          <div className='tablet-mode'>
            <Navbar />

            <SubNav />
          </div>

          <div className='mobile-mode-off'>
            <MobileMenu />
          </div>
          {/* <HomePage /> */}

          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/product_page" element={<ProductPage />} />

          </Routes>
          <HomePage />
          <div className='' style={{ backgroundColor: "black" }}>

            <div className='mx-auto mt-2' style={{ maxWidth: "1360px" }}>
              <NewsLetter />


            </div>
            <hr style={{ color: "white", opacity: 1 }} />

            <div className='mx-auto ' style={{ maxWidth: "1360px" }}>


              <Footer />

            </div>
          </div>
          {/* <div className='' style={{ backgroundColor: "black" }}>
            {path === '/' && <>
              <div className='mx-auto mt-2' style={{ maxWidth: "1360px" }}>
                <NewsLetter />


              </div>
              <hr style={{ color: "white", opacity: 1 }} />
            </>}
            <div className='mx-auto ' style={{ maxWidth: "1360px" }}>


              <Footer />

            </div>
          </div> */}
        </div>
      </Router>

    </>
  );
}

export default App;

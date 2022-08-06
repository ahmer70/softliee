

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
const people = [
  {
    name: 'Calvin Hawkins',
    email: 'calvin.hawkins@example.com',
    image:
      'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Kristen Ramos',
    email: 'kristen.ramos@example.com',
    image:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Ted Fox',
    email: 'ted.fox@example.com',
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
]

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
          <div className='mx-auto mt-2' style={{
            backgroundColor: "black", maxWidth: "1360px"
          }}>
            <NewsLetter />


          </div>
          <div className='' style={{ backgroundColor: "black" }}>
            {path === '/' && <>
              <div className='mx-auto mt-2' style={{ maxWidth: "1360px" }}>
                <NewsLetter />


              </div>
              <hr style={{ color: "white", opacity: 1 }} />
            </>}
            <div className='mx-auto ' style={{ maxWidth: "1360px" }}>


              <Footer />

            </div>
          </div>
        </div>
      </Router>

    </>
  );
}

export default App;

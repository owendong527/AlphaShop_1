// import logo from './logo.svg';

import "./App.css";
// import ProgressControl from './components/ProgressControl/ProgressControl.jsx';
import ProgressControl from "./components/ProgressControl/ProgressControl.jsx";
import StepProgress from "./components/StepProgress/StepProgress.jsx";
import StepOne from "./components/Steps/StepOne.jsx";
import StepTwo from "./components/Steps/StepTwo.jsx";
import StepThree from "./components/Steps/StepThree.jsx";
import Cart from "./components/Cart/Cart.jsx";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      {/* <div id="svg-icons-container" style="display: none;"></div> */}

      {/*  header  */}
      <header className="site-header">
        <div className="header-container mx-auto">
          {/* navbar-toggle  */}
          <input id="navbar-toggle" className="navbar-toggle" type="checkbox" />
          <label htmlFor="navbar-toggle" className="burger-container">
            <object
              data="./public/icons/toggle.svg"
              className="icon-toggle cursor-point"
            ></object>
          </label>

          {/*  navbar-menu  */}
          <nav className="navbar-menu">
            <ul className="nav-list site-menu-list mr-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  男款
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  女款
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  最新消息
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  客製商品
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  聯絡我們
                </a>
              </li>
            </ul>

            <ul className="nav-list site-action-list">
              {/*  search  */}
              <li className="nav-item">
                <object
                  data="./public/icons/search.svg"
                  className="nav-icon cursor-point"
                  type="image/svg+xml"
                ></object>
              </li>
              {/*  cart */}
              <li className="nav-item">
                <object
                  data="./public/icons/cart.svg"
                  className="nav-icon cursor-point"
                  type="image/svg+xml"
                ></object>
              </li>
              <li id="theme-toggle" className="nav-item">
                {/*  moon */}
                <object
                  data="./public/icons/moon.svg"
                  className="nav-icon cursor-point"
                ></object>
                {/*  sun */}
                {/* <!-- <object data="./public/icons/sun.svg" className="nav-icon cursor-point">
              </object>    --> */}
              </li>
            </ul>
          </nav>

          {/*  logo */}
          <a className="header-logo-container" href="#">
            <img src="./public/icons/logo.svg" className="cursor-point" />
          </a>
        </div>
      </header>

      {/*  main */}
      <main className="site-main">
        <div className="main-container">
          {/*  register  */}
          <section
            className="register-container col col-lg-6 col-sm-12"
            data-phase="1"
            data-total-price="0"
          >
            {/* <!-- register-title --> */}
          <h2 class="register-title col col-12">結帳</h2>
            {/* register-progress */}
            <StepProgress />
            {/* register-form */}
            <section className="form-container col col-12">
              {/*  step 1 address phase */}
              <StepOne />
              {/* step 2 shipping phase  */}
              <StepTwo />
              {/* step 3 credit-card phase  */}
              <StepThree />
            </section>
          </section>

          {/* cart */}
          
          <Cart />
          {/*  progress-control  */}
          <ProgressControl />
        </div>
      </main>

      {/*  footer */}
      <Footer />
    </div>
  );
}
export default App;

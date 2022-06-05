import React, { useContext } from "react";
// import "./Works.css";
// import Upwork from "../../img/Upwork.png";
// import Fiverr from "../../img/fiverr.png";
// import Amazon from "../../img/amazon.png";
// import Shopify from "../../img/Shopify.png";
// import Facebook from "../../img/Facebook.png";
// import { themeContext } from "../../Context";
// import { motion } from "framer-motion";
// import {Link} from 'react-scroll'
const RegPage = () => {

  // transition
  return (
          <div>
          <header>
            <nav className="navbar navbar-expand-lg navbar-light ">
              <div className="container">
                <a className="navbar-brand" href="#">ЛОГО</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav mb-2 mb-lg-0 ml-auto">
                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="./sample.jpg" className="circle" />
                      </a>
                      <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a className="dropdown-item" href="#">Профиль</a></li>
                        <li><a className="dropdown-item" href="#">Мои заказы</a></li>
                        <li><a className="dropdown-item" href="#">Мои размещения</a></li>
                        <li><a className="dropdown-item" href="#">Мои отклики</a></li>
                        <li><a className="dropdown-item" href="#">Мои чаты</a></li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </header>

          <main>
            <div className="container">
              <div className="content mt-3 mb-1 border border-dark">
                <div className="m-3">
                    <div className="card border border-dark my_rounded dp_width">
                      <h3 className="text-center mt-3 mb-3">Регистрация</h3>
                        <form>
                          <div class="form-group row ml-2">
                            <label for="staticEmail" class="col-sm-3 col-form-label">Имя</label>
                            <div class="col-sm-8">
                              <input type="text" class="form-control" id="Name" value="" />
                            </div>
                          </div>
                          <div class="form-group row ml-2">
                            <label for="staticEmail" class="col-sm-3 col-form-label">Email</label>
                            <div class="col-sm-8">
                              <input type="text" class="form-control" id="staticEmail" value="email@example.com" />
                            </div>
                          </div>
                          <div class="form-group row ml-2">
                            <label for="inputPassword" class="col-sm-3 col-form-label">Пароль</label>
                            <div class="col-sm-8">
                              <input type="password" class="form-control mr-2" id="inputPassword" placeholder="" />
                            </div>
                          </div>
                          <div class="form-group row ml-2">
                            <label for="inputPassword" class="col-sm-3 col-form-label">Повторите пароль</label>
                            <div class="col-sm-8">
                              <input type="password" class="form-control mr-2" id="inputPassword" placeholder="" />
                            </div>
                          </div>
                          <div className="text-center">
                            <button type="submit" class="btn text-center mb-3 my_rounded bg_button">Зарегестрироваться</button>
                          </div>
                        </form>
                    </div>
                  </div>
              </div>
            </div>           
          </main>
        </div>
      )
    }

export default RegPage;
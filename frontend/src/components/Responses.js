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
const Responses = () => {

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
                  <h1 className="text-white h1_font">Отклики</h1>
                </div>
                <div className="m-3">
                  <div className="card border border-dark my_rounded">
                    <div className="row">
                      <div className="col-xl-1 col-lg-2 col-md-2">
                        <div className="my-1 mx-2">
                          <img src="https://assets.transloadit.com/assets/demos/outputs/deduped-419d30b6366f40918446c71c0a3d82cf.jpg__preview.jpg" class="rounded-circle mx-auto d-block" alt="" />
                        </div>
                      </div>
                      <div className="col-xl-9 col-lg-8 col-md-7">
                        <div className="pt-2 pl-2 centr">
                          Андрей Лонов
                        </div>
                        <div className="border border-dark my_rounded py-2 px-2 my-1 mx-2">
                          Отклик на <small class="my_color">Решить задачу на число Фибоначчи</small>
                        </div>
                      </div>
                      <div className="col-xl-2 col-lg-2 col-md-3 w-100 h-100">
                        <div class="d-grid gap-2 h-100 mr-1 my-1 mx-1 px-1">
                          <button class="btn bg_button my_rounded w-100 py-4 mr-1 px-2 button_h" type="submit">Ответить</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>           
          </main>
        </div>
      );
    };

export default Responses;
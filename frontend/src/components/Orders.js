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
const Orders = () => {

  // transition
  return (
      <div>
          <header>
            <nav className="navbar navbar-expand-lg navbar-light ">
              <div className="container">
                <a className="navbar-brand" href="#">ЛОГО</a>
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
              <div className="content mt-3 mb-3 border border-dark">
                <div className="m-3">
                  <div class="input-group mb-3">
                    <input type="text" class="form-control border border-dark" placeholder="Search" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                    <div class="input-group-append s_button">
                      <button class="btn btn-outline-secondary border border-dark" type="button"><img src="{image}" className="circle" /></button>
                    </div>
                  </div>
                </div>
                  {/*<ul className="list-group list-group-flush">
                    {this.renderItems()}
                  </ul>*/}
                <div className="m-3">
                  <div class="row">
                    <div class="col-9">
                      <div class="card border border-dark my_rounded">
                        <div class="row">
                          <div class="col-9">
                            <div class="card-body pb-2">
                              <h5 class="card-title mb-3">Заголовок</h5>
                              <a href="#" class="card-link subsubject p-1 pr-3 pl-3 ml-0 mr-1 my_rounded text-white">Математика</a>
                              <a href="#" class="card-link subsubject p-1 pr-3 pl-3 ml-0 mr-1 my_rounded text-white">Линейная алгебра</a>
                            </div>
                          </div>
                          <div class="col-3 vcenter">
                            <span class="subdttm p-1 pr-3 pl-3 ml-4 my_rounded border border-dark">2000 руб.</span>
                          </div>
                          <div class="col-9">
                            <div class="card-body pt-0 pb-1">
                              <div class="my_rounded text-black mt-1">
                                <span class="subdttm p-1 pr-3 pl-3 my_rounded border border-dark">16.03-12:00</span>
                              </div>
                            </div>
                          </div>
                          <div class="col-3 d-flex">
                            <span class="ml-5">1<img src="{image}" className="circle" /></span>
                            <span class="ml-2">1<img src="{image}" className="circle" /></span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-3">
                      <div class="accordion" id="accordionExample">
                        <div class="accordion-item ">
                          <h4 class="accordion-header" id="headingOne">
                            <button class="accordion-button my_rounded s_button border border-dark p-2 w-100" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                              Направление
                            </button>
                          </h4>
                          <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                              <ul class="list-group" >
                                <li class="content list-group-item py-0 mx-3">
                                  <input class="form-check-input" type="checkbox" value="" aria-label="..." />
                                  First checkbox
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div class="accordion-item">
                          <h4 class="accordion-header" id="headingTwo">
                            <button class="accordion-button my_rounded s_button border border-dark p-2 w-100" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                              Предемет
                            </button>
                          </h4>
                          <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                              <ul class="list-group" >
                                <li class="content list-group-item py-0 mx-3">
                                  <input class="form-check-input" type="checkbox" value="" aria-label="..." />
                                  First checkbox
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div class="accordion-item">
                          <h4 class="accordion-header" id="headingThree">
                            <button class="accordion-button my_rounded s_button border border-dark p-2 w-100" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                              Сроки
                            </button>
                          </h4>
                          <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                              <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                          </div>
                        </div>
                        <div class="accordion-item">
                          <h4 class="accordion-header" id="headingFour">
                            <button class="accordion-button my_rounded s_button border border-dark p-2 w-100" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                              Цена
                            </button>
                          </h4>
                          <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                              <input type="range" class="form-range w-100" id="customRange1" />
                            </div>
                          </div>
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

export default Works;
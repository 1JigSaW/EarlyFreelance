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
const OrderPage = () => {

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
                  <div className="card border border-dark my_rounded">
                    <div className="row">
                      <div className="col-sm-12 col-md-2 col-lg-1 col-12 order-1 order-md-1">
                        <div className="my-1 mx-3">
                          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg" class="rounded rounded-circle mx-auto d-block" width="110px" height="110px"/>
                        </div>
                      </div>
                      <div class="col-sm-12 col-md-6 col-lg-8 col-12 order-3 order-md-2">
                        <div class="card-body pb-2 txt_br mx-4">
                          <h5 class="card-title mb-3 h_font">Заголовок</h5>
                          <a href="#" class="card-link subsubject p-1 pr-3 pl-3 ml-0 mr-1 my_rounded text-white subj_font txt_br centr text-break">Математика</a>
                          <a href="#" class="card-link subsubject p-1 pr-3 pl-3 ml-0 mr-1 my_rounded text-white subj_font txt_br centr text-break">Линейная&nbsp;алгебра</a>
                        </div>
                      </div>
                      <div class="col-sm-0 col-md-4 col-lg-3 col-0 vcenter centr order-4 order-md-2">
                        <span class="ml-null subdttm p-1 pr-3 pl-3 mx-4 my_rounded border border-dark sub_font">2000 руб.</span>
                      </div>
                      <div className="col-sm-12 col-md-2 col-lg-1 col-12  order-6 order-md-3">
                        <div class="d-flex mx-5 centr">
                          <span class="p-1 d-flex">1<img src="{image}" className="circle" /></span>
                          <span class="p-1 d-flex">1<img src="{image}" className="circle" /></span>
                        </div>
                      </div>
                      <div class="col-sm-12 col-md-6 col-lg-8 col-12 order-5 order-md-4">
                        <div class="card-body pt-0 pb-2">
                          <div class="my_rounded text-black mt-1 mx-4 centr">
                            <span class="ml-null subdttm p-1 pr-3 pl-3 my_rounded border border-dark sub_font">16.03-12:00</span>
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-0 col-md-4 col-lg-3 col-0 sub_font to_right centr order-2 order-md-5">
                        <span class="p-1">1<img src="{image}" className="circle" /></span>
                        <span class="p-1">1<img src="{image}" className="circle" /></span>
                      </div>
                    </div>
                  </div>

                  <div className="mx-1 my-2">
                    <div className="card border border-dark my_rounded min_height">
                      <h6 class="card-title ml-3 mt-2 h_font">Описание</h6>
                    </div>
                  </div>
                  <div className="mx-1 my-2">
                    <div className="row">
                      <div class="col-6 col-md-3 col-lg-3">
                        <div className="card border border-dark my_rounded">
                          <p class="h5 ml-3 mb-1 mt-2 h_font">Excel</p>
                          <p class="ml-3 mb-1 subj_font">Название</p>
                          <div className="float-right">
                            <img src="https://logojinni.com/ru/image/logos/microsoft%20excel%202013-697.svg" class="rounded float-right mx-3 mb-2"  width="40px" height="40px"/>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                    <div className="card border border-dark my_rounded mt-2 mb-1">
                      <div className="mx-3">
                        <p class="h5 ml-2 mb-1 mt-2 h_font">Отклики</p>
                      </div>
                      <div className="mx-3">
                        <div className="card border border-dark my_rounded mb-2">
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
                              <div className="border border-dark my_rounded py-2 px-2 my-1 mx-2 sub_font">
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
              </div>
            </div>           
          </main>
        </div>
    )
export default OrderPage;
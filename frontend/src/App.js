import React, {useEffect, useState, Component}  from 'react'
import image from "./images/sample.jpg";

function Orders(props) {
  const {order} = props
  return <div className='col-10 mx-auto col-md-6'>
    <p>{order.title}</p>
  </div>
}


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewCompleted: false,
      activeItem: {
        title: "",
        description: "",
        completed: false
      },
      todoList: []
      };
  }

    async componentDidMount() {
      try {
        const res = await fetch('http://localhost:8000/api/orders/');
        const todoList = await res.json();
        this.setState({
          todoList
        });
      } catch (e) {
        console.log(e);
    }
    }
    renderItems = () => {
      const { viewCompleted } = this.state;
      const newItems = this.state.todoList.filter(
        item => item.completed === viewCompleted
      );
      return newItems.map(item => (
        <li 
          key={item.id}
          className="list-group-item d-flex justify-content-between align-items-center"
        >
          <span 
            className={`todo-title mr-2 ${
              this.state.viewCompleted ? "completed-todo" : ""
            }`}
            title={item.description}
            >
              {item.title}
            </span>
        </li>
      ));
    };

    render() {
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
                      <div className="col-7 col-md-12 col-lg-7 col-xl-8">
                        <div className="row">
                          <div className="col-4 col-md-4 col-lg-3 col-xl-2">
                            <div className="my-1 mx-3 float-left">
                              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg" class="rounded rounded-circle mx-auto d-block" width="110px" height="110px"/>
                            </div>
                            <div class="centr mx-5">
                              <span class="p-1 d-flex">3 <img src="{image}" className="circle" /></span>
                            </div>
                          </div>
                          <div className="col-8 col-md-8 col-lg-9 col-xl-10">
                            <h4 class="card-title mt-3 mx-3">Михаил Дуев</h4>
                            <h5 class="card-title mt-1 mx-3">Дата регистрации: 12.12.2021</h5>
                            <button class="btn bg_button my_rounded ml-3 mt-3 py-1 px-4 button_h border border-dark" type="submit">Написать</button>
                          </div>
                        </div>
                          <h5 class="card-title mt-1 ml-5">Навыки:</h5>
                          <div className="row mx-3">
                            <div className="col-6 col-md-3 col-xl-3 px-0">
                              <div className="card border border-dark my_rounded text-center mb-2 ml-3 bg_link">
                                <a href="#" class="card-link">Python</a>
                              </div>
                            </div>
                            <div className="col-6 col-md-3 col-xl-3 px-0">
                              <div className="card border border-dark my_rounded text-center mb-2 ml-3 bg_link">
                                <a href="#" class="card-link">C++</a>
                              </div>
                            </div>
                            <div className="col-6 col-md-3 col-xl-3 px-0">
                              <div className="card border border-dark my_rounded text-center mb-2 ml-3 bg_link">
                                <a href="#" class="card-link">Data Science</a>
                              </div>
                            </div>
                            <div className="col-6 col-md-3 col-xl-3 px-0 ">
                              <div className="card border border-dark my_rounded text-center mb-2 ml-3 mr-0 bg_link">
                                <a href="#" class="card-link">Python</a>
                              </div>
                            </div>
                          </div>
                      </div>
                      <div className="col-2 col-md-12 col-xl-2 my-3 pr-0 text-center mx-4">
                        <div class="row">
                          <div class="col-12 col-md-11 col-xl-12">
                            <div className="bg_button my_rounded">
                              <p class="h6 mx-2 px-2 pb-0 mb-0 pt-2 text-center my_font2">Выполнено:</p>
                              <h2 class="display-4 px-2 pt-0 mt-0 text-center">20</h2>
                            </div>
                          </div> 
                          <div class="col-12 col-md-11 col-xl-12">
                            <div className="bg_link my_rounded">
                              <p class="h6 mx-2 px-2 pb-0 mb-0 pt-2 text-center my_font2">Размещено:</p>
                              <h2 class="display-4 px-2 pt-0 mt-0 text-center">3</h2>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-2 col-md-12 col-lg-3 col-xl-2 vcenter mx-0">
                        <div class="row">
                          <div class="col-12 col-xl-12">
                            <div className="bg_yellow my_rounded px-2">
                              <p class="h6 mx-2 px-2 pb-0 mb-0 pt-2 text-center">Оценка:</p>
                              <h2 class="display-4 px-2 pt-0 mt-0 text-center">5.0</h2>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="m-3">
                  <div className="card border border-dark my_rounded min_height">
                    <h6 class="card-title ml-3 mt-2 h_font">О себе:</h6>
                  </div>
                </div>
                <div className="m-3">
                  <div className="card border border-dark my_rounded mt-2 mb-1">
                    <div className="mx-3">
                      <p class="h5 ml-2 mb-1 mt-2 h_font">Отзывы:</p>
                    </div>
                    <div className="mx-3 mb-2">
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
                            <p className="my-0">allalalalalalal</p>
                          </div>
                        </div>
                        <div className="col-xl-2 col-lg-2 col-md-3 w-100 h-100">
                          <div class="d-grid gap-2 h-100 mr-1 my-1 mx-1 px-1">
                            <h2 class="display-4 px-2 pt-0 mt-0 text-center bg_yellow my_rounded">5.0</h2>
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
    }
  }
  
export default App;
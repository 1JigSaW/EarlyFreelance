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
                      <div className="col-8">
                        <div className="row">
                          <div className="col-2">
                            <div className="my-1 mx-3 float-left">
                              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg" class="rounded rounded-circle mx-auto d-block" width="110px" height="110px"/>
                            </div>
                            <div class="centr mx-5">
                              <span class="p-1 d-flex">3 <img src="{image}" className="circle" /></span>
                            </div>
                          </div>
                          <div className="col-10">
                            <h4 class="card-title mt-3 mx-3">Михаил Дуев</h4>
                            <h5 class="card-title mt-1 mx-3">Дата регистрации: 12.12.2021</h5>
                            <button class="btn bg_button my_rounded ml-3 mt-3 py-1 px-4 button_h border border-dark" type="submit">Написать</button>
                          </div>
                        </div>
                          <h5 class="card-title mt-1 ml-5">Навыки:</h5>
                          <div className="card border border-dark my_rounded">
                            <a href="#" class="card-link">Математика</a>
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
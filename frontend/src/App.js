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
                  <h1 className="text-white h1_font">Отклики</h1>
                </div>
                <div className="m-3">
                  <div className="card border border-dark my_rounded">
                    <div className="row">
                      <div className="col-1">
                        <div className="square border border-dark my-1 mx-2">
                          <img src="" class="mx-auto d-block" alt="" />
                        </div>
                      </div>
                      <div className="col-9">
                        <div className="pt-2 pl-2">
                          Андрей Лонов
                        </div>
                        <div className="border border-dark my_rounded py-2 px-2 my-1">
                          Отклик на <small class="my_color">Решить задачу на число Фибоначчи</small>
                        </div>
                      </div>
                      <div className="col-2 w-100 h-100">
                        <div class="d-grid gap-2 h-100 mr-1 my-1">
                          <button class="btn bg_button my_rounded w-100 h-100 py-4 mr-1" type="submit">Ответить</button>
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
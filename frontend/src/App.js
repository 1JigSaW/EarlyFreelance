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
          <div className="landing">
          <header>
            <nav className="navbar navbar-expand-lg navbar-light ">
              <div className="container">
                <a className="navbar-brand" href="#">ЛОГО</a>
                <div>
                  <a class="btn bg_button my_rounded border border-dark text-dark mr-2">Вход</a>
                  <a class="btn bg_button my_rounded border border-dark text-dark">Регистрация</a>
                </div>
              </div>
            </nav>
          </header>

          <main >
            <div className="title_block">
              <h1 className="display-4">Поможем с твоими учебными проектами</h1>
              <a class="btn bg_button my_rounded border border-dark text-dark">Заказать решение</a>
            </div>
            <div className="block2">
              <h2 className="display-4">Как сделать заказ?</h2>
            </div>
            <div>
              <div className="row ml-4">
                <div className="col-3">
                  <div className="mt-5">
                    <div className="circle bg_button border border-dark">
                      <h2 className="slogan">Опиши задание, которое ты не можешь решить</h2>
                    </div>
                  </div>
                </div>
                <div className="col-3">
                  <div className="mt-5">
                    <div className="circle bg_button border border-dark">
                      <h2 className="slogan">Выложи и ожидай, когда кто-нибудь откликнется на твое задание</h2>
                    </div>
                  </div>
                </div>
                <div className="col-3">
                  <div className="mt-5">
                    <div className="circle bg_button border border-dark">
                      <h2 className="slogan">Договорись с фрилансером о цене и других подробностях заказа</h2>
                    </div>
                  </div>
                </div>
                <div className="col-3">
                  <div className="mt-5">
                    <div className="circle bg_button border border-dark">
                      <h2 className="slogan">Ожидай выполнения и оцени фрилансера</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-5">
              <div className="row">
                <div className="col-6">
                  <div className="big_circle">
                    <h2 className="slogan">Ожидай выполнения и оцени фрилансера</h2>
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
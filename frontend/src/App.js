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
                  <a className="btn bg_button my_rounded border border-dark text-dark mr-2">Вход</a>
                  <a className="btn bg_button my_rounded border border-dark text-dark">Регистрация</a>
                </div>
              </div>
            </nav>
          </header>

          <main >
            <div className="title_block">
              <div className="row">
                <div className="col-sm-12 col-md-6">
                  <h1 className="display-4">Поможем с твоими учебными проектами</h1>
                  <a className="btn bg_button my_rounded border border-dark text-dark">Заказать решение</a>
                </div>
                <div className="col-sm-12 col-md-6">
                </div>
              </div>
            </div>
            <div className="block2">
              <h2 className="display-4">Как сделать заказ?</h2>
            </div>
            <div>
              <div className="row ml-4">
                <div className="col-lg-3 col-sm-6">
                  <div className="mt-5">
                    <div className="circle bg_button border border-dark">
                      <h2 className="slogan">Опиши задание, которое ты не можешь решить</h2>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <div className="mt-5">
                    <div className="circle bg_button border border-dark">
                      <h2 className="slogan">Выложи и ожидай, когда кто-нибудь откликнется на твое задание</h2>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <div className="mt-5">
                    <div className="circle bg_button border border-dark">
                      <h2 className="slogan">Договорись с фрилансером о цене и других подробностях заказа</h2>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6">
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
                <div className="col-sm-12 col-lg-6">
                  <div className="big_circle">
                    <div className="slogan2">
                      <h2 className="display-4 h2_landing font-weight-bold">Для клиентов:</h2>
                      <ul className="li_font list_gr1 list-group list-group-flush mt-4 li_font">
                        <li className="list-group-item"><h2 className="li_font">Быстрое выполнение заказа</h2></li>
                        <li className="list-group-item"><h2 className="li_font">Качественное выполнение работы</h2></li>
                        <li className="list-group-item"><h2 className="li_font">Самостоятельное согласование цены</h2></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-lg-6">
                  <div className="big_circle2 bg_green">
                    <h2 className="h2_landing display-4 slogan3 font-weight-bold">Для фрилансеров:</h2>
                    <ul className="li_font list-group list-group-flush ml-5 mt-4 li_font">
                      <li className="list-group-item"><h2 className="li_font">Прокачка скиллов в любых учебных предметах</h2></li>
                      <li className="list-group-item"><h2 className="li_font">Быстрый заработок</h2></li>
                      <li className="list-group-item"><h2 className="li_font">Самостоятельная установка временных интервалов</h2></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-center">Текущие заказы</h2>
              <div className="row mx-3 mt-4">
                <div className="col-3">
                  <div className="border border-dark nav-link">
                    <h5 className="h_font my-4">Решить задачу на число Фибоначчи</h5>
                    <div className="d-flex">
                      <div className="child_flex">
                        <span className="p-1">1<img src="{image}" className="mini_img" /></span>
                        <span className="p-1">1<img src="{image}" className="mini_img" /></span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-3">
                  <div className="border border-dark ml-4 nav-link">
                    <h5 className="h_font my-4">Решить задачу на число Фибоначчи</h5>
                    <div className="d-flex">
                      <div className="child_flex">
                        <span className="p-1">1<img src="{image}" className="mini_img" /></span>
                        <span className="p-1">1<img src="{image}" className="mini_img" /></span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-3">
                  <div className="border border-dark ml-4 nav-link">
                    <h5 className="h_font my-4">Решить задачу на число Фибоначчи</h5>
                    <div className="d-flex">
                      <div className="child_flex">
                        <span className="p-1">1<img src="{image}" className="mini_img" /></span>
                        <span className="p-1">1<img src="{image}" className="mini_img" /></span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-3">
                  <div className="border border-dark ml-4 nav-link">
                    <h5 className="h_font my-4">Решить задачу на число Фибоначчи</h5>
                    <div className="d-flex">
                      <div className="child_flex">
                        <span className="p-1">1<img src="{image}" className="mini_img" /></span>
                        <span className="p-1">1<img src="{image}" className="mini_img" /></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <footer>
              <nav className="navbar navbar-expand-lg navbar-light footer">
                
              </nav>
            </footer>
          </main>
        </div>
      )
    }
  }
  
export default App;
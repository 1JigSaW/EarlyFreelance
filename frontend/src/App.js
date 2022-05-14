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
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav mb-2 mb-lg-0 ml-auto">
                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="./sample.jpg" className="circle" />
                      </a>
                      <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
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
                            <div class="card-body">
                              <h5 class="card-title mb-3">Заголовок</h5>
                              <a href="#" class="card-link subsubject p-1 pr-3 pl-3 ml-0 mr-1 my_rounded text-white">Математика</a>
                              <a href="#" class="card-link subsubject p-1 pr-3 pl-3 ml-0 mr-1 my_rounded text-white">Линейная алгебра</a>
                              <div class="my_rounded text-black mt-3">
                                <span class="subdttm p-1 pr-3 pl-3 my_rounded border border-dark">16.03-12:00</span>
                              </div>
                            </div>
                          </div>
                          <div class="col-3 vcenter">
                            <span class="subdttm p-1 pr-3 pl-3 my_rounded border border-dark">2000 руб.</span>
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
                              <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
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
                              <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
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
                          <h4 class="accordion-header" id="headingTwo">
                            <button class="accordion-button my_rounded s_button border border-dark p-2 w-100" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                              Цена
                            </button>
                          </h4>
                          <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                              <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
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
    }
  }
  
export default App;
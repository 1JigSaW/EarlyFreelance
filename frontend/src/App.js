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
                
              </div>
            </nav>
          </header>

          <main >
            <h2>ssdfsdfsdf</h2>
            <h2>ssdfsdfsdf</h2>

            <h2>ssdfsdfsdf</h2>
            <h2>ssdfsdfsdf</h2>

            <h2>ssdfsdfsdf</h2>
            <h2>ssdfsdfsdf</h2>

            <h2>ssdfsdfsdf</h2>

            <h2>ssdfsdfsdf</h2>
            <h2>ssdfsdfsdf</h2>

            <h2>ssdfsdfsdf</h2>

            <h2>ssdfsdfsdf</h2>
            <h2>ssdfsdfsdf</h2>

            <h2>ssdfsdfsdf</h2>

            <h2>ssdfsdfsdf</h2>
            <h2>ssdfsdfsdf</h2>

            <h2>ssdfsdfsdf</h2>

            <h2>ssdfsdfsdf</h2>
            <h2>ssdfsdfsdf</h2>

            <h2>ssdfsdfsdf</h2>

            <h2>ssdfsdfsdf</h2>
            <h2>ssdfsdfsdf</h2>
            

            <h2>ssdfsdfsdf</h2>
            <h2>ssdfsdfsdf</h2>

            <h2>ssdfsdfsdf</h2>

            <h2>ssdfsdfsdf</h2>
          </main>
        </div>
      )
    }
  }
  
export default App;
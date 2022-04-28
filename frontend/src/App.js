import logo from './logo.svg';
import './App.css';
import React, { Component } from "react"

const todoItems = [
  {
    id: 1,
    title: "Nature walk in the park",
    description: "Visit the park with my friends",
    completed: true
  },

  {
    id: 2,
    title: "Visit",
    description: "Got to my aunt's place",
    completed: true
  },

  {
    id: 3,
    title: "Write",
    description: "Do an article about anthropology",
    completed: true
  },
];

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
      OrderList: []
    };
  };

  async componentDidMount() {
    try {
      const res = await fetch('http://localhost:8000/api/orders/');
      const OrderList = await res.json();
      this.setState({
        OrderList
      });
    } catch (e) {
      console.log(e);
    }  
  }

  renderItems = () => {
    const { viewCompleted } = this.state;
    const newItems = this.state.OrderList.filter(
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
          title={item.description}>
            {item.title}
          </span>
      </li>
    ));
  };

  render() {
    return (
      <main className="content">
      <div className="row">
        <div className="col-md-6 col-sm-10 mx-auto p-0">
          <div className="card p-3">
            <ul className="list-group list-group-flush">
              {this.renderItems()}
            </ul>
          </div>
        </div>
      </div>
    </main>
    )
  }
}

export default App;

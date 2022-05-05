import React, {useEffect, useState}  from 'react'

function Orders(props) {
  const {order} = props
  return <div className='col-10 mx-auto col-md-6'>
    <p>{order.title}</p>
  </div>
}


function App() {
  const [orders, setOrders] = useState([])

  useEffect(() => {
    const myCallback = (response, status) => {
      console.log(response, status)
      if (status === 200){
        setOrders(response)
      } else {
        alert('Oh nO')
      }
    }
  })
  {orders.map((item, index)=>{
    return <Orders order={item}/>
  })}
}

export default App;
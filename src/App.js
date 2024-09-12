import './App.css';
import Data from './component/Data'; 

const users = [
  {
    div1: <div className='div1'>
    <h1>"KFC"</h1>
    <img src='https://media-cdn.tripadvisor.com/media/photo-s/1b/99/44/8e/kfc-faxafeni.jpg'></img>
    <h1>"799 сом"</h1>
    </div>
  },
  {
    div2: <div className='div2'>
    <h1>"Doner"</h1>
    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS2P6biU9wky5PASwWSMH6QUMFeUw20qB1oQ&s'></img>
    <h1>"220 сом"</h1> 
    </div>
  },
  {
    div3: <div className='div3'>
     <h1>"Pizza"</h1>
    <img src='https://www.allrecipes.com/thmb/fFW1o307WSqFFYQ3-QXYVpnFj6E=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/48727-Mikes-homemade-pizza-DDMFS-beauty-4x3-BG-2974-a7a9842c14e34ca699f3b7d7143256cf.jpg'></img>
    <h1>"550 сом"</h1>
    </div>
  }
]



function App() {
  const res1 = users.map((e) => {
    return e.div1
  })

  const res2 = users.map((e) => {
    return e.div2
  })

  const res3 = users.map((e) => {
    return e.div3
  })
  


  return (
    <div className="App">
      <Data items1 = {res1} items2 = {res2} items3 = {res3} />
    </div>
  );
}

export default App;


    {/* {users.map((items) => {
        return(
          <div className='items'>
            <h1>{items.name}</h1>,
            <h1>{items.img}</h1>,
            <h1>{items.span}</h1>
          </div>
        ) */}
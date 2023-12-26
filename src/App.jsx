import './App.css'
import { data } from './Cards'
import Card from './components/card/Card'

function App() {
  return (
    <div className='flex'>
    {data.map(( el , i )=> (
      <Card
      key = {i}
      imgUrl={el.imgUrl}
      name={el.name}
      desc={el.desc}
      button={el.button}
      hover={el.hover}
      backgroundColor={el.backgroundColor}
      buttonColor={el.buttonColor}
      />
    ))}
    </div>
  )
}

export default App

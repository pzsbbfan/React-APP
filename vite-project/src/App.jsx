import './App.css'
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import Hero from '../components/Hero'
import data from './data'

const cards = data.map(item => {
  return (
      // eslint-disable-next-line react/jsx-key
      <Card 
      key={item.id}
      {...item}
    />
    )
  })

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <section className="cards-list">
      {cards}
      </section>
    </>
  )
}

export default App

import './App.css'
import Greeting from './components/Greeting'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Greeting name="Ann" greetingMsg="Hello!" />
      <Greeting name="Ann2" greetingMsg="Hello2!" />
      <Greeting name="Ann3" greetingMsg="Hello3!" />
    </div>
  )
}

export default App

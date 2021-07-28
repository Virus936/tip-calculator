import './App.css';
import React, {useState} from 'react'
import styled from 'styled-components'
import Calculator from './components/calculator/Calculator'
import Calculated from './components/calculated/Calculated'


function App() {
  const [bill, setBill] = useState(0)
  const [person, setPerson] = useState(1)
  const [tip, setTip] = useState(0)

  const reset = () => {
    setBill(0)
    setTip(0)
    setPerson(1)
  }
  
  return (
    <div className="App">
      <Header>
        <p>spli</p>
        <p>tter</p>
      </Header>

      <Main>
        <Calculator 
          setBill={setBill}
          setPerson={setPerson} 
          setTip={setTip}
          bill={bill}
          tip={tip}
          person={person}
        />
        <Calculated 
          bill={bill} 
          reset={reset}
          tip={tip} 
          person={person}
        /> 


      </Main>



      <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="#">Vira Lok</a>.
      </div>
    </div>
  );
}
const Header = styled.header`
  text-align:center;
  text-transform:uppercase;
  font-weight:900;
  font-size:30px;
  color:hsl(186, 14%, 43%);
  letter-spacing:30px;
`
const Main = styled.main`
  display:flex;
  flex-wrap:wrap;
  gap:1em;
  background-color:white;
  border-radius:15px;
  padding:2em;
  margin:auto;
  max-width:1000px;
  &>*{
    flex:1 1 300px;
  }
`

export default App;

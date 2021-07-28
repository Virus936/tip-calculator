import styled from 'styled-components'

function Calculated({bill, tip, person, reset}){
  return(
    <Container>

      <div className='Calculated-Element'>
        <div>
          <p>
          Tip Amount
          </p>
          <p>
          / person
          </p>
        </div>
        <Result>
        {Math.round((bill*tip/person)*100)/100}
        </Result>
      </div>

      <div className='Calculated-Element'>
        <div>
          <p>
          Total
          </p>
          <p>
           / person
          </p>
        </div>
        <Result>
        {Math.round((bill*(1+tip)/person)*100)/100}
        </Result>
      </div>
      <Button onClick={reset}>Reset</Button>
    </Container>
    )
}


const Result = styled.div`
  color: hsl(172, 67%, 45%);
  font-size:3em;
`
const Button = styled.button`
  flex: 1 1 120px;
  background-color: hsl(172, 67%, 45%);
  color:white;
  font-size:1.5em;
  font-weight:bold;
  border:none;
  border-radius:5px;
  width:100%;
  color: hsl(183, 100%, 15%);

  &:hover{
    background-color:hsl(183, 40%, 15%);
  }
`

const Container = styled.div`
  background-color: hsl(183, 100%, 15%);
  border-radius:1em;
  color:white;
  padding:1em;
  .Calculated-Element{
    display:flex;
    justify-content:space-between;
  }
`
export default Calculated

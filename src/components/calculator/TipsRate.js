import styled from 'styled-components'
import TipSelector, {TipInput} from './TipSelector'

function TipsRate({setTip, tip}){
  const tipSet = [5,10,15,25,50]
  return(
    <>
      <p> Select Tip % </p>
      <Container>
        {tipSet.map( tips => <TipSelector active={tip==tips*0.01 } key={tips} tip={tips} setTip={setTip} />) }
        <TipInput tip={tip} active={!tipSet.includes(tip*100)} setTip={setTip} />
      </Container>
    </>
  )
}

const Container = styled.div`
  display:flex;
  flex-wrap:wrap;
  justify-content:space-between;
  gap:15px;


`
export default TipsRate

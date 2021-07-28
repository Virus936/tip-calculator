import Bill from './Bill'
import TipsRate from './TipsRate'
import Person from './Person'

function Calculator({tip, setTip,bill, setBill,person , setPerson}){
  return(
    <div>
      <Bill setBill={setBill} bill={bill}/>
      <TipsRate setTip={setTip} tip={tip} />
      <Person setPerson={setPerson} person={person} />
    </div>
    )
}

export default Calculator

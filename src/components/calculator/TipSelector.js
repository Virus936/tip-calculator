import styled from 'styled-components';

function TipSelector({ setTip, tip, active }) {
  const handleClick = () => {
    setTip(tip * 0.01);
  };
  const handleChange = (e) => {
    setTip(e.target.value * 0.01);
  };
  const result = isNaN(tip) ? (
    <Input className={active && 'active'} type="text" onChange={handleChange} />
  ) : (
    <Button className={active && 'active'} onClick={handleClick}>
      {tip}%
    </Button>
  );
  return result;
}

export function TipInput({ setTip, tip, active }) {
  const handleClick = (e) => {
    e.target.select();
  };
  const handleChange = (e) => {
    setTip(e.target.value * 0.01);
  };
  return (
    <Input
      value={tip * 100}
      className={active && 'active'}
      onClick={handleClick}
      type="text"
      onChange={handleChange}
    />
  );
}
const Input = styled.input`
  flex: 1 1 120px;
  width: 100%;
  font-size: 1.5em;
  font-weight: bold;
  color: hsl(186, 14%, 43%);
  border-radius: 5px;
  border: none;
  background-color: hsl(189, 41%, 93%);
  text-align: center;

  &.active {
    background-color: hsl(172, 67%, 45%);
  }
`;
const Button = styled.button`
  flex: 1 1 120px;
  background-color: hsl(183, 100%, 15%);
  color: white;
  font-size: 1.5em;
  font-weight: bold;
  border: none;
  border-radius: 5px;

  &:hover {
    background-color: hsl(172, 67%, 45%);
  }
  &.active {
    background-color: hsl(172, 67%, 45%);
  }
`;
export default TipSelector;

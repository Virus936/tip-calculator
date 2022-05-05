import React, { useState } from 'react';
import styled from 'styled-components';

function Person({ setPerson, person }) {
  const [isNotValid, setIsNotValid] = useState(false);

  const handleChange = (e) => {
    setPerson(e.target.value);
    setIsNotValid(isNaN(e.target.value));
  };
  const handleClick = (e) => {
    e.target.select();
  };

  return (
    <Container>
      <p> Number of People </p>
      {isNotValid && <div className="error-message">not a number</div>}

      <div className="person">
        <input
          value={person}
          type="text"
          id="person"
          onClick={handleClick}
          onChange={handleChange}
        />
      </div>
    </Container>
  );
}
const Container = styled.div`
  input {
    width: 100%;
    font-size: 1.5em;
    font-weight: bold;
    color: hsl(186, 14%, 43%);
    border-radius: 5px;
    border: none;
    background-color: hsl(189, 41%, 93%);
    text-align: center;
  }
`;

export default Person;

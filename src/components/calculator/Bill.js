import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

function Bill({ bill, setBill }) {
  const [isNotValid, setIsNotValid] = useState(false);

  const handleChange = (e) => {
    setBill(e.target.value);
    setIsNotValid(isNaN(e.target.value));
  };

  const handleClick = (e) => {
    e.target.select();
  };
  return (
    <Container>
      <p>
        {' '}
        <label htmlFor="bill">Bill</label>{' '}
      </p>
      {isNotValid && <div className="error-message">not a number</div>}

      <div className="bill">
        {' '}
        ${' '}
        <input
          value={bill}
          onClick={handleClick}
          type="text"
          id="bill"
          onChange={handleChange}
        />{' '}
      </div>
    </Container>
  );
}
const Container = styled.div`
  .error-message {
    background-color: pink;
    margin-bottom: 5px;
    padding: 5px;
    border-radius: 5px;
  }
  .bill {
    position: relative;
    background-color: hsl(189, 41%, 93%);
    border-radius: 5px;
    height: 30px;
    padding: 5px;
    input {
      position: absolute;
      top: 0;
      right: 0;
      width: 100%;
      height: 100%;
      border: none;
      background-color: transparent;
      text-align: right;
      border-radius: inherit;
    }
  }
`;

export default Bill;

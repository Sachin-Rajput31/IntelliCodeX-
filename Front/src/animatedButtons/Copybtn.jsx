import React from 'react';
import styled from 'styled-components';

const Button = ({ copied }) => {
  return (
    <StyledWrapper>
      <button className="Btn">
        <svg viewBox="0 0 512 512" className="svgIcon" height="1em">
          <path d="M288 448H64V224h64V160H64c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H288c35.3 0 64-28.7 64-64V384H288v64zm-64-96H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H224c-35.3 0-64 28.7-64 64V288c0 35.3 28.7 64 64 64z" />
        </svg>
        <p className="text">{copied ? "Copied!" : "COPY"}</p>
        <span className="effect" />
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .Btn {
    width: 120px;
    height: 45px;
    background-color: rgb(65, 64, 64);
    border: none;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.342);
    border-radius: 5px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 7px;
    position: relative;
    overflow: hidden;
    transition-duration: .5s;
  }

  .text {
    color: rgb(184, 236, 104);
    font-weight: 800;
    letter-spacing: 1.1px;
    z-index: 2;
  }

  .svgIcon {
    z-index: 2;
  }

  .svgIcon path {
    fill: rgb(184, 236, 104);
  }

  .Btn:hover {
    color: rgb(230, 255, 193);
  }

  .effect {
    position: absolute;
    width: 10px;
    height: 10px;
    background-color: rgb(184, 236, 104);
    border-radius: 50%;
    z-index: 1;
    opacity: 0;
    transition-duration: .5s;
  }

  .Btn:hover .effect {
    transform: scale(15);
    transform-origin: center;
    opacity: 1;
    transition-duration: .5s;
  }

  .Btn:hover {
    box-shadow: 0px 0px 5px rgb(184, 236, 104),
    0px 0px 10px rgb(184, 236, 104),
    0px 0px 30px rgb(184, 236, 104);
    transition-duration: .7s;
  }

  .Btn:hover .text {
    color: rgb(65, 64, 64);
  }

  .Btn:hover .svgIcon path {
    fill: rgb(65, 64, 64);
  }
`;

export default Button;

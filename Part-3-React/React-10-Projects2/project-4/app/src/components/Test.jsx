import React from "react";
import styled from "styled-components";

const Test = () => {
  return (
    <>
      <Box>
        <p>para</p>
        <div className="para1">
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
        </div>

        <div className="para2">
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
        </div>
      </Box>
    </>
  );
};

export default Test;

//-----------------------------------------
const Box = styled.div`
  border: 2px solid red;
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  p {
    background-color: orange;
    margin-top: 10px;
  }
  .para1 {
    margin-top: 50px;
    background-color: green;
    width: 100px;
  }
  .para2 {
    margin-top: 20px;
    background-color: blue;
    width: 100px;
  }
`;

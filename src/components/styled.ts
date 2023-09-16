import styled from "styled-components";

export const Head = styled.div`
  width: 1200px;
  height: 90px;
  margin: 30px;
  border-radius: 5px;
  box-shadow: 3px 3px 10px lightgrey;
  background-color: white;
  font-family: Orbitron;
  font-size: 2em;
  letter-spacing: 0.05em;
  line-height: 80px;
  text-shadow: 1px 1px 3px grey;
`;

export const List = styled.ul`
  width: 96%;
  height: fit-content;
  padding: 0;
  padding-top: 30px;
  border-radius: 5px;
  box-sizing: border-box;
  box-shadow: 3px 3px 10px lightgrey;
  list-style: none;
  background-color: white;
  display: flex;
  flex-flow: column;
  justify-content: start;
  align-items: center;
  gap: 10px;
`;

export const Item = styled.li`
  animation: slowLand 1s;
  width: 90%;
  height: fit-content;
  border-radius: 5px;
  box-shadow: 3px 3px 10px lightgrey;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  &:hover {
    animation: slowGrow 1s;
    //width: 93%;
    box-shadow: 3px 3px 15px #565656;
  }

  @keyframes slowGrow {
    0% {
      box-shadow: 3px 3px 10px lightgrey;
    }
    100% {
      box-shadow: 3px 3px 15px #565656;
    }
  }
  @keyframes slowLand {
    0% {
      box-shadow: 3px 3px 15px #565656;
    }
    100% {
      box-shadow: 3px 3px 10px lightgrey;
    }
  }
`;

export const Button = styled.button`
  width: 35px;
  height: 35px;
  margin: 7px;
  border: 0;
  border-radius: 5px;
  background-color: white;
  box-shadow: 1px 1px 7px lightgrey;
  font-size: 1em;
  &:hover{
    box-shadow: 3px 3px 8px lightgrey;
    cursor: pointer;
    }
`;

export const TextField = styled.p`
  width: 85%;
  height: auto;
`;

export const AddTaskBtn = styled.button`
  animation: colorSwapStart 1s;
  width: 90%;
  height: 30px;
  margin-bottom: 10px;
  border: 0;
  position: sticky;
  bottom: 45px;
  border-radius: 5px;
  box-shadow: 1px 1px 2px lightgrey;
  background: black;
  color: white;
  font-weight: 800;
  &:hover{
    animation: colorSwapEnd 1s;
    color: black;
    background-color: white;   
  }
  @keyframes colorSwapStart{
    0%{
      color: black;
      background-color: white;
    }
    100%{
      color: white;
      background-color: black;
    }
  }
  @keyframes colorSwapEnd{
    0%{
      color: white;
      background-color: black;
    }
    100%{
      color: black;
      background-color: white;
    }
  }
  
`;


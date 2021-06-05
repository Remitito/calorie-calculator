import './App.css';
import styled from "styled-components";

const Container = styled.div `
  display: flex;
  background-color: #557A95;
  border-radius: 2rem;
  border-width: 10px;
  justify-content: space-between;
  flex-direction: column;
  margin-top: 50px;
  color: white;
  text-decoration: none;
  margin-left: 20%;
`
const Row = styled.div `
  padding: 2%;
  display: flex;
  line-height: ${props => props.lh ? props.lh : "2"};
  flex-direction: row;
  justify-content: space-evenly;
`
const ColLeft = styled.div `
  display: flex;
  width: 25%;
  font-family: 'ZCOOL KuaiLe', cursive;
    flex-direction: row;
`
const ColRight = styled.div `
  display: flex;
  width: ${props => props.tempWidth ? props.tempWidth : "40%"};
  flex-direction: row;
`

export {Container, Row, ColLeft, ColRight};
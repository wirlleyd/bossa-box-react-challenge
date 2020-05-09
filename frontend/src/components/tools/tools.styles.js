import styled from "styled-components";

export const Container = styled.div`
  margin: 5px;
  width: 90vw;
  height: 20vh;
  display: flex;
  border: solid 1px #0003;
  align-items: center;
  flex-direction: column;
  background-color: white;
  border-radius: 10px;
  :hover {
    border: none;
    box-shadow: 5px 10px 8px #888888;
  }
`;

export const Header = styled.div`
  width: 95%;
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.h1`
  font-size: 36px;
  font-weight: bold;
`;

export const Body = styled.div`
  height: 40%;
  width: 95%;
  display: flex;
  align-items: center;
`;

export const Footer = styled.div`
  height: 35%;
  width: 95%;
  display: flex;
  flex-wrap: wrap;
`;

export const ToolsTag = styled.p`
  padding: 0 5px;
  font-size: 17px;
  font-weight: bold;
`;

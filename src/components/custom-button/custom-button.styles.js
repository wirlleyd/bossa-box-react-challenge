import styled, { css } from "styled-components";

const getColor = (props) => {
  console.log(props);
  const { type } = props;
  if (type == "primary") {
    return css`
      background-color: white;
      color: black;
      :hover {
        background-color: #4caf50;
        color: white;
      }
    `;
  }
  if (type == "warning") {
    return css`
      background-color: white;
      color: black;
      border: 2px solid #fda608;
      :hover {
        background-color: #fda608;
        color: white;
      }
    `;
  }
  if (type == "danger") {
    return css`
      background-color: white;
      color: black;
      border-radius: 10px;
      color: white;
      background-color: #f44336;
      :hover {
        background-color: #f44336d1;
      }
      svg {
        fill: white;
      }
    `;
  }
  return css`
    background-color: white;
    color: black;
    border: 2px solid #e7e7e7;
    :hover {
      background-color: #e7e7e7;
    }
  `;
};

export const Text = styled.p`
  font-size: 12px;
`;

export const StyledButton = styled.button`
  border: none;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  transition-duration: 0.4s;
  background-color: white;
  cursor: pointer;
  ${getColor}
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoContainer = styled.div`
  text-align: center;
  width: 15px;
  padding: 0 3px;
`;

import React from "react";

import CustomButton from "../custom-button/custom-button.component";

import {
  Container,
  Header,
  Body,
  Footer,
  Title,
  ToolsTag,
} from "./tools.styles";

const Tools = ({ id, title, tags, link, description, handleRemove }) => {
  return (
    <Container>
      <Header>
        <Title>{title}</Title>
        <CustomButton onClick={() => handleRemove(id)} type={"danger"} />
      </Header>
      <Body>{description}</Body>
      <Footer>
        {tags.map((tag) => (
          <ToolsTag>#{tag}</ToolsTag>
        ))}
      </Footer>
    </Container>
  );
};

export default Tools;

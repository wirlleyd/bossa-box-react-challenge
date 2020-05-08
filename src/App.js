import React from "react";
import { Container } from "./App.styles";
import Main from "./pages/main/main.page";
import Header from "./components/header/header.component";
const App = () => {
  return (
    <Container>
      <Header />
      <Main />
    </Container>
  );
};

export default App;

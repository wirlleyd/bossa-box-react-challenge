import React, { useState, useEffect } from "react";

import api from "../../api/api";
import Tools from "../tools/tools.component";
import { Container } from "./tools-container.styles";
import Spinner from "../spinner/spinner.component";
const ToolsContainer = () => {
  const [tools, setTools] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const fechData = async () => {
    setLoading(true);
    const { data } = await api.get("/tools");
    setLoading(false);
    setTools(data);
  };

  const handleRemove = async (id) => {
    try {
      await api.delete(`/tools/${id}`);
      await fechData();
    } catch (err) {
      console.info(err);
    }
  };

  useEffect(() => {
    fechData();
  }, []);

  return (
    <Container>
      {isLoading ? (
        <Spinner />
      ) : (
        tools.map((tool) => (
          <Tools key={tool.id} handleRemove={handleRemove} {...tool} />
        ))
      )}
    </Container>
  );
};

export default ToolsContainer;

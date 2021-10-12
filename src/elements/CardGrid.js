import React from "react";
import styled from "styled-components";

const CardGrid = (props) => {
  return <Card>{props.children}</Card>;
};

CardGrid.defaultProps = {};

const Card = styled.div`
  width: 24%;
  height: 250px;
  background-color: #f1f3f5;
`;
export default CardGrid;

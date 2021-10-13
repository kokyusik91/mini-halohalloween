import React from 'react';
import styled from 'styled-components';

const Grid = (props) => {
  const {
    is_flex,
    type,
    flex,
    justify,
    width,
    height,
    margin,
    padding,
    bg,
    border,
    children,
  } = props;

  const styles = {
    is_flex: is_flex,
    flex: flex,
    justify: justify,
    width: width,
    height: height,
    margin: margin,
    padding: padding,
    bg: bg,
    border: border,
  };

  if (type === 'card') {
    return <CardGrid>{children}</CardGrid>;
  }
  return <DefaultGrid {...styles}>{children}</DefaultGrid>;
};

Grid.defaultProps = {
  is_flex: false,
  flex: false,
  justify: 'flex-start',
  width: 'auto',
  height: 'auto',
  margin: 0,
  padding: 0,
  bg: 'transparent',
  border: 'none',
};

const CardGrid = styled.div`
  width: 24%;
  height: 250px;
  background-color: #f1f3f5;
  flex-wrap: wrap;
  position: relative;
`;

const DefaultGrid = styled.div`
  ${(props) => (props.is_flex ? `display:flex` : '')};
  ${(props) => (props.justify ? `justify-content:${props.justify}` : '')};
  align-items: center;
  ${(props) => props.flex && `flex:1`};
  ${(props) => (props.width ? `width:${props.width}` : '')};
  ${(props) => (props.height ? `height:${props.height}` : '')};
  ${(props) => (props.margin ? `margin:${props.margin}` : '')};
  ${(props) => (props.padding ? `padding:${props.padding}` : '')};
  ${(props) => (props.bg ? `background-color:${props.bg}` : '')};
  ${(props) => props.border && `border:${props.border}`};
  flex-wrap: wrap;
  position: relative;
`;

export default Grid;

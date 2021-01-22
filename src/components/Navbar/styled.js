import styled from "styled-components";

export const Navigation = styled.nav `
  background-color: ${(props) => props.color};
`;

export const Menu = styled.ul `
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  > li {
    color: ${(props) => props.textColor};
  }
`;

export const Item = styled.li `
  float: ${(props) => props.float || "left"};
  display: block;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  :hover {
        opacity: 0.7;
    }
`;
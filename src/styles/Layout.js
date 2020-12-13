import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.column ? "column" : "row")};
  height: ${(props) => (props.height ? props.height : "100vh")};
  width: ${(props) => (props.width ? props.width : "100%")};
  align-content: flex-start;
`;

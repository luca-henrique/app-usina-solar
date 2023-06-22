import styled from 'styled-components/native';

export const Dot = styled.View<{color: string}>`
  height: 10px;
  width: 10px;
  border-radius: 5px;
  background-color: ${props => props.color};
  margin-right: 10px;
`;

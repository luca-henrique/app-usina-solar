import styled from 'styled-components/native';
import {GroupProps} from './Group';

type ContainerProps = Pick<GroupProps, 'active'>;

export const Container = styled.TouchableOpacity<ContainerProps>`
  padding-horizontal: 24;
  padding-vertical: 6;
  border-radius: 20;
  background-color: ${({active}) => (active ? '#0055ff' : '#0055ff09')};
`;

export const Text = styled.Text<ContainerProps>`
  color: ${({active}) => (active ? '#fff' : '#0055ff')};
`;

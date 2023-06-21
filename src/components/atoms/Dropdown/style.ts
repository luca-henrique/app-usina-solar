import styled from 'styled-components/native';

export const ContainerDropdown = styled.TouchableOpacity<{visible?: boolean}>`
  padding-horizontal: 12px;
  padding-vertical: 8px;
  display: flex;
  flex-direction: row;
  position: relative;
  border-width: 1.5px;
  border-color: #e9ecef;
  background-color: #f8f9fa;
  width: 120px;
  align-items: center;
  justify-content: center;
  border-top-end-radius: 6px;
  border-top-start-radius: 6px;
  border-bottom-end-radius: ${props => (!props.visible ? 6 : 0)}px;
  border-bottom-start-radius: ${props => (!props.visible ? 6 : 0)}px;
`;

export const ContainerList = styled.View`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 34px;
  left: -1px;
`;

export const ContainerItemDropdownList = styled.View<{lastItem: boolean}>`
  width: 120px;
  padding-horizontal: 12px;
  padding-vertical: 8px;
  display: flex;
  flex-direction: row;
  border-width: 1.5px;
  border-color: #e9ecef;
  backgroundcolor: #f8f9fa;
  alignitems: center;
  justifycontent: center;
  border-bottom-end-radius: ${props => (props.lastItem ? 6 : 0)}px;
  border-bottom-start-radius: ${props => (props.lastItem ? 6 : 0)}px;
`;

export const Text = styled.Text`
  font-size: 14;
  color: #6c757d;
`;

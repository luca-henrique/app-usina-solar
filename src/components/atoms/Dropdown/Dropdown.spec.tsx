import React from 'react';
import {render, fireEvent} from 'react-native-testing-library';
import {Dropdown} from './Dropdown';

describe('App', () => {
  it('renders correctly', () => {
    const activeButton = render(
      <Dropdown data={[]} setValue={evt => console.log(evt)} value="Welcome" />,
    );

    const {getByText} = activeButton;

    const welcomeText = getByText('Welcome');
    expect(welcomeText).toBeDefined();
  });

  it('renderiza corretamente e exibe a opção selecionada', () => {
    const data = [
      {label: 'Opção 1', value: 'opcao1'},
      {label: 'Opção 2', value: 'opcao2'},
      {label: 'Opção 3', value: 'opcao3'},
    ];
    const value = 'Escolha';
    const setValueMock = jest.fn();

    const {getByText, getByTestId} = render(
      <Dropdown data={data} value={value} setValue={setValueMock} />,
    );

    const selectedItem = getByText(value);
    expect(selectedItem).toBeTruthy();

    fireEvent.press(selectedItem);

    const option1 = getByText('Opção 1');
    fireEvent.press(option1);

    expect(setValueMock).toHaveBeenCalledTimes(1);
    expect(setValueMock).toHaveBeenCalledWith('opcao1');
    expect(getByTestId('container-dropdown-list')).toBeTruthy();
  });
});

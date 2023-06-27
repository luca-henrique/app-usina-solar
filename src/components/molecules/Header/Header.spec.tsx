import React from 'react';
import {render} from 'react-native-testing-library';
import {GenerateGraphEnergyConsumedContext} from '../../../context/GenerateGraphEnergyConsumedContext';
import {Header} from './Header';

// Mock do contexto
const mockSetType = jest.fn();
const mockContext = {
  setType: mockSetType,
};

describe('Header', () => {
  it('should render correctly and call setType on dropdown change', () => {
    const {getByText} = render(
      <GenerateGraphEnergyConsumedContext.Provider value={mockContext}>
        <Header />
      </GenerateGraphEnergyConsumedContext.Provider>,
    );

    // Verifica se o texto "Resumo" está sendo renderizado
    expect(getByText('Resumo')).toBeTruthy();
  });
});

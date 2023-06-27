import React from 'react';
import {render, fireEvent} from 'react-native-testing-library';
import {
  DataType,
  GenerateGraphEnergyConsumedContext,
  IGenerateGraphEnergyConsumed,
} from './GenerateGraphEnergyConsumedContext';
import {Text, TouchableOpacity, View} from 'react-native';

// Mock do hook useGetDataEnergyConsumed
jest.mock('../hook/useGetDataEnergyConsumed', () => ({
  useGetDataEnergyConsumed: jest.fn().mockReturnValue({
    type: 'hourly',
    loading: false,
    data: {
      dataGraphic: [],
      resume: {co2: 0, kwh: 0, percentage: 0, trees: 0},
      expectedFormat: 0,
    },
  }),
}));

describe('GenerateGraphEnergyConsumedContext', () => {
  it('should provide the correct context values', () => {
    const {getByText} = render(
      <GenerateGraphEnergyConsumedContext.Provider value={null}>
        <GenerateGraphEnergyConsumedContext.Consumer>
          {(contextValue: IGenerateGraphEnergyConsumed | null) => (
            <View>
              <Text>{contextValue?.loading ? 'Loading' : 'Not loading'}</Text>
              <Text>{contextValue?.data.dataGraphic.length}</Text>
              <Text>{contextValue?.data.resume.co2}</Text>
              <Text>{contextValue?.data.expectedFormat}</Text>
            </View>
          )}
        </GenerateGraphEnergyConsumedContext.Consumer>
      </GenerateGraphEnergyConsumedContext.Provider>,
    );

    expect(getByText('Not loading')).toBeTruthy();
  });

  it('get and set type', () => {
    let contextValue: IGenerateGraphEnergyConsumed | null = null;

    const {getByText} = render(
      <GenerateGraphEnergyConsumedContext.Provider
        value={{
          type: 'hourly',
          setType: (type: DataType) => {
            contextValue!.type = type;
          },
          loading: false,
          data: {
            dataGraphic: [],
            resume: {co2: 0, kwh: 0, percentage: 0, trees: 0},
            expectedFormat: 0,
          },
        }}>
        <GenerateGraphEnergyConsumedContext.Consumer>
          {(value: IGenerateGraphEnergyConsumed | null) => {
            contextValue = value;
            return (
              <View>
                <Text>{value?.type}</Text>
              </View>
            );
          }}
        </GenerateGraphEnergyConsumedContext.Consumer>
      </GenerateGraphEnergyConsumedContext.Provider>,
    );

    expect(getByText('hourly')).toBeTruthy();
  });

  it('event setType', () => {
    let contextValue: IGenerateGraphEnergyConsumed | null = null;

    const {debug, getByText} = render(
      <GenerateGraphEnergyConsumedContext.Provider
        value={{
          type: 'hourly',
          setType: (type: DataType) => {
            contextValue!.type = type;
          },
          loading: false,
          data: {
            dataGraphic: [],
            resume: {co2: 0, kwh: 0, percentage: 0, trees: 0},
            expectedFormat: 0,
          },
        }}>
        <GenerateGraphEnergyConsumedContext.Consumer>
          {(value: IGenerateGraphEnergyConsumed | null) => {
            contextValue = value;
            return (
              <View>
                <TouchableOpacity onPress={() => value?.setType('monthly')}>
                  <Text>{value?.type}</Text>
                </TouchableOpacity>
              </View>
            );
          }}
        </GenerateGraphEnergyConsumedContext.Consumer>
      </GenerateGraphEnergyConsumedContext.Provider>,
    );

    expect(getByText('hourly')).toBeTruthy();

    fireEvent.press(getByText('hourly'));

    expect(contextValue!.type).toBe('monthly');

    debug();
  });
});

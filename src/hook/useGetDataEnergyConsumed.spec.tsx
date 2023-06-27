import React from 'react';
import {render, waitFor, renderHook} from '@testing-library/react-native';
import {useGetDataEnergyConsumed} from './useGetDataEnergyConsumed';
import {Text, View} from 'react-native';

// Mock da função fetchData
jest.mock('../service/serviceEnergyConsumed', () => ({
  fetchData: jest.fn().mockResolvedValue({
    generation: [100, 200, 300],
    totals: {
      co2: 100,
      kwh: 200,
      percentage: 0.5,
      trees: 10,
    },
    x_labels: ['Label 1', 'Label 2', 'Label 3'],
    expected: [500],
  }),
}));

describe('useGetDataEnergyConsumed', () => {
  it('should fetch and set the data correctly', async () => {
    const {result} = renderHook(() =>
      useGetDataEnergyConsumed({type: 'hourly'}),
    );

    expect(result.current.loading).toBe(true);

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
      expect(result.current.data.dataGraphic).toEqual([
        {value: 100, label: 'Label 1', frontColor: '#177AD5'},
        {value: 200, label: 'Label 2', frontColor: '#177AD5'},
        {value: 300, label: 'Label 3', frontColor: '#177AD5'},
      ]);
      expect(result.current.data.expectedFormat).toBe(500);
      expect(result.current.data.resume).toEqual({
        co2: 100,
        kwh: 200,
        percentage: 0.5,
        trees: 10,
      });
    });
  });

  it('should call fetchData with the correct dataType', async () => {
    const Component = () => {
      const {loading, data} = useGetDataEnergyConsumed({type: 'monthly'});

      if (loading) {
        return <Text>Loading...</Text>;
      }

      return (
        <View>
          {data.dataGraphic.map(item => (
            <Text key={item.label}>{item.label}</Text>
          ))}
        </View>
      );
    };

    const {debug} = render(<Component />);
  });
});

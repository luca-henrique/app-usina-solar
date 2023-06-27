import {mapData} from './mapData';

describe('mapData', () => {
  it('should map data correctly', () => {
    const dataType = 'hourly';
    const generation = [100, 200, 300];
    const x_labels = ['label1', 'label2', 'label3'];
    const expected = [400];
    const totals = {co2: 1000, kwh: 500, percentage: 50, trees: 10};

    const {dataGraphic, expectedFormat, resume} = mapData(
      dataType,
      generation,
      x_labels,
      expected,
      totals,
    );

    expect(dataGraphic).toEqual([
      {
        value: 100,
        label: 'label1',
        frontColor: '#177AD5',
        topLabelComponent: expect.any(Function),
      },
      {
        value: 200,
        label: 'label2',
        frontColor: '#177AD5',
        topLabelComponent: expect.any(Function),
      },
      {
        value: 300,
        label: 'label3',
        frontColor: '#177AD5',
        topLabelComponent: expect.any(Function),
      },
    ]);

    expect(expectedFormat).toBe(400);

    expect(resume).toEqual({co2: 1000, kwh: 500, percentage: 50, trees: 10});
  });

  it('should handle empty generation array', () => {
    const dataType = 'hourly';
    const generation: number[] = [];
    const x_labels: string[] = [];
    const expected: number[] = [];
    const totals = {co2: 1000, kwh: 500, percentage: 50, trees: 10};

    const {dataGraphic, expectedFormat, resume} = mapData(
      dataType,
      generation,
      x_labels,
      expected,
      totals,
    );

    expect(dataGraphic).toEqual([]);

    expect(expectedFormat).toBeUndefined();

    expect(resume).toEqual({co2: 1000, kwh: 500, percentage: 50, trees: 10});
  });
});

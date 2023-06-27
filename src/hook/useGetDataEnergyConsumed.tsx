import {useState, useEffect, useCallback} from 'react';

import {DataType} from '../context/GenerateGraphEnergyConsumedContext';

import {mapData} from './mapData';
import {fetchData} from '../service/serviceEnergyConsumed';

interface IDataGraphic {
  value: number;
  label: string;
  frontColor: string;
}

interface ITotals {
  co2: number;
  kwh: number;
  percentage: number;
  trees: number;
}

export interface IDataEnergyConsumed {
  dataGraphic: IDataGraphic[];
  resume: ITotals;
  expectedFormat: number;
}

export const useGetDataEnergyConsumed = ({
  type = 'hourly',
}: {
  type?: DataType;
}) => {
  const [loading, setLoading] = useState(true);

  const [data, setData] = useState<IDataEnergyConsumed>({
    dataGraphic: [],
    expectedFormat: 0,
    resume: {co2: 0, kwh: 0, percentage: 0, trees: 0},
  });

  const getData = useCallback(async (dataType: DataType = 'hourly') => {
    setLoading(true);
    try {
      const response = await fetchData(dataType);

      const {generation, totals, x_labels, expected} = response;

      const {dataGraphic, expectedFormat, resume} = mapData(
        dataType,
        generation,
        x_labels,
        expected,
        totals,
      );

      setData({
        expectedFormat,
        dataGraphic,
        resume,
      });

      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getData(type);
  }, [getData, type]);

  return {loading, data};
};

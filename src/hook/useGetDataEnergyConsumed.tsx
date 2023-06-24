import {useState, useEffect, useCallback} from 'react';
import api from '../service';
import {getDay, getMonthByDate} from '../utils';
import {DataType} from '../context/GenerateGraphEnergyConsumedContext';
import React from 'react';

import {TopBarGraphicText} from '../components/atoms/TopBarGraphicText/TopBarGraphicText';

const formatLabels: Record<DataType, (label: string) => string> = {
  hourly: label => label.split(':').join(':'),
  daily: getDay,
  monthly: getMonthByDate,
  yearly: label => label.split('-')[0],
};

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
  expected: number;
}

function formatLabel(dataType: DataType, label: string): string {
  return formatLabels[dataType](label);
}

export const useGetDataEnergyConsumed = ({
  type = 'hourly',
}: {
  type: DataType;
}) => {
  const [loading, setLoading] = useState(true);

  const [data, setData] = useState<IDataEnergyConsumed>({
    dataGraphic: [],
    expected: 0,
    resume: {co2: 0, kwh: 0, percentage: 0, trees: 0},
  });

  const getData = useCallback(async (dataType: DataType = 'hourly') => {
    setLoading(true);
    try {
      const response = await api.get('', {
        params: {
          dataType: dataType,
        },
      });

      const {generation, totals, x_labels, expected} = response.data.data;

      let dataGraphics = [];

      for (let index = 0; index < generation.length; index++) {
        const formattedLabel = formatLabel(dataType, x_labels[index]);

        dataGraphics.push({
          value: generation[index],
          label: formattedLabel,
          frontColor: '#177AD5',
          topLabelComponent: () => (
            <TopBarGraphicText>{generation[index].toFixed()}</TopBarGraphicText>
          ),
        });
      }

      setData({
        expected: expected[0],
        dataGraphic: dataGraphics,
        resume: totals,
      });

      console.log(response.data.data);
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

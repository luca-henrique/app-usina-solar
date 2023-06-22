import React, {useCallback, useEffect, useState} from 'react';

import {Text, View} from 'react-native';
import api from './src/service';
import {
  Header,
  DetailInformation,
  GraphicTotalGeneratedEnergy,
  GraphicEnergyGenerate,
} from './src/components';

import styled from 'styled-components/native';
import {getDay, getMonthByDate} from './src/utils';

export const Container = styled.ScrollView`
  flex: 1;
  z-index: -1;
`;

interface ITotal {
  co2: number;
  kwh: number;
  percentage: number;
  trees: number;
}

interface IDataGraphic {
  value: number;
  label: string;
  frontColor: string;
}

interface IDetails {
  generationTotal: number;
  totals: ITotal;
  graphicData: IDataGraphic;
  totalEnergyGenereted: number;
  expected: number;
}

type DataType = 'hourly' | 'daily' | 'monthly' | 'yearly';

function App(): JSX.Element {
  const [data, setData] = useState<IDataGraphic[]>([]);
  const [loading, setLoading] = useState(true);
  const [total, setTotal] = useState<number>(0);
  const [totals, setTotals] = useState<ITotal>({
    co2: 0,
    kwh: 0,
    percentage: 0,
    trees: 0,
  });

  const [expected, setExpected] = useState(0);

  const {information, setInformation} = useState<IDetails>();

  const [type, setType] = useState<DataType>('hourly');

  const getData = useCallback(async (dataType: DataType = 'hourly') => {
    setLoading(true);
    try {
      const {data} = await api.get('', {
        params: {
          dataType: dataType,
        },
      });

      const {generation, totals, x_labels, expected} = data.data;
      setExpected(expected[0]);

      const formatLabels: Record<DataType, (label: string) => string> = {
        hourly: label => label.split(':').join(':'),
        daily: getDay,
        monthly: getMonthByDate,
        yearly: label => label.split('-')[0],
      };

      function formatLabel(dataType: DataType, label: string): string {
        return formatLabels[dataType](label);
      }

      let generationTotal = 0;

      for (const item of generation) {
        generationTotal = generationTotal + item;
      }

      let dataGraphics = [];

      for (let index = 0; index < generation.length; index++) {
        const formattedLabel = formatLabel(dataType, x_labels[index]);

        dataGraphics.push({
          value: generation[index],
          label: formattedLabel,
          frontColor: '#177AD5',
          // eslint-disable-next-line react/no-unstable-nested-components
          topLabelComponent: () => (
            <Text style={{fontSize: 12, marginBottom: 6}}>
              {generation[index].toFixed()}
            </Text>
          ),
        });
      }

      setData(dataGraphics);
      setTotal(generationTotal);
      setTotals(totals);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getData(type);
  }, [getData, type]);

  return (
    <Container>
      <Header setType={setType} />
      {loading ? (
        <></>
      ) : (
        <View style={{zIndex: -2}}>
          <DetailInformation
            icon="energy-icon"
            description="Total de energia gerada"
            result={`${total.toFixed()} KW/h`}>
            <GraphicEnergyGenerate data={data} />
          </DetailInformation>
          <DetailInformation
            icon="co2-icon"
            description="Quantidade de carbono evitado"
            result={`${totals.co2.toFixed()}g`}
          />
          <DetailInformation
            icon="tree-icon"
            description="Quantidade de árvores salvas"
            result={`${totals.trees.toFixed()} unidades`}
          />
        </View>
      )}
    </Container>
  );
}

export default App;

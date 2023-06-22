import React, {useCallback, useEffect, useState} from 'react';

import {ScrollView, Text, View} from 'react-native';
import api from './src/service';
import {
  Header,
  DetailInformation,
  GraphicTotalGeneratedEnergy,
} from './src/components';
import {BarChart} from 'react-native-gifted-charts';

import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
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
}

function App(): JSX.Element {
  const [data, setData] = useState<IDataGraphic[]>([]);
  const [loading, setLoading] = useState(true);
  const [total, setTotal] = useState<string>('');
  const [totals, setTotals] = useState<ITotal>({
    co2: 0,
    kwh: 0,
    percentage: 0,
    trees: 0,
  });

  const {information, setInformation} = useState<IDetails>();

  const getData = useCallback(async (dataType: string = 'hourly') => {
    setLoading(true);
    try {
      const {data} = await api.get('', {
        params: {
          dataType: dataType,
        },
      });

      const {generation, totals, x_labels} = data.data;
      console.log(data.data);

      let generationTotal = 0;

      for (const item of generation) {
        generationTotal = generationTotal + item;
      }

      let dataGraphics = [];

      for (let index = 0; index < generation.length; index++) {
        //console.log(x_labels[index].split(':'));
        //console.log(dataType);

        let hours = x_labels[index].split(':');

        dataGraphics.push({
          value: generation[index],
          label: `${hours[0]}:${hours[1]}`,
          frontColor: '#177AD5',
          topLabelComponent: () => (
            <Text style={{fontSize: 12, marginBottom: 6}}>
              {generation[index]}
            </Text>
          ),
        });
      }

      setData(dataGraphics);
      setTotal(generationTotal.toFixed(2));
      setTotals(totals);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <Container>
      <Header />
      {loading ? (
        <></>
      ) : (
        <View>
          <DetailInformation
            icon="energy-icon"
            description="Total de energia gerada"
            result={`${total} KWh`}>
            <GraphicTotalGeneratedEnergy />
          </DetailInformation>
          <DetailInformation
            icon="co2-icon"
            description="Quantidade de carbono evitado"
            result={`${totals.co2}g`}
          />
          <DetailInformation
            icon="tree-icon"
            description="Quantidade de árvores salvas"
            result={`${totals.trees} unidades`}
          />
        </View>
      )}
    </Container>
  );
}

export const GraphicEnergyGenerate = ({data}: any) => {
  return (
    <View
      style={{
        paddingHorizontal: 20,
        marginBottom: 20,
      }}>
      <BarChart
        barWidth={32}
        noOfSections={3}
        barBorderRadius={4}
        frontColor="lightgray"
        data={data}
        yAxisThickness={0}
        xAxisThickness={0}
        xAxisLabelTextStyle={{color: '#6c757d'}}
        yAxisTextStyle={{color: '#6c757d'}}
      />
    </View>
  );
};

export default App;

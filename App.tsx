import React, {useCallback, useEffect, useState} from 'react';

import {ScrollView, View} from 'react-native';
import api from './src/service';
import {SelectGroup} from './src/components';

import {BarChart, LineChart, PieChart} from 'react-native-gifted-charts';

function App(): JSX.Element {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = useCallback(async (dataType: string = 'hourly') => {
    setLoading(true);
    try {
      const {data} = await api.get('', {
        params: {
          dataType: dataType,
        },
      });

      console.log(data);

      const {generation, totals, x_labels} = data.data;

      let generationTotal = 0;

      for (const item of generation) {
        generationTotal = generationTotal + item;
      }

      let dataGraphics = [];

      for (let index = 0; index < generation.length; index++) {
        dataGraphics.push({
          value: generation[index],
          label: x_labels[index],
          frontColor: '#177AD5',
        });
      }

      setData(dataGraphics);

      setLoading(false);

      // combinar generation com x_labels
      //console.log('Total de energia gerado', generationTotal.toFixed(2));
      //console.log(totals);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <ScrollView
      style={{
        flex: 1,
        paddingVertical: 20,
        paddingHorizontal: 20,
      }}>
      <View style={{marginTop: 20}} />
      <SelectGroup />
    </ScrollView>
  );
}

/*
  {loading ? (
        <></>
      ) : (
        <BarChart
          barWidth={18}
          noOfSections={3}
          barBorderRadius={4}
          frontColor="lightgray"
          data={data}
          yAxisThickness={0}
          xAxisThickness={0}
        />
      )}

*/

export default App;

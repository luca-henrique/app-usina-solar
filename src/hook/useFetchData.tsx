import {useEffect, useState, useCallback} from 'react';
import api from '../service';

export const useFetchData = () => {
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

      setData(data.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

  return {data, loading};
};

import {DataType} from '../context/GenerateGraphEnergyConsumedContext';
import api from './';

export async function fetchData(dataType: DataType): Promise<any> {
  try {
    const response = await api.get('', {
      params: {
        dataType: dataType,
      },
    });
    return response.data.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

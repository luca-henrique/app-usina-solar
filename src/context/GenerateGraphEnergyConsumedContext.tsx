// context/todoContext.tsx
import * as React from 'react';
import {
  IDataEnergyConsumed,
  useGetDataEnergyConsumed,
} from '../hook/useGetDataEnergyConsumed';

export type DataType = 'hourly' | 'daily' | 'monthly' | 'yearly';

export interface IGenerateGraphEnergyConsumed {
  type: DataType;
  setType: (type: DataType) => void;
  loading: boolean;
  data: IDataEnergyConsumed;
}

export const GenerateGraphEnergyConsumedContext =
  React.createContext<IGenerateGraphEnergyConsumed | null>(null);

const GenerateGraphEnergyConsumed = ({children}: any) => {
  const [type, setType] = React.useState<DataType>('hourly');

  const {loading, data} = useGetDataEnergyConsumed({type});

  return (
    <GenerateGraphEnergyConsumedContext.Provider
      value={{type, setType, loading, data}}>
      {children}
    </GenerateGraphEnergyConsumedContext.Provider>
  );
};

export default GenerateGraphEnergyConsumed;

import {DataType} from '../context/GenerateGraphEnergyConsumedContext';
import {getDay, getMonthByDate} from '../utils';

const formatLabels: Record<DataType, (label: string) => string> = {
  hourly: label => label.split(':').join(':'),
  daily: getDay,
  monthly: getMonthByDate,
  yearly: label => label.split('-')[0],
};

export function formatLabel(dataType: DataType, label: string): string {
  return formatLabels[dataType](label);
}

import React from 'react';

import {DataType} from '../context/GenerateGraphEnergyConsumedContext';
import {IDataEnergyConsumed} from './useGetDataEnergyConsumed';
import {formatLabel} from '../utils/formatTypeData';

import {TopBarGraphicText} from '../components/atoms/TopBarGraphicText/TopBarGraphicText';

export function mapData(
  dataType: DataType,
  generation: number[],
  x_labels: string[],
  expectedFormat: number[],
  totals?: any,
): IDataEnergyConsumed {
  const dataGraphics = [];

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

  return {
    expectedFormat: expectedFormat[0],
    dataGraphic: dataGraphics,
    resume: totals,
  };
}

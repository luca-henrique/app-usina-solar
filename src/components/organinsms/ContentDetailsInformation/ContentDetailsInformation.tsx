import React from 'react';

import {
  IGenerateGraphEnergyConsumed,
  GenerateGraphEnergyConsumedContext,
} from '../../../context/GenerateGraphEnergyConsumedContext';

import {DetailInformation, GraphicEnergyGenerate} from '../../';

import {Container} from './style';

export const ContentDetailsInformation = () => {
  const {data} = React.useContext(
    GenerateGraphEnergyConsumedContext,
  ) as IGenerateGraphEnergyConsumed;

  return (
    <Container>
      <DetailInformation
        icon="energy-icon"
        description="Total de energia gerada"
        result={`${data.resume.kwh.toFixed()} KW/h`}>
        <GraphicEnergyGenerate data={data.dataGraphic} />
      </DetailInformation>
      <DetailInformation
        icon="co2-icon"
        description="Quantidade de carbono evitado"
        result={`${data.resume.co2.toFixed()}g`}
      />
      <DetailInformation
        icon="tree-icon"
        description="Quantidade de árvores salvas"
        result={`${data.resume.trees.toFixed()} unidades`}
      />
    </Container>
  );
};

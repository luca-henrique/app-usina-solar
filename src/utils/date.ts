export const getDay = (date: string) => {
  var data = new Date(date);

  var numeroDiaSemana = data.getDay();

  var nomesDiasSemana = ['dom', 'seg', 'terç', 'qua', 'qui', 'sex', 'sáb'];

  var nomeDiaSemana = nomesDiasSemana[numeroDiaSemana];

  return nomeDiaSemana;
};

export const getMonthByDate = (date: string) => {
  var data = new Date(date);

  var numeroMes = data.getMonth();

  var nomesMeses = [
    'jan',
    'fev',
    'mar',
    'abr',
    'maio',
    'jun',
    'jul',
    'ago',
    'set',
    'out',
    'nov',
    'dez',
  ];

  var nomeMes = nomesMeses[numeroMes];

  return nomeMes;
};

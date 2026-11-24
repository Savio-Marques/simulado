import type { Question } from '../../types/exam';

export const LEGISLACAO_QUESTIONS: Question[] = [
  {
    id: 'LEG-001',
    module: 'legislacao',
    statement:
      'Segundo a Resolução CONTRAN nº 789/2020, qual é a idade mínima exigida para o condutor fazer o curso especializado para transporte coletivo de passageiros?',
    options: [
      '18 anos completos',
      '20 anos completos',
      '21 anos completos',
      '25 anos completos',
    ],
    correctIndex: 2,
    explanation:
      'Para conduzir transporte coletivo de passageiros e fazer o curso especializado, o motorista precisa ter pelo menos 21 anos completos.',
  },
  {
    id: 'LEG-002',
    module: 'legislacao',
    statement:
      'Para realizar o curso especializado de transporte coletivo de passageiros, em quais categorias de CNH o condutor deve estar habilitado no mínimo?',
    options: [
      'Categoria B ou C',
      'Categoria D ou E',
      'Categoria C apenas',
      'Categoria A ou B',
    ],
    correctIndex: 1,
    explanation:
      'O transporte coletivo de passageiros (mais de 8 lugares além do motorista) exige habilitação na categoria D ou na categoria E.',
  },
  {
    id: 'LEG-003',
    module: 'legislacao',
    statement:
      'Qual é a carga horária total do curso completo de formação (capacitação) para condutores de transporte coletivo de passageiros?',
    options: [
      '16 horas-aula',
      '30 horas-aula',
      '50 horas-aula',
      '70 horas-aula',
    ],
    correctIndex: 2,
    explanation:
      'O curso inicial de capacitação tem 50 horas-aula no total, divididas entre os quatro módulos obrigatórios.',
  },
  {
    id: 'LEG-004',
    module: 'legislacao',
    statement:
      'De quanto em quanto tempo o curso especializado de transporte coletivo de passageiros precisa ser atualizado e qual a carga horária da atualização?',
    options: [
      'A cada 5 anos, com curso de atualização de 16 horas-aula',
      'A cada 2 anos, com curso de atualização de 10 horas-aula',
      'A cada 10 anos, com curso de atualização de 50 horas-aula',
      'A cada 3 anos, com curso de atualização de 20 horas-aula',
    ],
    correctIndex: 0,
    explanation:
      'A validade do curso especializado é de 5 anos. Ao vencer, o motorista faz a atualização de 16 horas-aula.',
  },
  {
    id: 'LEG-005',
    module: 'legislacao',
    statement:
      'Na prova teórica do DETRAN para o curso especializado, quantas questões o candidato precisa acertar no mínimo em uma prova de 30 questões?',
    options: [
      '15 questões (50%)',
      '18 questões (60%)',
      '21 questões (70%)',
      '24 questões (80%)',
    ],
    correctIndex: 2,
    explanation:
      'A aprovação exige no mínimo 70% de acertos, o que equivale a pelo menos 21 acertos em 30 questões.',
  },
  {
    id: 'LEG-006',
    module: 'legislacao',
    statement:
      'Qual impedimento proíbe o condutor de se matricular e realizar o curso especializado de transporte coletivo?',
    options: [
      'Ter menos de 5 anos de carteira definitiva',
      'Estar cumprindo pena de suspensão do direito de dirigir ou ter a CNH cassada',
      'Trabalhar apenas no transporte intermunicipal',
      'Possuir veículo próprio registrado em seu nome',
    ],
    correctIndex: 1,
    explanation:
      'Quem está com a CNH suspensa, cassada ou impedido por decisão judicial não pode fazer o curso nem conduzir transporte coletivo.',
  },
  {
    id: 'LEG-007',
    module: 'legislacao',
    statement:
      'Segundo o Código de Trânsito Brasileiro (CTB), qual equipamento obrigatório registra a velocidade e o tempo de direção nos veículos de transporte coletivo com mais de 10 passageiros?',
    options: [
      'Rádio comunicador de cabine',
      'Registrador instantâneo e inalterável de velocidade e tempo (cronotacógrafo)',
      'Computador de bordo conectado à internet',
      'Medidor eletrônico de pressão dos pneus',
    ],
    correctIndex: 1,
    explanation:
      'O cronotacógrafo é equipamento obrigatório para ônibus e micro-ônibus de transporte de passageiros com mais de 10 lugares.',
  },
  {
    id: 'LEG-008',
    module: 'legislacao',
    statement:
      'Sobre a Lei do Motorista Profissional (Lei nº 13.103/2015), qual é o tempo máximo que o motorista de transporte coletivo rodoviário pode dirigir de forma contínua sem fazer intervalo?',
    options: [
      'Até 2 horas seguidas',
      'Até 5 horas e 30 minutos',
      'Até 8 horas seguidas',
      'Até 10 horas seguidas',
    ],
    correctIndex: 1,
    explanation:
      'No transporte rodoviário de passageiros, é proibido dirigir por mais de 5 horas e meia ininterruptas sem parada para descanso.',
  },
  {
    id: 'LEG-009',
    module: 'legislacao',
    statement:
      'Pela Lei do Motorista Profissional, qual é o intervalo mínimo de descanso dentro da jornada após atingir o limite de direção contínua no transporte coletivo?',
    options: [
      '10 minutos de descanso',
      '15 minutos de descanso',
      '30 minutos de descanso',
      '2 horas de descanso',
    ],
    correctIndex: 2,
    explanation:
      'O motorista de passageiros tem direito a no mínimo 30 minutos de descanso dentro das 5 horas e 30 minutos de direção, podendo ser fracionado conforme a lei.',
  },
  {
    id: 'LEG-010',
    module: 'legislacao',
    statement:
      'Qual é o descanso diário mínimo garantido ao motorista profissional entre o fim de uma jornada de trabalho e o início da seguinte?',
    options: [
      '6 horas dentro de um período de 24 horas',
      '8 horas dentro de um período de 24 horas',
      '11 horas dentro de um período de 24 horas',
      '14 horas dentro de um período de 24 horas',
    ],
    correctIndex: 2,
    explanation:
      'A legislação assegura ao motorista profissional no mínimo 11 horas de descanso dentro de cada período de 24 horas.',
  },
  {
    id: 'LEG-011',
    module: 'legislacao',
    statement:
      'Ao parar o ônibus para embarque ou desembarque de passageiros em via urbana sem baia, como o motorista deve posicionar o veículo?',
    options: [
      'Em fila dupla para agilizar o embarque',
      'Paralelo e junto à guia da calçada (meio-fio), nos pontos autorizados',
      'Sobre a faixa de pedestres para facilitar a visão',
      'Com duas rodas em cima da calçada',
    ],
    correctIndex: 1,
    explanation:
      'O embarque e o desembarque devem ocorrer sempre do lado da calçada, com o veículo paralelo e próximo ao meio-fio, sem bloquear a circulação.',
  },
  {
    id: 'LEG-012',
    module: 'legislacao',
    statement:
      'Em uma via onde não há sinalização específica de velocidade máxima, qual é o limite padrão para um ônibus em rodovia de pista dupla?',
    options: [
      '80 km/h',
      '90 km/h',
      '100 km/h',
      '110 km/h',
    ],
    correctIndex: 1,
    explanation:
      'Pelo CTB (art. 61), em rodovias sem sinalização regulamentadora, o limite máximo para ônibus e demais veículos pesados em pista dupla é de 90 km/h.',
  },
  {
    id: 'LEG-013',
    module: 'legislacao',
    statement:
      'Em estradas rurais não pavimentadas (estradas de terra) sem placa de velocidade, qual é a velocidade máxima permitida para qualquer veículo, inclusive ônibus?',
    options: [
      '40 km/h',
      '60 km/h',
      '80 km/h',
      '90 km/h',
    ],
    correctIndex: 1,
    explanation:
      'Nas estradas não pavimentadas sem sinalização de velocidade, o limite máximo legal é de 60 km/h.',
  },
  {
    id: 'LEG-014',
    module: 'legislacao',
    statement:
      'Quando o ônibus estiver saindo de uma baia ou ponto de parada devidamente sinalizado e o motorista acionar a seta indicando entrada na via, como os demais condutores devem agir segundo o CTB?',
    options: [
      'Acelerar para passar antes do ônibus',
      'Manter distância e facilitar a entrada do transporte coletivo na faixa',
      'Buzinar para impedir a saída do ponto',
      'Obrigar o ônibus a esperar todos os carros passarem',
    ],
    correctIndex: 1,
    explanation:
      'O transporte coletivo tem prioridade no retorno à circulação quando sai de ponto de parada ou baia sinalizada, cabendo aos demais condutores facilitar a manobra com segurança.',
  },
  {
    id: 'LEG-015',
    module: 'legislacao',
    statement:
      'Qual é a consequência prevista no CTB para quem conduz veículo de transporte remunerado de passageiros sem possuir a habilitação ou autorização exigida?',
    options: [
      'Apenas advertência por escrito na primeira vez',
      'Infração leve com 3 pontos na CNH',
      'Infração gravíssima com multa e medida administrativa de remoção do veículo',
      'Nenhuma penalidade se o veículo estiver com o IPVA pago',
    ],
    correctIndex: 2,
    explanation:
      'Efetuar transporte remunerado de pessoas sem licença ou autorização para esse fim é infração gravíssima, sujeita a multa e remoção do veículo.',
  },
  {
    id: 'LEG-016',
    module: 'legislacao',
    statement:
      'Observe a placa de regulamentação apresentada. O que ela determina ao motorista do veículo de transporte coletivo?',
    signCode: 'R-1',
    options: [
      'Reduzir a velocidade e seguir se não houver carros',
      'Parar obrigatoriamente o veículo antes de entrar ou cruzar a via',
      'Dar preferência apenas aos ônibus articulados',
      'Proibir o embarque de passageiros na esquina',
    ],
    correctIndex: 1,
    explanation:
      'A placa R-1 (Parada Obrigatória) exige que o condutor pare totalmente o veículo antes da linha de retenção ou cruzamento, mesmo que a via pareça livre.',
  },
  {
    id: 'LEG-017',
    module: 'legislacao',
    statement:
      'Diante da placa exibida, qual é a obrigação correta do condutor ao se aproximar do cruzamento ou rotatória?',
    signCode: 'R-2',
    options: [
      'Parar completamente mesmo sem nenhum veículo se aproximando',
      'Dar preferência de passagem aos veículos que circulam pela via transversal',
      'Manter a velocidade porque ônibus sempre tem preferência',
      'Proibir a conversão à esquerda naquele trecho',
    ],
    correctIndex: 1,
    explanation:
      'A placa R-2 (Dê a Preferência) ordena reduzir a velocidade e ceder a passagem aos veículos que trafegam pela via principal ou rotatória.',
  },
  {
    id: 'LEG-018',
    module: 'legislacao',
    statement:
      'Qual é a diferença prática determinada pela placa apresentada para um motorista de ônibus?',
    signCode: 'R-6a',
    options: [
      'É proibido estacionar, mas é permitido parar rapidamente para embarque ou desembarque',
      'É proibido tanto parar quanto estacionar em qualquer horário',
      'É permitido estacionar apenas ônibus escolares',
      'Indica ponto exclusivo de parada para táxis',
    ],
    correctIndex: 0,
    explanation:
      'A placa R-6a (Proibido Estacionar) tem apenas um traço vermelho: proíbe estacionar, mas permite a parada rápida pelo tempo estritamente necessário ao embarque ou desembarque.',
  },
  {
    id: 'LEG-019',
    module: 'legislacao',
    statement:
      'Observe a placa com dois traços em X sobre a letra E. O que ela proíbe naquele trecho da via?',
    signCode: 'R-6c',
    options: [
      'Proíbe apenas estacionar por mais de 10 minutos',
      'Proíbe parar e estacionar, inclusive para embarque e desembarque rápido',
      'Proíbe apenas veículos de carga pesada',
      'Proíbe o uso da buzina durante a noite',
    ],
    correctIndex: 1,
    explanation:
      'A placa R-6c (Proibido Parar e Estacionar) não permite sequer parar rapidamente para embarque ou desembarque de passageiros.',
  },
  {
    id: 'LEG-020',
    module: 'legislacao',
    statement:
      'Em um trecho de rodovia sinalizado com a placa apresentada, qual manobra está expressamente proibida?',
    signCode: 'R-7',
    options: [
      'Mudar para a faixa da direita após parada',
      'Ultrapassar outro veículo naquele trecho',
      'Reduzir a marcha antes da curva',
      'Ligar o farol baixo durante o dia',
    ],
    correctIndex: 1,
    explanation:
      'A placa R-7 indica Proibido Ultrapassar. Fazer ultrapassagem nesse trecho é infração gravíssima e gera risco grave de colisão frontal.',
  },
  {
    id: 'LEG-021',
    module: 'legislacao',
    statement:
      'Antes de passar por um viaduto ou passarela, o motorista do ônibus visualiza esta placa. O que ela indica?',
    signCode: 'R-15',
    options: [
      'Largura máxima permitida de 4,5 metros',
      'Comprimento máximo permitido de 4,5 metros',
      'Altura máxima permitida de 4,5 metros',
      'Peso máximo por eixo de 4,5 toneladas',
    ],
    correctIndex: 2,
    explanation:
      'As setas em cima e embaixo na placa R-15 indicam Altura Máxima Permitida. Veículos mais altos que 4,5 metros não podem passar.',
  },
  {
    id: 'LEG-022',
    module: 'legislacao',
    statement:
      'Qual é a determinação legal representada por esta placa de regulamentação?',
    signCode: 'R-19',
    options: [
      'Velocidade mínima obrigatória de 60 km/h',
      'Velocidade máxima permitida de 60 km/h',
      'Distância mínima de 60 metros entre ônibus',
      'Comprimento máximo da via de 60 quilômetros',
    ],
    correctIndex: 1,
    explanation:
      'A placa R-19 define a velocidade máxima permitida naquele trecho da via (neste exemplo, 60 km/h).',
  },
  {
    id: 'LEG-023',
    module: 'legislacao',
    statement:
      'Ao encontrar esta placa de regulamentação em uma avenida ou rodovia, como o motorista deve posicionar o ônibus?',
    signCode: 'R-27',
    options: [
      'Os ônibus, caminhões e veículos de grande porte devem manter-se na faixa da direita',
      'Os ônibus devem circular obrigatoriamente na faixa da esquerda',
      'É proibida a circulação de ônibus em qualquer faixa da avenida',
      'Apenas veículos de passeio podem trafegar pela direita',
    ],
    correctIndex: 0,
    explanation:
      'A placa R-27 determina que ônibus, caminhões e veículos de grande porte devem circular na faixa da direita, deixando a esquerda para ultrapassagens e veículos mais rápidos.',
  },
  {
    id: 'LEG-024',
    module: 'legislacao',
    statement:
      'O que determina a placa de regulamentação exibida em um corredor urbano?',
    signCode: 'R-32',
    options: [
      'Proibida a circulação de ônibus no corredor',
      'Circulação exclusiva de ônibus na faixa ou pista sinalizada',
      'Estacionamento rotativo para vans escolares',
      'Retorno obrigatório para ônibus intermunicipais',
    ],
    correctIndex: 1,
    explanation:
      'A placa R-32 sinaliza Circulação Exclusiva de Ônibus, garantindo fluidez ao transporte coletivo de passageiros.',
  },
  {
    id: 'LEG-025',
    module: 'legislacao',
    statement:
      'Qual direção obrigatória está indicada pela placa de regulamentação apresentada?',
    signCode: 'R-25a',
    options: [
      'Proibido virar à esquerda',
      'Vire à esquerda obrigatoriamente',
      'Sentido duplo de circulação adiante',
      'Desvio obrigatório pela direita',
    ],
    correctIndex: 1,
    explanation:
      'As placas R-25 de regulamentação indicam sentido ou direção obrigatória. A R-25a ordena virar à esquerda obrigatoriamente.',
  },
  {
    id: 'LEG-026',
    module: 'legislacao',
    statement:
      'Em relação ao uso do cinto de segurança no transporte coletivo rodoviário (ônibus de viagem com cintos instalados), quem tem responsabilidade pelo uso?',
    options: [
      'Apenas o motorista precisa usar o cinto de segurança',
      'Motorista e passageiros têm obrigatoriedade de usar o cinto durante a viagem',
      'Somente os passageiros dos primeiros bancos precisam usar o cinto',
      'O uso do cinto é facultativo para adultos em ônibus',
    ],
    correctIndex: 1,
    explanation:
      'Nos veículos dotados de cinto de segurança para todos os ocupantes, o uso é obrigatório tanto para o condutor quanto para os passageiros.',
  },
  {
    id: 'LEG-027',
    module: 'legislacao',
    statement:
      'Durante a condução de veículo de transporte coletivo, é permitido ao motorista falar ao telefone celular usando o aparelho segurado com uma das mãos ou no ouvido?',
    options: [
      'Sim, desde que o ônibus esteja abaixo de 40 km/h',
      'Sim, apenas quando não houver passageiros em pé',
      'Não; dirigir segurando ou manuseando telefone celular é infração gravíssima',
      'Sim, se a ligação durar menos de um minuto',
    ],
    correctIndex: 2,
    explanation:
      'Segurar ou manusear telefone celular enquanto dirige é infração gravíssima no CTB e coloca todos os passageiros em risco.',
  },
  {
    id: 'LEG-028',
    module: 'legislacao',
    statement:
      'De acordo com a legislação de trânsito vigente sobre o exame toxicológico periódico, os motoristas das categorias C, D e E com idade inferior a 70 anos devem realizá-lo a cada:',
    options: [
      '6 meses',
      '1 ano',
      '2 anos e 6 meses',
      '5 anos apenas',
    ],
    correctIndex: 2,
    explanation:
      'Para condutores das categorias C, D e E com menos de 70 anos, o CTB exige exame toxicológico periódico a cada 2 anos e 6 meses, além da renovação da CNH.',
  },
  {
    id: 'LEG-029',
    module: 'legislacao',
    statement:
      'Para o condutor com 70 anos ou mais de idade, qual é o prazo de validade padrão do exame de aptidão física e mental na renovação da CNH?',
    options: [
      '10 anos',
      '5 anos',
      '3 anos',
      '1 ano apenas',
    ],
    correctIndex: 2,
    explanation:
      'Pelo CTB atualizado, a validade do exame médico da CNH é de 10 anos até 49 anos, 5 anos dos 50 aos 69 anos e 3 anos para condutores com 70 anos ou mais.',
  },
  {
    id: 'LEG-030',
    module: 'legislacao',
    statement:
      'No transporte coletivo de passageiros, como deve funcionar a iluminação da cabina do motorista e do salão de passageiros durante a circulação noturna?',
    options: [
      'A luz interna junto ao motorista deve permanecer excessivamente forte para todos verem quem dirige',
      'Deve-se evitar excesso de luz interna próximo ao para-brisa para não gerar reflexo e prejuízo à visão externa do condutor',
      'Todos os faróis externos devem ser desligados nas avenidas iluminadas',
      'As luzes indicadoras de parada e lanternas traseiras podem ficar desligadas dentro da cidade',
    ],
    correctIndex: 1,
    explanation:
      'Luz forte dentro da cabine à noite reflete no para-brisa e prejudica a visão do motorista. Já a iluminação externa regulamentar deve estar sempre acesa.',
  },
  {
    id: 'LEG-031',
    module: 'legislacao',
    statement:
      'Conduzir veículo de transporte de passageiros com a validade do curso especializado vencida há mais de 30 dias pode gerar qual consequência na fiscalização?',
    options: [
      'Nenhuma, pois o curso não tem validade depois de concluído',
      'Autuação por conduzir em desacordo com as exigências legais da atividade',
      'Conversão automática da categoria D para categoria B',
      'Apenas orientação verbal sem registro',
    ],
    correctIndex: 1,
    explanation:
      'Exercer transporte coletivo com o curso especializado vencido impede o exercício regular da atividade e sujeita o condutor e a empresa às autuações cabíveis.',
  },
  {
    id: 'LEG-032',
    module: 'legislacao',
    statement:
      'No cruzamento de uma via sem sinalização entre um ônibus que vem pela via secundária e um automóvel que já circula pela rotatória, quem tem a preferência de passagem?',
    options: [
      'O ônibus, por ser veículo maior e transportar mais pessoas',
      'O veículo que já está circulando pela rotatória',
      'Quem buzinar primeiro ao entrar no cruzamento',
      'Sempre o veículo que estiver mais rápido',
    ],
    correctIndex: 1,
    explanation:
      'Pelo CTB, em rotatórias sem sinalização específica, a preferência é sempre do veículo que já estiver circulando por ela.',
  },
  {
    id: 'LEG-033',
    module: 'legislacao',
    statement:
      'Qual é o limite de álcool no sangue ou no teste do bafômetro tolerado pela Lei Seca para o motorista profissional em serviço?',
    options: [
      'Até 0,5 grama por litro de sangue',
      'Até 0,2 miligrama por litro de ar alveolar',
      'Tolerância zero (qualquer concentração sujeita o condutor a infração gravíssima ou crime)',
      'Até uma lata de cerveja antes de iniciar o turno',
    ],
    correctIndex: 2,
    explanation:
      'No Brasil vigora a tolerância zero ao álcool ao volante, com multa gravíssima, suspensão da CNH por 12 meses e risco de crime de trânsito.',
  },
  {
    id: 'LEG-034',
    module: 'legislacao',
    statement:
      'Qual é a penalidade prevista para o motorista que ultrapassa outro veículo pelo acostamento ou transita pelo acostamento sem situação de emergência?',
    options: [
      'Infração média com multa simples',
      'Infração leve sem pontos na CNH',
      'Infração gravíssima com fator multiplicador na multa',
      'Não é infração se o trânsito estiver parado',
    ],
    correctIndex: 2,
    explanation:
      'Transitar ou ultrapassar pelo acostamento é infração gravíssima com multa agravada e risco sério de atropelamento de pedestres e ciclistas.',
  },
  {
    id: 'LEG-035',
    module: 'legislacao',
    statement:
      'Ao visualizar esta placa de advertência e se aproximar de uma faixa de pedestres sem semáforo onde há pessoas aguardando para atravessar, o que determina o CTB?',
    signCode: 'A-32b',
    options: [
      'Manter a velocidade e sinalizar com luz alta para o pedestre esperar',
      'Dar preferência de passagem ao pedestre, reduzindo a velocidade e parando se necessário',
      'Usar a buzina contínua para liberar o corredor',
      'Desviar pela contramão para não precisar frear',
    ],
    correctIndex: 1,
    explanation:
      'Na faixa de pedestres sem semáforo, a preferência é absoluta do pedestre. O condutor deve reduzir e parar com segurança para a travessia.',
  },
  {
    id: 'LEG-036',
    module: 'legislacao',
    statement:
      'Sobre os documentos de porte obrigatório durante a condução de ônibus de transporte coletivo, o motorista deve portar:',
    options: [
      'Apenas o CPF e o título de eleitor',
      'CNH válida (física ou digital no aplicativo oficial) compatível com a categoria e o CRLV-e do veículo',
      'Somente o crachá da empresa',
      'Apenas o comprovante de residência atualizado',
    ],
    correctIndex: 1,
    explanation:
      'É obrigatório portar a CNH (física ou digital oficial com curso especializado averbado) e o documento de licenciamento do veículo (CRLV-e).',
  },
  {
    id: 'LEG-037',
    module: 'legislacao',
    statement:
      'Em um ônibus equipado com dispositivo de acessibilidade (elevador ou plataforma para cadeira de rodas), quando o equipamento apresentar defeito durante a operação, o motorista deve:',
    options: [
      'Continuar a viagem normalmente e ignorar o passageiro no ponto',
      'Comunicar imediatamente a empresa para substituição ou providência adequada conforme a norma operacional',
      'Pedir que dois passageiros carreguem a cadeira de rodas pelas escadas à força',
      'Desativar todas as portas restantes do veículo',
    ],
    correctIndex: 1,
    explanation:
      'A acessibilidade é obrigação legal do serviço de transporte coletivo; falhas no equipamento devem ser comunicadas de imediato para atendimento seguro.',
  },
  {
    id: 'LEG-038',
    module: 'legislacao',
    statement:
      'Em uma via de pista simples com duplo sentido sinalizada com linha amarela contínua no centro e a placa apresentada, qual é a regra para o motorista do ônibus?',
    signCode: 'R-7',
    options: [
      'Pode cruzar a linha amarela contínua para fazer ultrapassagens rápidas',
      'Não é permitido ultrapassar quando a faixa divisória do centro for amarela contínua',
      'Linha amarela contínua só vale para automóveis leves',
      'Ônibus pode cruzar linha contínua sempre que estiver atrasado',
    ],
    correctIndex: 1,
    explanation:
      'A linha longitudinal amarela contínua proíbe a ultrapassagem e a transposição de faixa para o sentido oposto.',
  },
  {
    id: 'LEG-039',
    module: 'legislacao',
    statement:
      'Em caso de envolvimento em acidente de trânsito com vítima, deixar o condutor de prestar ou providenciar socorro à vítima, podendo fazê-lo sem risco pessoal, configura:',
    options: [
      'Apenas uma infração administrativa leve',
      'Crime de trânsito previsto no Código de Trânsito Brasileiro',
      'Conduta permitida se o seguro da empresa cobrir os danos',
      'Direito do motorista para não atrasar a linha',
    ],
    correctIndex: 1,
    explanation:
      'Omissão de socorro em acidente com vítima é crime previsto no art. 304 do CTB, além de infração gravíssima se o condutor fugir do local.',
  },
  {
    id: 'LEG-040',
    module: 'legislacao',
    statement:
      'Em rodovias de pista simples fora do perímetro urbano, qual é a regra do CTB sobre o uso de farol baixo durante o dia para veículos pesados e ônibus?',
    options: [
      'É obrigatório manter os faróis baixos acesos durante o dia em rodovias de pista simples',
      'É proibido ligar qualquer farol durante o dia',
      'Só é obrigatório ligar farol depois das 20 horas',
      'Basta ligar o pisca-alerta durante toda a viagem',
    ],
    correctIndex: 0,
    explanation:
      'Pelo CTB, em rodovias de pista simples localizadas fora dos perímetros urbanos, os faróis baixos (ou DRL quando aplicável) devem permanecer acesos durante o dia.',
  },
];

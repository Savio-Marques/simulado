import type { Question } from '../../types/exam';

export const PRIMEIROS_SOCORROS_QUESTIONS: Question[] = [
  {
    id: 'SOC-001',
    module: 'primeiros_socorros',
    statement:
      'Após um acidente de trânsito envolvendo um ônibus, qual deve ser a primeira providência do motorista antes de atender qualquer ferido?',
    options: [
      'Retirar imediatamente todas as vítimas de dentro dos veículos pela janela',
      'Garantir a segurança do local: acionar o pisca-alerta, desligar a ignição se possível, sinalizar a via à distância segura e chamar o resgate especializado',
      'Jogar água fria sobre os feridos que estiverem conscientes',
      'Pedir aos passageiros que empurrem o veículo para fora da pista rapidamente',
    ],
    correctIndex: 1,
    explanation:
      'Sinalizar a via e garantir que não haja novos atropelamentos, incêndio ou choque elétrico vem sempre antes de qualquer atendimento às vítimas.',
  },
  {
    id: 'SOC-002',
    module: 'primeiros_socorros',
    statement:
      'Em uma emergência médica ou acidente de trânsito com vítimas feridas, para qual número de telefone gratuito se deve ligar para acionar o SAMU (Serviço de Atendimento Móvel de Urgência)?',
    options: [
      '190',
      '191',
      '192',
      '193',
    ],
    correctIndex: 2,
    explanation:
      'O telefone do SAMU é 192. O 193 é do Corpo de Bombeiros, o 190 da Polícia Militar e o 191 da Polícia Rodoviária Federal.',
  },
  {
    id: 'SOC-003',
    module: 'primeiros_socorros',
    statement:
      'Quando há pessoas presas nas ferragens, princípio de incêndio ou vazamento de combustível em um acidente, qual serviço deve ser acionado pelo número 193?',
    options: [
      'Defesa Civil municipal apenas',
      'Corpo de Bombeiros',
      'Guarda de Trânsito',
      'Polícia Rodoviária Federal',
    ],
    correctIndex: 1,
    explanation:
      'O Corpo de Bombeiros (193) é especializado em resgate em ferragens, combate a incêndios e controle de vazamentos perigosos.',
  },
  {
    id: 'SOC-004',
    module: 'primeiros_socorros',
    statement:
      'Qual é o telefone correto para acionar a Polícia Rodoviária Federal (PRF) em caso de acidente em rodovia federal?',
    options: [
      '190',
      '191',
      '192',
      '199',
    ],
    correctIndex: 1,
    explanation:
      'O número 191 aciona diretamente a Polícia Rodoviária Federal em todo o território nacional.',
  },
  {
    id: 'SOC-005',
    module: 'primeiros_socorros',
    statement:
      'Sobre a sinalização de um acidente em via de velocidade máxima de 80 km/h com pista seca e boa visibilidade, a que distância mínima aproximada do local do acidente o triângulo ou sinalização deve começar a ser colocada?',
    options: [
      'A apenas 5 metros atrás do veículo acidentado',
      'A pelo menos 80 metros (cerca de 80 passos largos) antes do acidente, dobrando a distância em chuva, neblina ou curva',
      'Bem encostado no para-choque traseiro do ônibus',
      'Apenas na frente do veículo, no sentido em que ele seguia',
    ],
    correctIndex: 1,
    explanation:
      'A regra prática segura é usar 1 metro (ou 1 passo longo) por km/h da velocidade da via, dobrando em curvas, noite, chuva ou neblina.',
  },
  {
    id: 'SOC-006',
    module: 'primeiros_socorros',
    statement:
      'Por que, como regra geral, NÃO se deve movimentar uma vítima de acidente de trânsito nem retirar o capacete de um motociclista ferido?',
    options: [
      'Porque pode sujar o uniforme do motorista',
      'Porque movimentar sem técnica pode agravar fraturas ocultas na coluna vertebral e causar lesão permanente na medula',
      'Porque o capacete ajuda a manter a febre alta',
      'Porque a lei proíbe tocar em qualquer vítima mesmo para estancar sangue',
    ],
    correctIndex: 1,
    explanation:
      'Lesões na coluna cervical ou dorsal podem piorar gravemente com movimentos inadequados. Só se remove vítima em risco iminente de morte (como fogo ou explosão).',
  },
  {
    id: 'SOC-007',
    module: 'primeiros_socorros',
    statement:
      'Um passageiro ou vítima envolvida em colisão pede água ou algum remédio para dor enquanto aguarda o socorro. Como você deve proceder?',
    options: [
      'Dar água com açúcar para acalmar a vítima imediatamente',
      'Não dar nenhum líquido, alimento ou medicamento; manter a vítima calma, aquecida e aguardar o resgate',
      'Oferecer um analgésico que esteja na mochila',
      'Dar café bem quente para evitar que desmaie',
    ],
    correctIndex: 1,
    explanation:
      'Dar líquidos ou alimentos pode provocar engasgo/asfixia e complicar uma eventual cirurgia de emergência. Nunca dê remédios ou água a vítimas de trauma.',
  },
  {
    id: 'SOC-008',
    module: 'primeiros_socorros',
    statement:
      'Diante de um ferimento com sangramento intenso (hemorragia externa) em um braço ou perna, qual é o procedimento inicial mais seguro?',
    options: [
      'Passar pó de café ou pomada diretamente sobre o corte',
      'Proteger as mãos (luvas ou saco plástico limpo) e fazer compressão direta firme sobre o ferimento com pano limpo ou gaze, sem ficar retirando o pano já encharcado',
      'Fazer um torniquete apertado com arame imediatamente em qualquer corte pequeno',
      'Lavar o ferimento com álcool ou óleo diesel',
    ],
    correctIndex: 1,
    explanation:
      'A compressão direta com pano limpo e proteção das mãos é o método mais seguro e eficaz para conter a maioria das hemorragias externas até a chegada do socorro.',
  },
  {
    id: 'SOC-009',
    module: 'primeiros_socorros',
    statement:
      'Um passageiro dentro do ônibus apresenta mal súbito (tontura intensa, falta de ar ou dor forte no peito). Qual é a conduta correta do motorista?',
    options: [
      'Continuar a viagem acelerando até o ponto final da linha',
      'Parar o ônibus em local seguro assim que possível, acionar o pisca-alerta, acalmar a pessoa, afrouxar roupas apertadas no pescoço e chamar o SAMU (192)',
      'Pedir para o passageiro descer sozinho na calçada imediatamente',
      'Obrigar o passageiro a caminhar de um lado ao outro do corredor',
    ],
    correctIndex: 1,
    explanation:
      'Estacionar em local seguro, manter ventilação e calma ao redor da pessoa e acionar o 192 passando informações claras garante atendimento rápido sem risco no trânsito.',
  },
  {
    id: 'SOC-010',
    module: 'primeiros_socorros',
    statement:
      'Em caso de queimadura térmica na pele de um passageiro (por líquido ou peça quente do motor), qual cuidado imediato é adequado?',
    options: [
      'Aplicar manteiga, creme dental ou clara de ovo no local',
      'Resfriar a área suavemente com água corrente limpa em temperatura ambiente e cobrir com pano limpo que não solte fiapos, sem estourar bolhas',
      'Furar todas as bolhas com agulha para aliviar a dor',
      'Colocar gelo direto encostado na pele queimada',
    ],
    correctIndex: 1,
    explanation:
      'Produtos caseiros contaminam a ferida e gelo queima ainda mais. Água limpa em temperatura ambiente e proteção com pano limpo são os cuidados recomendados.',
  },
  {
    id: 'SOC-011',
    module: 'primeiros_socorros',
    statement:
      'Caso ocorra princípio de fumaça ou fogo no ônibus com passageiros a bordo, qual é a ordem prioritária de ação do motorista?',
    options: [
      'Tentar chegar até a garagem primeiro antes de avisar os passageiros',
      'Parar o ônibus imediatamente em local seguro, desligar o motor/chave geral, abrir todas as portas e saídas de emergência e conduzir a evacuação calma dos passageiros para longe do veículo',
      'Fechar todas as janelas para abafar o cheiro de fumaça e seguir viagem',
      'Retirar primeiro as bagagens do bagageiro antes de abrir as portas para as pessoas',
    ],
    correctIndex: 1,
    explanation:
      'A vida dos passageiros tem prioridade absoluta: parar com segurança, desligar a energia do veículo, evacuar todos para um local seguro distante e acionar o 193.',
  },
  {
    id: 'SOC-012',
    module: 'primeiros_socorros',
    statement:
      'Ao ligar para o SAMU (192) ou Bombeiros (193) após um acidente, quais informações ajudam mais a equipe de socorro a chegar rápido e preparada?',
    options: [
      'Apenas dizer "venham rápido" e desligar o telefone',
      'Informar local exato com ponto de referência, número aproximado de vítimas, estado aparente (consciente, sangramento, preso) e eventuais riscos como fogo ou fio caído',
      'Passar somente a placa do ônibus e o nome da empresa',
      'Discutir de quem foi a culpa pelo acidente',
    ],
    correctIndex: 1,
    explanation:
      'Localização precisa, quantidade e gravidade das vítimas e perigos no local permitem enviar a ambulância ou equipe correta imediatamente.',
  },
  {
    id: 'SOC-013',
    module: 'primeiros_socorros',
    statement:
      'Ao encontrar uma pessoa desacordada, mas respirando normalmente e sem suspeita de trauma na coluna (por exemplo, após desmaio simples em local seguro), o que ajuda a manter a via aérea livre?',
    options: [
      'Deitar a pessoa de barriga para baixo com o rosto no chão',
      'Se não houver trauma, afrouxar roupas apertadas, manter ambiente ventilado e aguardar orientação médica; não jogar água no rosto nem sacudir a pessoa',
      'Sentar a pessoa à força e dar tapas no rosto para acordar',
      'Colocar uma colher ou dedo dentro da boca da pessoa',
    ],
    correctIndex: 1,
    explanation:
      'Nunca sacuda, jogue água ou coloque objetos na boca de quem desmaiou ou convulsiona. Mantenha local arejado, proteja a cabeça e acione atendimento médico.',
  },
  {
    id: 'SOC-014',
    module: 'primeiros_socorros',
    statement:
      'Se um passageiro tiver uma crise convulsiva dentro do ônibus, como proceder corretamente?',
    options: [
      'Segurar os braços e pernas com força e tentar abrir a boca para segurar a língua',
      'Parar o veículo em local seguro, afastar objetos que possam machucá-lo, apoiar algo macio sob a cabeça, virar suavemente de lado após os movimentos pararem e acionar o socorro médico',
      'Dar água com sal durante a convulsão',
      'Colocar o passageiro em pé imediatamente',
    ],
    correctIndex: 1,
    explanation:
      'Durante a convulsão não se imobiliza os movimentos nem se coloca nada na boca; protege-se a cabeça contra batidas e aguarda-se o fim da crise para posicionar de lado.',
  },
  {
    id: 'SOC-015',
    module: 'primeiros_socorros',
    statement:
      'Em um acidente com fios elétricos da rede pública caídos sobre a lataria do ônibus, qual é o comportamento seguro para o motorista e passageiros?',
    options: [
      'Descer logo do ônibus pisando normalmente no chão',
      'Permanecer dentro do ônibus sem tocar em partes metálicas externas, avisar todos para não descerem (salvo risco extremo de incêndio, quando se deve saltar com pés juntos sem tocar carroceria e chão juntos) e chamar Bombeiros/companhia elétrica',
      'Pegar um cabo de vassoura molhado para empurrar o fio',
      'Sair segurando no corrimão da porta com os pés no asfalto',
    ],
    correctIndex: 1,
    explanation:
      'Tocar simultaneamente no veículo energizado e no solo provoca choque elétrico fatal. Dentro do ônibus isolado pelos pneus há proteção até desligarem a rede.',
  },
  {
    id: 'SOC-016',
    module: 'primeiros_socorros',
    statement:
      'Sobre os extintores de incêndio presentes em veículos de transporte coletivo de passageiros, o que o motorista deve verificar com regularidade?',
    options: [
      'Se o ponteiro do manômetro está na faixa verde, dentro da validade, com lacre intacto e em local de fácil acesso',
      'Apenas se a cor vermelha da pintura está brilhante',
      'Se o extintor está trancado com cadeado dentro do bagageiro fechado',
      'Não precisa verificar porque extintor nunca perde validade ou pressão',
    ],
    correctIndex: 0,
    explanation:
      'Em veículos de transporte coletivo de passageiros o extintor continua obrigatório e deve estar carregado (ponteiro no verde), dentro do prazo e desobstruído.',
  },
  {
    id: 'SOC-017',
    module: 'primeiros_socorros',
    statement:
      'Na relação entre transporte coletivo e meio ambiente, por que a manutenção em dia do sistema de injeção, filtros e catalisador do ônibus a diesel é tão importante?',
    options: [
      'Porque evita fumaça preta excessiva, reduz gases tóxicos poluentes, economiza combustível e evita multa ambiental',
      'Porque faz o ônibus produzir mais barulho no escapamento',
      'Apenas para deixar o motor mais bonito na garagem',
      'Porque dispensa o uso de óleo lubrificante no motor',
    ],
    correctIndex: 0,
    explanation:
      'Veículo regulado queima combustível melhor, emite menos fuligem e gases nocivos à saúde respiratória da cidade e gera menos desgaste mecânico.',
  },
  {
    id: 'SOC-018',
    module: 'primeiros_socorros',
    statement:
      'Em ônibus modernos a diesel equipados com tecnologia Euro 5 / Euro 6, para que serve o reservatório de ARLA 32?',
    options: [
      'Para limpar o para-brisa durante chuvas fortes',
      'É um reagente que reduz drasticamente a emissão de óxidos de nitrogênio (NOx) poluentes nos gases do escapamento',
      'É um aditivo para aumentar a pressão dos pneus',
      'Serve para substituir o óleo diesel quando o tanque seca',
    ],
    correctIndex: 1,
    explanation:
      'O ARLA 32 atua no sistema catalítico (SCR) transformando gases tóxicos do escapamento em vapor d’água e nitrogênio inofensivo, protegendo o meio ambiente.',
  },
  {
    id: 'SOC-019',
    module: 'primeiros_socorros',
    statement:
      'Como o estilo de condução do motorista influencia diretamente a poluição do ar e o consumo de combustível do ônibus?',
    options: [
      'Acelerar fundo entre um semáforo e outro e frear em cima reduz a poluição',
      'Arrancadas suaves, troca de marchas na faixa correta de rotação, antecipação de paradas e evitar deixar o motor ligado parado à toa diminuem emissões e desgaste',
      'Andar sempre em marcha baixa com o motor gritando economiza diesel',
      'O modo de dirigir não interfere em nada nas emissões de fumaça',
    ],
    correctIndex: 1,
    explanation:
      'A direção econômica e defensiva reduz queima desnecessária de diesel, emissão de poluentes, ruído urbano e desgaste de freios e pneus.',
  },
  {
    id: 'SOC-020',
    module: 'primeiros_socorros',
    statement:
      'Sobre a poluição sonora no trânsito urbano, qual conduta do motorista ajuda a preservar a saúde auditiva e o bem-estar da população e dos passageiros?',
    options: [
      'Usar buzina prolongada sempre que o semáforo abrir ou em engarrafamentos',
      'Utilizar a buzina apenas em toques breves para advertência de segurança necessária e manter o escapamento e sistema do ônibus em boas condições',
      'Retirar o silencioso do escapamento para dar mais potência',
      'Deixar o som da cabine no volume máximo com janelas abertas à noite',
    ],
    correctIndex: 1,
    explanation:
      'Excesso de ruído causa estresse e perda auditiva. O CTB permite a buzina apenas em toques breves para evitar acidentes e fora de áreas silenciosas como hospitais.',
  },
  {
    id: 'SOC-021',
    module: 'primeiros_socorros',
    statement:
      'Qual atitude correta o motorista e os passageiros devem ter em relação ao lixo produzido dentro do ônibus durante o trajeto?',
    options: [
      'Jogar papéis e garrafas pela janela na rodovia',
      'Utilizar as lixeiras internas do veículo e descartar corretamente nos coletores dos terminais ou garagem',
      'Varriar todo o lixo para a calçada no ponto de parada',
      'Jogar latas no bueiro para a chuva levar',
    ],
    correctIndex: 1,
    explanation:
      'Resíduos lançados nas vias entopem bueiros causando enchentes, sujam a cidade e podem atingir motociclistas e pedestres.',
  },
  {
    id: 'SOC-022',
    module: 'primeiros_socorros',
    statement:
      'Ao ultrapassar um ciclista na via urbana ou rodovia com o ônibus, qual é a distância lateral mínima exigida pelo Código de Trânsito Brasileiro?',
    options: [
      '0,50 metro (meio metro)',
      '1,00 metro',
      '1,50 metro (um metro e meio)',
      '3,00 metros obrigatórios',
    ],
    correctIndex: 2,
    explanation:
      'O art. 201 do CTB obriga guardar a distância lateral mínima de 1,50 m ao passar ou ultrapassar bicicleta, evitando que o deslocamento de ar derrube o ciclista.',
  },
  {
    id: 'SOC-023',
    module: 'primeiros_socorros',
    statement:
      'No convívio social no trânsito, por que o transporte coletivo bem operado contribui positivamente para a cidade e o meio ambiente?',
    options: [
      'Porque um único ônibus bem utilizado substitui dezenas de carros individuais, reduzindo congestionamentos e emissões de poluentes por pessoa transportada',
      'Porque obriga todos a usarem carro próprio',
      'Porque aumenta o número de veículos parados nas ruas',
      'Porque impede pedestres de caminharem nas calçadas',
    ],
    correctIndex: 0,
    explanation:
      'Um ônibus transporta dezenas de cidadãos ocupando muito menos espaço viário e emitindo menos poluentes por passageiro do que automóveis individuais.',
  },
  {
    id: 'SOC-024',
    module: 'primeiros_socorros',
    statement:
      'Qual é a forma ambientalmente correta de destinar pneus velhos, baterias usadas e óleo lubrificante queimado trocados na manutenção dos ônibus?',
    options: [
      'Queimar os pneus em terrenos baldios e despejar o óleo no esgoto',
      'Encaminhar para coleta especializada, reciclagem ou descarte autorizado pelo fabricante/órgãos ambientais (logística reversa)',
      'Enterrar as baterias no quintal da garagem',
      'Jogar na beira de rios afastados da cidade',
    ],
    correctIndex: 1,
    explanation:
      'Óleo, baterias e pneus contaminam solo e água por décadas. A destinação ambientalmente correta em pontos licenciados é obrigatória por lei.',
  },
  {
    id: 'SOC-025',
    module: 'primeiros_socorros',
    statement:
      'Ao sinalizar um acidente em rodovia à noite, além do triângulo colocado a distância segura e do pisca-alerta ligado, o que ajuda outros motoristas a enxergar o bloqueio sem causar novos perigos?',
    options: [
      'Acender uma fogueira com pneus no meio da pista',
      'Usar lanternas ou materiais refletivos (como colete refletivo), mantendo as lanternas de posição do ônibus acesas e mantendo curiosos fora da pista',
      'Ficar deitado no asfalto sinalizando com as mãos no escuro',
      'Desligar todas as luzes do veículo para economizar bateria',
    ],
    correctIndex: 1,
    explanation:
      'Visibilidade noturna é crítica: jamais use fogo perto de veículos com combustível; lanternas, colete refletivo e lanternas de posição reduzem risco de novas batidas.',
  },
  {
    id: 'SOC-026',
    module: 'primeiros_socorros',
    statement:
      'Ao tentar controlar uma situação de pânico entre passageiros após uma colisão leve sem gravidade, qual atitude do motorista ajuda mais?',
    options: [
      'Gritar mais alto que todos e sair correndo do ônibus',
      'Falar com voz calma e firme, informar que o veículo está parado e seguro e orientar a saída organizada pela porta ou saída adequada',
      'Trancar todas as portas por fora com as pessoas lá dentro',
      'Ignorar os passageiros e ligar apenas para conhecidos pessoais',
    ],
    correctIndex: 1,
    explanation:
      'Em situações de susto, a postura serena do motorista acalma os passageiros e evita pisoteamentos ou quedas na escada ao descer.',
  },
  {
    id: 'SOC-027',
    module: 'primeiros_socorros',
    statement:
      'Em casos de suspeita de fratura em braço ou perna de uma vítima após acidente, qual conduta de primeiros socorros é correta até a chegada da ambulância?',
    options: [
      'Puxar o membro com força tentando "colocar o osso no lugar"',
      'Não tentar alinhar nem forçar o osso; manter o membro apoiado e imóvel na posição encontrada enquanto aguarda o atendimento especializado',
      'Massagear o local da fratura com óleo quente',
      'Pedir que a vítima tente caminhar para testar se quebrou mesmo',
    ],
    correctIndex: 1,
    explanation:
      'Tentar colocar osso fraturado no lugar pode romper nervos e vasos sanguíneos. O correto é evitar movimentos no membro afetado e esperar o socorro.',
  },
  {
    id: 'SOC-028',
    module: 'primeiros_socorros',
    statement:
      'Quando um veículo se envolve em acidente e há um objeto encravado no corpo da vítima (como um pedaço de vidro ou ferragem), o que o socorrista leigo NÃO deve fazer?',
    options: [
      'Chamar o SAMU (192) ou Bombeiros (193) imediatamente',
      'Retirar ou puxar o objeto encravado',
      'Manter a vítima imóvel e calma',
      'Proteger ao redor do objeto para que não se mova enquanto aguarda o resgate',
    ],
    correctIndex: 1,
    explanation:
      'Nunca se retira objeto encravado porque ele pode estar tamponando um vaso sanguíneo; puxá-lo pode causar hemorragia grave e fatal.',
  },
  {
    id: 'SOC-029',
    module: 'primeiros_socorros',
    statement:
      'Em um dia de calor intenso no Ceará, um passageiro idoso apresenta fraqueza, suor frio, tontura e palidez dentro do ônibus. Qual cuidado simples inicial ajuda enquanto solicita auxílio?',
    options: [
      'Fechar todas as janelas para manter o ar quente',
      'Acomodar o passageiro sentado ou deitado com conforto, garantir boa ventilação, acalmá-lo e acionar atendimento médico (192) se não melhorar rapidamente',
      'Dar bebida alcoólica para aquecer o corpo',
      'Obrigar o passageiro a descer imediatamente em lugar deserto',
    ],
    correctIndex: 1,
    explanation:
      'Ventilação, repouso confortável e acionamento rápido de suporte médico protegem o passageiro idoso em quadros de queda de pressão ou mal-estar pelo calor.',
  },
  {
    id: 'SOC-030',
    module: 'primeiros_socorros',
    statement:
      'Qual cuidado o motorista deve ter ao circular por ruas estreitas próximas a escolas, praças, feiras e hospitais em relação ao convívio social?',
    options: [
      'Manter a velocidade máxima permitida para liberar o trânsito logo',
      'Reduzir a velocidade, redobrar atenção com crianças e idosos, e evitar uso desnecessário de buzina',
      'Subir parcialmente na calçada para desviar de carros estacionados',
      'Piscar o farol alto para apressar quem atravessa na faixa',
    ],
    correctIndex: 1,
    explanation:
      'Áreas com grande circulação de pessoas vulneráveis exigem velocidade compatível, respeito ao silêncio junto a hospitais e prioridade total à vida.',
  },
  {
    id: 'SOC-031',
    module: 'primeiros_socorros',
    statement:
      'Por que o respeito às leis ambientais e de cidadania no trânsito reduz acidentes e conflitos na cidade?',
    options: [
      'Porque garante que apenas ônibus novos possam rodar',
      'Porque a cidade funciona com regras claras de convivência, proteção aos mais vulneráveis (pedestres, idosos, ciclistas) e menos agressividade nas ruas',
      'Porque elimina a necessidade de sinalização nas esquinas',
      'Porque permite dirigir sem prestar atenção nos semáforos',
    ],
    correctIndex: 1,
    explanation:
      'Trânsito seguro é resultado de cidadania: respeitar espaço alheio, proteger os mais frágeis e cuidar do ambiente urbano beneficia todos.',
  },
  {
    id: 'SOC-032',
    module: 'primeiros_socorros',
    statement:
      'Se precisar usar o extintor de incêndio do ônibus em um princípio de fogo, para onde o jato do extintor deve ser direcionado?',
    options: [
      'Para a ponta mais alta das chamas no ar',
      'Para a base do fogo (onde o incêndio começa), com movimentos em leque de um lado para o outro, mantendo distância segura',
      'Para o rosto de quem está perto para afastar a fumaça',
      'Direto contra o vidro da janela traseira',
    ],
    correctIndex: 1,
    explanation:
      'Apontar o jato para a base das chamas em movimento de leque combate diretamente o material que está queimando e torna o combate eficaz.',
  },
];

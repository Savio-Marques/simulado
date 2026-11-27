import type { Question } from '../../types/exam';

export const RELACIONAMENTO_QUESTIONS: Question[] = [
  {
    id: 'REL-001',
    module: 'relacionamento',
    statement:
      'Quando uma pessoa idosa ou com dificuldade de locomoção entra no ônibus, qual é a atitude correta do motorista antes de colocar o veículo em movimento?',
    options: [
      'Arrancar devagar enquanto o passageiro ainda caminha pelo corredor',
      'Aguardar o passageiro sentar-se ou segurar-se com segurança antes de sair com o ônibus',
      'Buzinar para que outros passageiros empurrem o idoso mais rápido',
      'Fechar a porta imediatamente mesmo com o passageiro no último degrau',
    ],
    correctIndex: 1,
    explanation:
      'Aguardar que idosos, gestantes e pessoas com mobilidade reduzida estejam bem acomodados antes de arrancar evita quedas graves dentro do veículo.',
  },
  {
    id: 'REL-002',
    module: 'relacionamento',
    statement:
      'Quais grupos possuem prioridade legal nos assentos reservados e no atendimento do transporte coletivo de passageiros?',
    options: [
      'Somente passageiros que pagam a passagem em dinheiro',
      'Apenas estudantes uniformizados',
      'Idosos, gestantes, lactantes, pessoas com deficiência, pessoas com criança de colo e pessoas obesas',
      'Apenas idosos acima de 75 anos',
    ],
    correctIndex: 2,
    explanation:
      'A legislação brasileira garante atendimento e assentos prioritários a pessoas idosas (60+), gestantes, lactantes, pessoas com deficiência, pessoas com criança de colo e obesos.',
  },
  {
    id: 'REL-003',
    module: 'relacionamento',
    statement:
      'Um passageiro entra no ônibus irritado e começa a reclamar em voz alta do atraso da linha. Como o motorista profissional deve reagir?',
    options: [
      'Responder no mesmo tom para mostrar autoridade no ônibus',
      'Frear bruscamente para assustar o passageiro',
      'Manter a calma, ouvir com respeito, dar uma explicação breve e continuar focado na segurança da direção',
      'Parar o ônibus e expulsar o passageiro do veículo imediatamente',
    ],
    correctIndex: 2,
    explanation:
      'O equilíbrio emocional evita que discussões cresçam e garante que o motorista não perca a atenção no trânsito.',
  },
  {
    id: 'REL-004',
    module: 'relacionamento',
    statement:
      'Ao perceber que um passageiro cadeirante aguarda no ponto de embarque, qual deve ser a postura do condutor?',
    options: [
      'Abrir apenas a porta traseira sem baixar a plataforma',
      'Passar direto para não atrasar o horário da tabela',
      'Alinhar o ônibus no ponto, acionar a plataforma elevatória ou rampa com calma e garantir o travamento seguro da cadeira',
      'Pedir que o cadeirante espere o próximo veículo mais vazio',
    ],
    correctIndex: 2,
    explanation:
      'O atendimento acessível é direito do cidadão e dever profissional do motorista de transporte coletivo, devendo ser feito com paciência e segurança.',
  },
  {
    id: 'REL-005',
    module: 'relacionamento',
    statement:
      'Uma pessoa com deficiência visual embarca no ônibus sozinha. Como o motorista pode ajudar da melhor forma?',
    options: [
      'Cumprimentar, informar com clareza onde está o assento livre e avisar quando chegar ao ponto solicitado',
      'Puxar o passageiro pelo braço sem avisar nada',
      'Ficar em silêncio para não constranger o passageiro',
      'Pedir que o passageiro permaneça em pé perto do para-brisa',
    ],
    correctIndex: 0,
    explanation:
      'Comunicação clara, educada e aviso antecipado do ponto de descida oferecem autonomia e segurança à pessoa com deficiência visual.',
  },
  {
    id: 'REL-006',
    module: 'relacionamento',
    statement:
      'Por que o relacionamento interpessoal faz parte obrigatória da formação do motorista de transporte coletivo?',
    options: [
      'Porque o motorista lida diariamente com centenas de pessoas diferentes e sua postura influencia a segurança e a qualidade do serviço público',
      'Para substituir o conhecimento das leis de trânsito',
      'Apenas para preencher horas do curso sem aplicação prática',
      'Para que o motorista possa cobrar valores extras de passagens',
    ],
    correctIndex: 0,
    explanation:
      'O motorista de transporte coletivo exerce uma função social importante, transportando vidas e atendendo diretamente o público.',
  },
  {
    id: 'REL-007',
    module: 'relacionamento',
    statement:
      'Um passageiro faz sinal para descer poucos metros depois do ponto de parada e pede para parar no meio de um cruzamento movimentado. O que fazer?',
    options: [
      'Explicar com educação que não é seguro nem permitido parar ali e realizar o desembarque no próximo ponto autorizado',
      'Abrir a porta com o ônibus ainda em movimento lento',
      'Ignorar o pedido sem dar nenhuma explicação',
      'Parar imediatamente no meio do cruzamento para agradar o cliente',
    ],
    correctIndex: 0,
    explanation:
      'A segurança e a lei vêm sempre em primeiro lugar; explicar o motivo com cortesia mantém o respeito sem colocar ninguém em perigo.',
  },
  {
    id: 'REL-008',
    module: 'relacionamento',
    statement:
      'Dois passageiros começam a discutir por causa de um assento no corredor. Qual é a melhor forma de o motorista agir?',
    options: [
      'Continuar dirigindo em alta velocidade e ignorar completamente',
      'Se necessário, estacionar o veículo em local seguro e solicitar respeito mútuo com firmeza e tranquilidade, lembrando a preferência legal quando aplicável',
      'Tomar partido gritando com um dos passageiros enquanto dirige',
      'Desligar as luzes internas do ônibus',
    ],
    correctIndex: 1,
    explanation:
      'Nunca se deve mediar conflitos olhando para trás com o ônibus em movimento. Parar em local seguro e falar com calma resolve melhor.',
  },
  {
    id: 'REL-009',
    module: 'relacionamento',
    statement:
      'Quando um passageiro pergunta uma informação sobre o itinerário ou onde deve descer para chegar a um hospital ou órgão público, como o condutor deve responder?',
    options: [
      'Reclamar que perguntas atrapalham o trabalho',
      'Dizer que não é obrigação sua saber nada sobre a cidade',
      'Apontar rapidamente sem olhar e mandar procurar no celular',
      'Responder de forma clara, objetiva e cordial, ou indicar quando não souber com precisão',
    ],
    correctIndex: 3,
    explanation:
      'Prestar informações corretas e educadas aumenta a confiança da população no transporte coletivo e evita confusões na hora da descida.',
  },
  {
    id: 'REL-010',
    module: 'relacionamento',
    statement:
      'Sobre a postura profissional e apresentação pessoal do motorista de transporte coletivo, é correto afirmar que:',
    options: [
      'Gírias e apelidos são recomendados para tratar idosos desconhecidos',
      'A aparência e a educação não interferem na percepção de segurança dos usuários',
      'É permitido dirigir sem camisa em dias muito quentes dentro do ônibus',
      'Higiene pessoal, uniforme limpo e trato respeitoso transmitem credibilidade e respeito aos passageiros',
    ],
    correctIndex: 3,
    explanation:
      'A apresentação cuidada e o tratamento respeitoso mostram profissionalismo e valorizam a profissão de motorista.',
  },
  {
    id: 'REL-011',
    module: 'relacionamento',
    statement:
      'Uma mãe embarca com um carrinho de bebê e sacolas e demonstra dificuldade para passar. Qual atitude demonstra empatia e profissionalismo?',
    options: [
      'Proibir o embarque de mães com crianças de colo nos horários de pico',
      'Reclamar pelo microfone que está demorando demais',
      'Aguardar com paciência até que ela e a criança estejam bem seguras antes de movimentar o veículo',
      'Acelerar para que ela se equilibre sozinha',
    ],
    correctIndex: 2,
    explanation:
      'Crianças pequenas e responsáveis com sacolas ficam muito vulneráveis a arrancadas bruscas; esperar alguns segundos evita acidentes.',
  },
  {
    id: 'REL-012',
    module: 'relacionamento',
    statement:
      'Em uma viagem rodoviária ou intermunicipal, caso ocorra um imprevisto na estrada que cause atraso (como interdição ou desvio), o que melhora o relacionamento com os passageiros?',
    options: [
      'Informar aos passageiros de maneira calma e transparente o motivo do atraso e as orientações de segurança',
      'Culpar os passageiros pelo peso das bagagens',
      'Manter todos sem informação até o fim da viagem',
      'Aumentar a velocidade acima do limite para compensar o tempo perdido',
    ],
    correctIndex: 0,
    explanation:
      'Comunicação transparente reduz a ansiedade e a irritação dos passageiros durante imprevistos na viagem.',
  },
  {
    id: 'REL-013',
    module: 'relacionamento',
    statement:
      'O que significa agir com empatia no atendimento aos usuários do transporte coletivo?',
    options: [
      'Colocar-se no lugar do outro, compreendendo limitações de idade, saúde ou pressa sem perder a firmeza na segurança',
      'Dirigir sempre devagar abaixo do fluxo para passear',
      'Conversar assuntos particulares durante todo o trajeto',
      'Fazer tudo o que qualquer passageiro mandar, mesmo contra a lei',
    ],
    correctIndex: 0,
    explanation:
      'Empatia é compreender a situação de quem viaja (especialmente idosos e pessoas em tratamento) mantendo os padrões de segurança.',
  },
  {
    id: 'REL-014',
    module: 'relacionamento',
    statement:
      'Um passageiro idoso apresenta o documento de gratuidade com dificuldade ou dúvida sobre como validar na catraca. Qual deve ser a conduta do motorista?',
    options: [
      'Mandar o idoso descer na hora por atrasar a fila',
      'Ironizar a falta de costume com o cartão eletrônico',
      'Acelerar o ônibus enquanto o idoso ainda segura os documentos na entrada',
      'Orientar com paciência e respeito como proceder na validação ou encaminhamento',
    ],
    correctIndex: 3,
    explanation:
      'Muitos passageiros idosos têm dificuldade com sistemas eletrônicos; orientação gentil e paciência fazem parte do bom atendimento.',
  },
  {
    id: 'REL-015',
    module: 'relacionamento',
    statement:
      'Durante o turno de trabalho, o motorista também se relaciona com colegas da empresa, fiscais e cobradores. Um ambiente de trabalho respeitoso entre a equipe:',
    options: [
      'Atrasa o cumprimento dos horários das linhas',
      'Não tem nenhuma relação com o bem-estar dos passageiros',
      'Só interessa ao setor de recursos humanos',
      'Diminui o estresse, melhora a comunicação operacional e torna a viagem mais segura e agradável',
    ],
    correctIndex: 3,
    explanation:
      'A boa convivência entre motorista, cobrador e fiscalização reduz falhas operacionais e o estresse no trânsito.',
  },
  {
    id: 'REL-016',
    module: 'relacionamento',
    statement:
      'Se um passageiro jovem estiver sentado no assento reservado para idosos e entrar uma pessoa idosa em pé, como o condutor deve proceder se solicitado?',
    options: [
      'Discutir aos gritos com todo o salão do ônibus',
      'Desligar o motor do ônibus e se recusar a continuar por uma hora',
      'Dizer que quem sentou primeiro tem mais direito',
      'Solicitar com educação que o assento prioritário seja cedido conforme a lei',
    ],
    correctIndex: 3,
    explanation:
      'Um pedido educado e objetivo ao microfone ou diretamente costuma resolver com tranquilidade, fazendo valer o direito ao assento prioritário.',
  },
  {
    id: 'REL-017',
    module: 'relacionamento',
    statement:
      'Por que é inadequado usar fones de ouvido ou assistir a vídeos enquanto atende os passageiros nos terminais ou durante o expediente de condução?',
    options: [
      'Não há problema algum usar fones nos dois ouvidos dirigindo',
      'Porque isola o motorista do ambiente, impede ouvir solicitações dos passageiros e sirenes de emergência e viola o CTB ao dirigir',
      'Apenas porque descarrega a bateria do telefone',
      'Porque passageiros também vão querer ouvir a música',
    ],
    correctIndex: 1,
    explanation:
      'Dirigir com fones nos ouvidos é infração de trânsito e prejudica a atenção às campainhas, sirenes e pedidos de informação.',
  },
  {
    id: 'REL-018',
    module: 'relacionamento',
    statement:
      'Quando o ônibus chega ao ponto final e um passageiro dormiu no banco do fundo, o que o condutor deve fazer ao conferir o veículo?',
    options: [
      'Trancar as portas com o passageiro dormindo lá dentro e ir embora',
      'Deixar o ônibus ligado em marcha lenta na garagem',
      'Gritar da porta de fora para assustá-lo',
      'Acordar o passageiro de forma educada e respeitosa, verificando se está bem e orientando para o desembarque seguro',
    ],
    correctIndex: 3,
    explanation:
      'Conferir o salão ao final da linha e acordar eventuais passageiros com cordialidade evita transtornos e garante a segurança de quem viajou.',
  },
  {
    id: 'REL-019',
    module: 'relacionamento',
    statement:
      'Um turista ou pessoa de outra cidade entra no ônibus muito confusa sobre qual linha pegar. Qual atitude fortalece a imagem do serviço público?',
    options: [
      'Rir da dúvida porque o letreiro está escrito na frente',
      'Orientar rapidamente se a linha atende ao destino desejado ou indicar qual linha correta procurar',
      'Fechar a porta antes de a pessoa terminar a frase',
      'Cobrar a passagem mesmo sabendo que o ônibus vai para o lado contrário',
    ],
    correctIndex: 1,
    explanation:
      'Orientar quem não conhece o trajeto evita prejuízo ao passageiro e demonstra educação cívica e profissionalismo.',
  },
  {
    id: 'REL-020',
    module: 'relacionamento',
    statement:
      'No controle das emoções ao volante (inteligência emocional), quando outro motorista fecha o ônibus no trânsito urbano, o condutor profissional deve:',
    options: [
      'Perseguir o outro veículo para dar um susto e mostrar quem é mais forte',
      'Manter a calma, evitar revides, frear com suavidade para proteger os passageiros e seguir o trajeto',
      'Parar o ônibus atravessado na via para tirar satisfação',
      'Usar a buzina sem parar por vários quarteirões',
    ],
    correctIndex: 1,
    explanation:
      'Revides no trânsito colocam dezenas de passageiros inocentes em risco. O motorista profissional prioriza vidas, nunca disputas de ego.',
  },
  {
    id: 'REL-021',
    module: 'relacionamento',
    statement:
      'Ao abrir e fechar as portas do ônibus em paradas cheias, qual cuidado humano e operacional o condutor precisa ter?',
    options: [
      'Olhar atentamente os retrovisores e sensores antes de fechar as portas, garantindo que ninguém fique preso entre as folhas',
      'Fechar as portas rapidamente no cronômetro sem olhar o espelho interno',
      'Abrir a porta antes de parar completamente o ônibus',
      'Deixar as portas abertas durante todo o percurso para ventilar',
    ],
    correctIndex: 0,
    explanation:
      'Conferir os espelhos e a área das portas antes de fechá-las evita prensamento de braços, bolsas, muletas e quedas na calçada.',
  },
  {
    id: 'REL-022',
    module: 'relacionamento',
    statement:
      'Sobre a comunicação verbal do motorista com o passageiro, qual estilo de fala evita mal-entendidos?',
    options: [
      'Falar baixo demais olhando para o chão',
      'Usar tom de voz firme, calmo, pausado e respeitoso, olhando brevemente quando o veículo estiver parado',
      'Usar tom sarcástico quando alguém faz uma pergunta simples',
      'Responder apenas com gestos apressados da mão',
    ],
    correctIndex: 1,
    explanation:
      'Fala clara, pausada e cordial é facilmente entendida por pessoas de todas as idades e transmite confiança.',
  },
  {
    id: 'REL-023',
    module: 'relacionamento',
    statement:
      'Qual é a conduta ética diante de objetos esquecidos por passageiros dentro do ônibus (carteiras, documentos, celulares ou óculos)?',
    options: [
      'Entregar ao primeiro passageiro que estiver descendo',
      'Jogar pela janela no ponto final',
      'Recolher e entregar no setor de achados e perdidos ou à supervisão da empresa para devolução ao dono',
      'Ficar com o objeto como recompensa pelo trabalho',
    ],
    correctIndex: 2,
    explanation:
      'Encaminhar objetos esquecidos ao setor responsável da empresa é dever ético e demonstra honestidade e respeito ao usuário.',
  },
  {
    id: 'REL-024',
    module: 'relacionamento',
    statement:
      'Ao perceber que um passageiro está tendo dificuldade para alcançar o sinal de parada (campainha) por estar com as mãos ocupadas ou mobilidade reduzida, o motorista deve:',
    options: [
      'Exigir que o passageiro caminhe até a frente do ônibus com ele em movimento',
      'Ignorar porque a campainha não tocou',
      'Atender à solicitação verbal ou gestual pelo espelho e parar no ponto indicado com tranquilidade',
      'Acelerar para chegar logo ao terminal final',
    ],
    correctIndex: 2,
    explanation:
      'Atenção pelo retrovisor interno e sensibilidade ao pedido verbal garantem o desembarque seguro sem forçar o passageiro a caminhar com o ônibus andando.',
  },
];

import type { Question } from '../../types/exam';

export const DIRECAO_DEFENSIVA_QUESTIONS: Question[] = [
  {
    id: 'DEF-001',
    module: 'direcao_defensiva',
    statement:
      'O que significa dirigir de forma defensiva no transporte coletivo de passageiros?',
    options: [
      'Dirigir sempre o mais devagar possível em qualquer rodovia',
      'Antecipar situações de risco e conduzir de modo a evitar acidentes, mesmo diante de erros de outros motoristas ou condições ruins',
      'Frear bruscamente apenas quando o acidente já estiver inevitável',
      'Confiar exclusivamente nos freios modernos do ônibus e manter velocidade alta',
    ],
    correctIndex: 1,
    explanation:
      'Direção defensiva é prever riscos com antecedência para evitar acidentes, compensando falhas de terceiros e adversidades da via.',
  },
  {
    id: 'DEF-002',
    module: 'direcao_defensiva',
    statement:
      'Por serem veículos longos e altos, os ônibus possuem grandes áreas ao redor sem visibilidade direta pelos espelhos (pontos cegos). Como o motorista deve lidar com eles?',
    options: [
      'Ignorar as laterais porque veículos menores sempre enxergam o ônibus',
      'Ajustar bem todos os espelhos (inclusive os auxiliares convexos), sinalizar antes de manobrar e fazer a conversão devagar observando os lados',
      'Dirigir apenas olhando para a frente para não se distrair com os retrovisores',
      'Buzinar continuamente em toda esquina antes de virar',
    ],
    correctIndex: 1,
    explanation:
      'Ajuste correto dos retrovisores principais e auxiliares, seta antecipada e checagem cuidadosa reduzem o risco nos pontos cegos laterais e traseiros.',
  },
  {
    id: 'DEF-003',
    module: 'direcao_defensiva',
    statement:
      'Ao fazer uma curva fechada à direita com um ônibus longo (grande distância entre eixos), qual cuidado com o raio de giro é essencial?',
    options: [
      'Fechar a curva colado ao meio-fio desde o início',
      'Avançar um pouco antes de girar o volante (abrir ligeiramente dentro da faixa segura) e vigiar o espelho direito para o eixo traseiro não subir na calçada nem atingir ciclistas',
      'Entrar na curva em alta velocidade para o ônibus deslizar melhor',
      'Olhar somente para o espelho esquerdo durante toda a conversão',
    ],
    correctIndex: 1,
    explanation:
      'Em veículos longos, as rodas traseiras percorrem um caminho mais fechado por dentro da curva. Abrir o espaço necessário e vigiar o espelho direito evita atropelamentos e colisões no meio-fio.',
  },
  {
    id: 'DEF-004',
    module: 'direcao_defensiva',
    statement:
      'Sobre o "balanço traseiro" (a parte da carroceria que fica atrás do eixo traseiro do ônibus), que risco ocorre quando o motorista faz uma curva muito fechada saindo de uma vaga ou ponto?',
    options: [
      'A traseira do ônibus varre para o lado oposto da curva, podendo atingir carros ao lado ou postes na calçada',
      'O motor desliga automaticamente durante a curva',
      'As rodas dianteiras perdem totalmente o contato com o chão',
      'Não há deslocamento lateral algum na traseira de ônibus longos',
    ],
    correctIndex: 0,
    explanation:
      'Quanto maior o balanço traseiro, mais a traseira "joga" para o lado de fora da curva. O motorista precisa observar ambos os espelhos ao sair de paradas e fazer curvas.',
  },
  {
    id: 'DEF-005',
    module: 'direcao_defensiva',
    statement:
      'Quando um ônibus circula com lotação completa de passageiros e bagagens, o que acontece com a distância necessária para frear e parar totalmente?',
    options: [
      'Diminui porque o peso extra ajuda a segurar o veículo',
      'Aumenta consideravelmente devido ao maior peso total em movimento, exigindo distância de seguimento maior',
      'Permanece exatamente igual à de um ônibus vazio',
      'Só muda se a estrada for de subida',
    ],
    correctIndex: 1,
    explanation:
      'Mais peso significa maior energia em movimento (inércia). Um ônibus carregado precisa de mais metros para parar completamente.',
  },
  {
    id: 'DEF-006',
    module: 'direcao_defensiva',
    statement:
      'Em descidas longas e íngremes (serras e ladeiras), qual é a técnica correta de direção defensiva para não perder os freios por superaquecimento?',
    options: [
      'Descer em ponto morto ("banguela") segurando só no pedal de freio',
      'Engrenar uma marcha reduzida antes da descida para usar o freio motor (e retarder, se houver), aplicando o freio de serviço apenas em toques suaves',
      'Desligar a chave do motor para economizar combustível',
      'Manter o pé pressionado no pedal do freio do início ao fim da serra',
    ],
    correctIndex: 1,
    explanation:
      'Usar o freio contínuo em descidas aquece lonas/pastilhas e causa falha total (fading). O freio motor em marcha reduzida segura o ônibus com segurança.',
  },
  {
    id: 'DEF-007',
    module: 'direcao_defensiva',
    statement:
      'Por que nunca se deve descer uma ladeira com o câmbio em neutro ("ponto morto") em um veículo de transporte coletivo?',
    options: [
      'Porque aumenta demais o consumo de combustível na marcha lenta',
      'Porque o veículo fica solto, sem freio motor, ganha velocidade rápido e pode ocorrer falha nos freios ou perda de pressão do sistema pneumático',
      'Porque o painel apaga todas as luzes externas',
      'Porque o volante trava imediatamente quando está em neutro',
    ],
    correctIndex: 1,
    explanation:
      'Na "banguela", o ônibus não tem retenção do motor, exige demais do freio de serviço e coloca em risco a vida de todos os passageiros.',
  },
  {
    id: 'DEF-008',
    module: 'direcao_defensiva',
    statement:
      'Em um ônibus urbano que transporta passageiros em pé, como o motorista deve realizar acelerações, curvas e frenagens?',
    options: [
      'Com movimentos bruscos e rápidos para cumprir o horário',
      'De forma suave, progressiva e antecipada, evitando trancos que derrubam os passageiros no salão',
      'Frenando em cima da hora nos semáforos para aproveitar a velocidade',
      'Fazendo curvas rápidas sem reduzir a marcha',
    ],
    correctIndex: 1,
    explanation:
      'Frenagens e arrancadas suaves protegem quem está em pé ou caminhando pelo corredor contra quedas dentro do ônibus.',
  },
  {
    id: 'DEF-009',
    module: 'direcao_defensiva',
    statement:
      'O que é a aquaplanagem (ou hidroplanagem) durante uma chuva forte?',
    options: [
      'É quando os limpadores de para-brisa param de funcionar por falta de água',
      'É a perda de contato dos pneus com o asfalto devido a uma camada de água entre o pneu e a pista, fazendo o veículo deslizar sem controle',
      'É o embaçamento apenas do vidro traseiro do ônibus',
      'É o aquecimento normal dos pneus em dias quentes',
    ],
    correctIndex: 1,
    explanation:
      'Quando há água acumulada e velocidade alta (ou pneus gastos), o pneu não consegue escoar a água e flutua sobre ela, perdendo direção e freio.',
  },
  {
    id: 'DEF-010',
    module: 'direcao_defensiva',
    statement:
      'Se o veículo começar a aquaplanar sobre uma poça d’água na rodovia, o que o motorista deve fazer imediatamente?',
    options: [
      'Pisar fundo no freio e virar o volante todo para o acostamento',
      'Tirar o pé do acelerador suavemente, segurar firme o volante em linha reta e não frear bruscamente até os pneus retomarem aderência',
      'Acelerar ao máximo para atravessar a poça mais rápido',
      'Puxar o freio de estacionamento com força',
    ],
    correctIndex: 1,
    explanation:
      'Frear bruscamente ou girar o volante na aquaplanagem faz o veículo rodar. Reduzir devagar tirando o pé do acelerador devolve o contato dos pneus com o solo.',
  },
  {
    id: 'DEF-011',
    module: 'direcao_defensiva',
    statement:
      'Ao enfrentar neblina intensa ou fumaça densa na pista, qual procedimento com as luzes do ônibus está correto?',
    options: [
      'Ligar o farol alto para tentar enxergar mais longe',
      'Reduzir a velocidade e manter o farol baixo ligado (além do farol de neblina, se equipado), evitando o farol alto que reflete na névoa',
      'Apagar todos os faróis e usar apenas o pisca-alerta em movimento',
      'Acelerar para sair rápido do trecho com neblina',
    ],
    correctIndex: 1,
    explanation:
      'Na neblina, o farol alto reflete nas gotículas de água e cria uma parede branca que cega o motorista. O correto é usar farol baixo e reduzir bastante a velocidade.',
  },
  {
    id: 'DEF-012',
    module: 'direcao_defensiva',
    statement:
      'Durante uma viagem noturna, outro veículo vem no sentido contrário com o farol alto ligado, causando ofuscamento. Como você deve agir?',
    options: [
      'Ligar também o farol alto na direção dele para revidar',
      'Desviar o olhar levemente para a faixa branca da borda direita da pista e reduzir a velocidade até recuperar a visão',
      'Fechar os olhos por alguns segundos e manter o pé no acelerador',
      'Jogar o ônibus para a contramão para assustar o outro condutor',
    ],
    correctIndex: 1,
    explanation:
      'Olhar para a linha da direita orienta o caminho sem receber o facho de luz diretamente na retina, evitando o ofuscamento prolongado.',
  },
  {
    id: 'DEF-013',
    module: 'direcao_defensiva',
    statement:
      'Observe a placa de advertência apresentada. Qual comportamento defensivo o motorista de ônibus deve adotar ao vê-la?',
    signCode: 'A-18',
    options: [
      'Acelerar para passar rápido pela elevação sem sentir balanço',
      'Reduzir a velocidade com antecedência para transpor a saliência ou lombada suavemente, protegendo os passageiros e a suspensão',
      'Mudar para a contramão para desviar da lombada',
      'Usar apenas o freio de mão em cima da lombada',
    ],
    correctIndex: 1,
    explanation:
      'A placa A-18 adverte sobre saliência ou lombada adiante. Passar em alta velocidade arremessa passageiros no fundo do ônibus e danifica o veículo.',
  },
  {
    id: 'DEF-014',
    module: 'direcao_defensiva',
    statement:
      'Diante desta placa amarela em uma rodovia serrana, qual atitude preventiva é a mais indicada para o transporte coletivo?',
    signCode: 'A-20a',
    options: [
      'Colocar o câmbio em ponto morto para economizar diesel',
      'Reduzir a marcha antecipadamente e utilizar o freio motor ao iniciar o declive acentuado',
      'Aumentar a velocidade para ganhar embalo na descida',
      'Desligar o ar-condicionado e acelerar forte',
    ],
    correctIndex: 1,
    explanation:
      'A placa A-20a indica Declive Acentuado. Em veículos pesados de passageiros, reduzir a marcha antes da descida garante controle e preserva os freios.',
  },
  {
    id: 'DEF-015',
    module: 'direcao_defensiva',
    statement:
      'Ao avistar a placa de advertência mostrada, qual cuidado redobrado o motorista deve tomar?',
    signCode: 'A-28',
    options: [
      'Manter a velocidade máxima porque o asfalto acabou de ser lavado',
      'Reduzir a velocidade e aumentar a distância do veículo da frente, evitando freadas e manobras bruscas na pista escorregadia',
      'Ultrapassar todos os veículos lentos antes da curva',
      'Ziguezaguear para secar os pneus no asfalto',
    ],
    correctIndex: 1,
    explanation:
      'A placa A-28 alerta para Pista Escorregadia. Com menor atrito dos pneus, a distância de parada aumenta e manobras bruscas provocam derrapagens.',
  },
  {
    id: 'DEF-016',
    module: 'direcao_defensiva',
    statement:
      'Qual cuidado específico esta placa de advertência exige do condutor de ônibus nas vias urbanas e rodoviárias?',
    signCode: 'A-30a',
    options: [
      'Buzinar sem parar para espantar bicicletas da rua',
      'Reduzir a velocidade e redobrar a atenção à presença de ciclistas compartilhando ou cruzando a via',
      'Estacionar na ciclovia para embarque rápido',
      'Passar rente aos ciclistas para ocupar menos faixa',
    ],
    correctIndex: 1,
    explanation:
      'A placa A-30a alerta para trânsito de ciclistas. Veículos grandes geram deslocamento de ar e têm pontos cegos; manter distância lateral e baixa velocidade protege vidas.',
  },
  {
    id: 'DEF-017',
    module: 'direcao_defensiva',
    statement:
      'O que significa a placa de advertência exibida e qual ação preventiva ela pede?',
    signCode: 'A-33a',
    options: [
      'Obras na pista; mudar de faixa rapidamente',
      'Área escolar; reduzir bastante a velocidade e manter máxima atenção para travessia súbita de crianças e estudantes',
      'Pista estreita; ligar o farol alto',
      'Proibido embarque; seguir sem parar nos pontos',
    ],
    correctIndex: 1,
    explanation:
      'A placa A-33a indica Área Escolar. Crianças podem atravessar de forma imprevisível entre carros estacionados, exigindo velocidade reduzida.',
  },
  {
    id: 'DEF-018',
    module: 'direcao_defensiva',
    statement:
      'Em condições normais de pista seca, qual é a maneira prática recomendada na direção defensiva para medir a distância de segurança em relação ao veículo da frente (regra dos segundos)?',
    options: [
      'Manter distância fixa de apenas 1 metro do para-choque da frente',
      'Escolher um ponto fixo na via e contar pelo menos 2 segundos (aumentando para 4 segundos ou mais para ônibus carregado ou pista molhada) após o veículo da frente passar por ele',
      'Aproximar-se o máximo possível para o outro motorista abrir caminho',
      'Olhar apenas para o velocímetro e esquecer o carro da frente',
    ],
    correctIndex: 1,
    explanation:
      'A regra dos segundos adapta a distância à velocidade. Em ônibus e caminhões ou sob chuva, recomenda-se ampliar para 4 segundos ou mais para dar tempo de reação e frenagem.',
  },
  {
    id: 'DEF-019',
    module: 'direcao_defensiva',
    statement:
      'Como funciona corretamente a técnica de frenagem em um veículo equipado com freios ABS em uma emergência?',
    options: [
      'Bombear o pedal várias vezes soltando e pisando rápido',
      'Pisar firme e contínuo no pedal de freio sem soltar, mantendo controle da direção enquanto o sistema evita o travamento das rodas',
      'Puxar apenas o freio estacionário junto com a embreagem',
      'Desligar a ignição antes de pisar no freio',
    ],
    correctIndex: 1,
    explanation:
      'No sistema ABS, o próprio módulo eletrônico pulsa o freio para impedir o travamento das rodas. O motorista deve manter pressão firme e contínua no pedal.',
  },
  {
    id: 'DEF-020',
    module: 'direcao_defensiva',
    statement:
      'Qual é o risco principal de dirigir um veículo pesado com pneus abaixo da calibragem recomendada pelo fabricante?',
    options: [
      'Aumenta a durabilidade da borracha e reduz o consumo de diesel',
      'Aumenta o aquecimento dos pneus (risco de estouro), prejudica a estabilidade nas curvas, alonga a frenagem e eleva o consumo de combustível',
      'Deixa o volante muito mais leve e seguro na chuva',
      'Não causa nenhum efeito se o percurso for curto',
    ],
    correctIndex: 1,
    explanation:
      'Pneu murcho dobra demais as laterais, esquenta rapidamente, pode estourar com o veículo carregado e compromete a dirigibilidade.',
  },
  {
    id: 'DEF-021',
    module: 'direcao_defensiva',
    statement:
      'Antes de sair com o ônibus da garagem, por que o motorista deve verificar os manômetros de pressão de ar do sistema de freios pneumáticos?',
    options: [
      'Apenas para checar se o ar-condicionado do salão está gelando',
      'Porque sem a pressão de ar mínima de trabalho os freios podem não atuar ou as molas de emergência podem travar as rodas no meio da via',
      'Para saber a quantidade de combustível no tanque',
      'Porque os limpadores de para-brisa funcionam somente com pressão máxima de ar',
    ],
    correctIndex: 1,
    explanation:
      'Nos ônibus com freio a ar, é indispensável aguardar o enchimento dos reservatórios até a pressão recomendada e checar ausência de vazamentos antes de sair.',
  },
  {
    id: 'DEF-022',
    module: 'direcao_defensiva',
    statement:
      'Quais são os primeiros sinais físicos de fadiga e sonolência que indicam que o motorista precisa parar para descansar?',
    options: [
      'Visão mais nítida e aumento rápido dos reflexos',
      'Pálpebras pesadas, bocejos frequentes, dificuldade para manter a faixa, ardência nos olhos e esquecimento dos últimos quilômetros percorridos',
      'Sensação de frio apenas nos pés',
      'Vontade de conversar normalmente com colegas',
    ],
    correctIndex: 1,
    explanation:
      'Ao notar bocejos constantes, olhos pesados ou lapsos de atenção, não confie em truques como abrir a janela ou tomar café: pare em local seguro e descanse.',
  },
  {
    id: 'DEF-023',
    module: 'direcao_defensiva',
    statement:
      'Qual é a relação entre o uso de medicamentos (como alguns antialérgicos, calmantes ou remédios para gripe) e a direção defensiva?',
    options: [
      'Medicamentos vendidos sem receita nunca interferem na direção',
      'Muitos remédios causam sonolência, tontura ou lentidão nos reflexos; o motorista deve ler a bula e consultar médico antes de dirigir',
      'Tomar dois comprimidos juntos elimina o sono na estrada',
      'Remédios só afetam motoristas de automóveis pequenos',
    ],
    correctIndex: 1,
    explanation:
      'Vários medicamentos causam sedação ou reflexos lentos. Nunca dirija transporte coletivo sob efeito de remédios que comprometam a atenção.',
  },
  {
    id: 'DEF-024',
    module: 'direcao_defensiva',
    statement:
      'Se uma das rodas direitas do ônibus cair para fora do asfalto em um acostamento com degrau (desnível acentuado), qual é a manobra segura para retornar à pista?',
    options: [
      'Puxar o volante bruscamente para a esquerda na mesma velocidade',
      'Segurar firme o volante, tirar o pé do acelerador para reduzir bastante a velocidade e só retornar à pista em ângulo suave quando estiver lento e seguro',
      'Pisar no freio com força total enquanto vira para a esquerda',
      'Acelerar ao máximo para subir o degrau com força',
    ],
    correctIndex: 1,
    explanation:
      'Subir um degrau de asfalto em velocidade alta puxa o veículo de golpe para a pista contrária, causando tombamento ou colisão frontal. Reduzir antes salva vidas.',
  },
  {
    id: 'DEF-025',
    module: 'direcao_defensiva',
    statement:
      'Os ônibus têm centro de gravidade mais alto do que automóveis comuns. Como isso influencia a condução em curvas e desvios rápidos?',
    options: [
      'Permite fazer curvas fechadas em velocidade bem maior que carros de passeio',
      'Aumenta a tendência de inclinação lateral e tombamento se o condutor entrar em curvas ou fizer desvios em velocidade excessiva',
      'Elimina completamente a força centrífuga nas curvas',
      'Só importa quando o ônibus está parado no terminal',
    ],
    correctIndex: 1,
    explanation:
      'Por serem altos e pesados, ônibus exigem redução da velocidade antes da curva e nunca dentro dela de forma brusca.',
  },
  {
    id: 'DEF-026',
    module: 'direcao_defensiva',
    statement:
      'Em um trecho alagado onde a água cobre a rua, qual atitude protege os passageiros e o veículo?',
    options: [
      'Atravessar em alta velocidade para empurrar a água para os lados',
      'Avaliar a profundidade pela referência de guias/veículos à frente; se for segura, atravessar em marcha reduzida e rotação constante, e depois testar suavemente os freios',
      'Parar no ponto mais fundo da enchente e desligar o motor',
      'Entrar na água sem enxergar buracos ou bueiros abertos',
    ],
    correctIndex: 1,
    explanation:
      'Se a água ultrapassar a altura segura (meio da roda/entrada de ar), não arrisque. Se for rasa e segura, passe devagar em marcha baixa e seque os freios com toques leves ao sair.',
  },
  {
    id: 'DEF-027',
    module: 'direcao_defensiva',
    statement:
      'Quais são os três elementos básicos que formam o chamado "trinômio da segurança" (ou fatores do acidente de trânsito) analisados na direção defensiva?',
    options: [
      'Combustível, pneu e óleo lubrificante',
      'Condutor (homem), veículo e via/meio ambiente',
      'Semáforo, faixa e guarda de trânsito',
      'Velocímetro, buzina e farol',
    ],
    correctIndex: 1,
    explanation:
      'Os sinistros de trânsito envolvem falhas ligadas ao fator humano (condutor), ao veículo e às condições da via/ambiente — sendo o fator humano o principal.',
  },
  {
    id: 'DEF-028',
    module: 'direcao_defensiva',
    statement:
      'Na direção defensiva, quais são os cinco elementos fundamentais que o motorista deve praticar continuamente?',
    options: [
      'Velocidade, pressa, buzina, força e coragem',
      'Conhecimento, atenção, previsão, decisão e habilidade',
      'Apenas sorte, experiência e força nos braços',
      'Desconfiança, aceleração, ultrapassagem, freio e luz alta',
    ],
    correctIndex: 1,
    explanation:
      'Conhecer as leis e o veículo, manter atenção difusa, prever riscos, decidir rápido e ter habilidade para executar a manobra formam os 5 pilares da direção defensiva.',
  },
  {
    id: 'DEF-029',
    module: 'direcao_defensiva',
    statement:
      'Por que a manutenção preventiva dos limpadores de para-brisa, desembaçador e iluminação é parte da direção defensiva?',
    options: [
      'Apenas para passar na vistoria anual sem multa',
      'Porque ver bem e ser visto com clareza em chuva, noite ou neblina é indispensável para antecipar perigos',
      'Porque ajuda o motor a rodar mais rápido nas subidas',
      'Porque substitui o uso dos espelhos retrovisores',
    ],
    correctIndex: 1,
    explanation:
      'Visibilidade comprometida por palhetas gastas, vidro embaçado ou lâmpadas queimadas reduz drasticamente o tempo de reação do condutor.',
  },
  {
    id: 'DEF-030',
    module: 'direcao_defensiva',
    statement:
      'Ao se aproximar de um cruzamento com sinal verde aberto para o seu ônibus, qual postura defensiva ainda é necessária?',
    options: [
      'Acelerar no máximo porque o sinal verde garante que ninguém vai cruzar',
      'Manter atenção para os dois lados e tirar o pé do acelerador pronto para frear caso algum veículo avance o sinal vermelho',
      'Olhar apenas para a campainha do salão',
      'Fechar os olhos para a via transversal',
    ],
    correctIndex: 1,
    explanation:
      'Ter a preferência legal não impede colisões se outro motorista avançar o sinal. Conferir o cruzamento antes de entrar salva vidas.',
  },
  {
    id: 'DEF-031',
    module: 'direcao_defensiva',
    statement:
      'Quando uma ambulância, viatura policial ou carro de bombeiros se aproxima atrás do ônibus com sirene e giroflex ligados, como o motorista deve agir?',
    options: [
      'Acelerar na frente da ambulância para abrir caminho',
      'Sinalizar com a seta, deslocar o ônibus com segurança para a direita e reduzir ou parar se necessário para deixar a passagem livre',
      'Frear bruscamente no meio da faixa sem olhar o espelho',
      'Ignorar porque veículo pesado tem prioridade',
    ],
    correctIndex: 1,
    explanation:
      'Veículos de emergência em atendimento têm livre circulação e prioridade. Dar passagem pela direita com sinalização e calma evita bloqueios e colisões.',
  },
  {
    id: 'DEF-032',
    module: 'direcao_defensiva',
    statement:
      'Em um ônibus equipado com câmera ou sensor de ré, como o motorista deve realizar uma manobra de marcha a ré em garagem ou terminal?',
    options: [
      'Confiar apenas no sensor e acelerar rápido para trás',
      'Combinar espelhos, câmera/sensor e, sempre que possível, contar com o auxílio visual de um orientador fora do veículo, em velocidade bem baixa',
      'Fazer a manobra sem ligar o pisca-alerta nem conferir atrás',
      'Olhar somente para frente enquanto engata a ré',
    ],
    correctIndex: 1,
    explanation:
      'Mesmo com câmera e sensores, pontos cegos atrás do ônibus são grandes. Manobrar bem devagar e com ajuda de colega quando disponível previne atropelamentos.',
  },
  {
    id: 'DEF-033',
    module: 'direcao_defensiva',
    statement:
      'Ao dirigir à noite em rodovia sob chuva fina, por que a visibilidade fica muito pior quando veículos vêm em sentido contrário?',
    options: [
      'Porque a água sobre o asfalto e no para-brisa espalha a luz dos faróis, criando reflexos que dificultam enxergar faixas, buracos e pedestres',
      'Porque os faróis ficam mais fortes quando molhados',
      'Porque a velocidade do vento empurra a luz para trás',
      'Não há diferença entre dirigir à noite no seco ou na chuva',
    ],
    correctIndex: 0,
    explanation:
      'Água no vidro e no asfalto refrata a luz dos faróis contrários. Reduzir a velocidade e manter limpadores e desembaçador em ordem é essencial.',
  },
  {
    id: 'DEF-034',
    module: 'direcao_defensiva',
    statement:
      'Um pneu dianteiro do ônibus fura ou estoura repentinamente em movimento. Qual é a reação mais segura do condutor?',
    options: [
      'Pisar imediatamente com força total no pedal de freio',
      'Segurar firme o volante com as duas mãos mantendo a trajetória, tirar o pé do acelerador gradualmente e só frear de leve quando o veículo perder velocidade e estiver controlado',
      'Virar o volante rapidamente para o lado oposto do pneu furado',
      'Engatar a marcha ré ainda em movimento',
    ],
    correctIndex: 1,
    explanation:
      'Frear bruscamente com pneu dianteiro estourado puxa a direção violentamente e pode causar capotamento. Segurar firme o volante e desacelerar suavemente mantém o controle.',
  },
  {
    id: 'DEF-035',
    module: 'direcao_defensiva',
    statement:
      'O que é "colisão com o veículo de trás" e como o motorista de transporte coletivo pode ajudar a evitá-la?',
    options: [
      'É inevitável e nunca depende do motorista da frente',
      'Pode ser evitada sinalizando com antecedência antes de parar nos pontos, mantendo luzes de freio funcionais e evitando freadas bruscas desnecessárias',
      'Basta apagar as lanternas traseiras para o motorista de trás prestar mais atenção',
      'Deve-se parar no meio da faixa sem pisca nem seta',
    ],
    correctIndex: 1,
    explanation:
      'Avisar suas intenções com seta antecipada, frear progressivamente e manter luzes traseiras limpas e funcionando dá tempo para quem vem atrás reagir.',
  },
  {
    id: 'DEF-036',
    module: 'direcao_defensiva',
    statement:
      'Qual postura deve ter o motorista profissional ao dirigir em vias urbanas com trânsito intenso de motocicletas entre as faixas ("corredor")?',
    options: [
      'Mudar de faixa rapidamente sem dar seta para fechar os motociclistas',
      'Antes de qualquer mudança de faixa ou conversão, sinalizar com antecedência e checar os espelhos duas vezes para não fechar motocicletas nos pontos cegos',
      'Andar colado na faixa ao lado para não passar moto alguma',
      'Abrir a janela para discutir com os motociclistas',
    ],
    correctIndex: 1,
    explanation:
      'Motocicletas se aproximam rápido pelos pontos cegos laterais. Seta antecipada, checagem dupla no retrovisor e manobra suave evitam acidentes graves.',
  },
];

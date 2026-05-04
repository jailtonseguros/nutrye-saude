import { Produto } from './types';

export const PRODUTOS: Produto[] = [
  // 1. Linha Performance e Energia
  {
    id: 'creatina-po',
    nome: 'Creatina Mono Hidratada (Pó)',
    categoria: 'Performance',
    descricao: 'Suplemento de alta pureza para ganho de força, explosão muscular e auxílio na hipertrofia.',
    beneficio: 'Aumento de força e desempenho físico.',
    linkMercadoLivre: 'https://www.mercadolivre.com.br/creatina-pura-monohidratada-nutrytech-em-po-300g-para-treino/p/MLB53410133?pdp_filters=item_id%3AMLB6194956822&matt_tool=38524122#origin=share&sid=share&wid=MLB6194956822',
    imagem: 'https://i.ibb.co/RGpsV304/creatina-po.jpg',
    detalhes: 'Creatina em Pó Nutrye\n\nPrincipal Benefício: Força e ganho de massa.\nDiferencial Nutrye: Matéria-prima filtrada de alta pureza.\n\nA Creatina Mono Hidratada em pó da Nutrye é um suplemento de alta pureza, ideal para atletas que buscam ganho de força e explosão muscular. Sua fórmula garante rápida absorção e auxílio direto na hipertrofia. Recomendação de uso: 3g ao dia ou conforme orientação profissional.'
  },
  {
    id: 'creatina-mastigavel-uva',
    nome: 'Creatina Mastigável (Uva)',
    categoria: 'Performance',
    descricao: 'O suplemento mais estudado do mundo agora em comprimidos mastigáveis sabor uva. Força e explosão.',
    beneficio: 'Força e ganho de massa.',
    linkMercadoLivre: 'https://www.mercadolivre.com.br/creatina-masitgavel-da-nutrytech--90-comprimido-sabor-uva/up/MLBU3926098613?pdp_filters=seller_id%3A2004278488#polycard_client=search-desktop&be_origin=backend&search_layout=grid&position=27&type=product&tracking_id=dded666c-5d88-4e9d-af0e-bce0a677f27f&wid=MLB4643804083&sid=search',
    imagem: 'https://i.ibb.co/3YTpyRL3/creatina-mastigavel-uva.jpg',
    detalhes: 'Creatina Mastigável Nutrytech\n\nPrincipal Benefício: Praticidade e ganho de força.\nDiferencial Nutrye: Sabor delicioso de uva e absorção otimizada.\n\nA Creatina Mastigável da Nutrytech oferece a eficácia da creatina mono hidratada em um formato inovador. Ideal para consumir em qualquer lugar, garantindo sua dose diária de força sem necessidade de água ou coqueteleira.'
  },
  {
    id: 'creatina-capsula',
    nome: 'Creatina em Cápsula',
    categoria: 'Performance',
    descricao: 'Praticidade para o ganho de massa muscular e recuperação pós-treino em formato de cápsulas.',
    beneficio: 'Ganho de massa e praticidade.',
    linkMercadoLivre: 'https://www.mercadolivre.com.br/creatina-pura-monohidratada-em-240-capsulas/up/MLBU3747892497?pdp_filters=item_id%3AMLB4440440431&matt_tool=38524122#origin=share&sid=share&wid=MLB4440440431',
    imagem: 'https://i.ibb.co/Y4SfrSBb/creatina-capsula.jpg',
    detalhes: 'Creatina em Cápsula Nutrye\n\nPrincipal Benefício: Força e ganho de massa.\nDiferencial Nutrye: Matéria-prima filtrada em formato prático.\n\nA versão em cápsulas da nossa Creatina Mono Hidratada oferece a mesma pureza e eficácia do pó, com a praticidade necessária para o dia a dia. Ideal para quem possui uma rotina agitada e não abre mão da suplementação de qualidade para ganho de massa.'
  },
  {
    id: 'burst-caffeine',
    nome: 'Burst Caffeine',
    categoria: 'Performance',
    descricao: 'Termogênico focado em foco e energia. Contém cafeína, taurina e cromo. Ideal para pré-treino.',
    beneficio: 'Foco mental e energia prolongada.',
    linkMercadoLivre: 'https://www.mercadolivre.com.br/burst-caffein-cafeina-cromo-taurina-60-comprimidos-sabor-cafe/p/MLB37692970?pdp_filters=item_id%3AMLB6196188702&matt_tool=38524122#origin=share&sid=share&wid=MLB6196188702',
    imagem: 'https://i.ibb.co/LDvR5RBz/burst-caffeine.jpg',
    detalhes: 'Burst Caffeine Nutrye\n\nPrincipal Benefício: Energia explosiva e foco.\nDiferencial Nutrye: Combinação estratégica de Cafeína + Taurina + Cromo.\n\nBurst Caffeine é um termogênico avançado que proporciona foco mental aguçado e energia prolongada, sendo o parceiro ideal para treinos intensos ou dias que exigem máxima produtividade.'
  },
  {
    id: 'maca-peruana',
    nome: 'Maca Peruana',
    categoria: 'Performance',
    descricao: 'Revigorante natural que auxilia na vitalidade, disposição física e equilíbrio do organismo.',
    beneficio: 'Aumento de vigor e equilíbrio hormonal.',
    linkMercadoLivre: 'https://www.mercadolivre.com.br/maca-peruana-nutrye-suplemento-alimentar-em-po-150g-sem-sabor-vegano/p/MLB62543040?pdp_filters=item_id%3AMLB6196060552&matt_tool=38524122#origin=share&sid=share&wid=MLB6196060552',
    imagem: 'https://i.ibb.co/n9N5q5C/maca-peruana.jpg',
    detalhes: 'Maca Peruana Nutrye\n\nPrincipal Benefício: Vitalidade e vigor físico.\nDiferencial Nutrye: 100% Pura e Natural.\n\nA Maca Peruana Nutrye é um revigorante natural milenar. Auxilia no aumento da vitalidade, melhora da disposição física e no equilíbrio hormonal do organismo. Produto 100% puro e vegano.'
  },

  {
    id: 'feno-grego',
    nome: 'Feno Grego',
    categoria: 'Performance',
    descricao: 'Auxilia no suporte hormonal natural, vitalidade e melhora da libido e disposição física.',
    beneficio: 'Suporte hormonal e vitalidade.',
    linkMercadoLivre: 'https://www.mercadolivre.com.br/feno-grego-ellev-suplemento-60-comprimidos-sabor-sem-sabor/p/MLB52844549?pdp_filters=item_id%3AMLB4456799175&matt_tool=38524122#origin=share&sid=share&wid=MLB4456799175',
    imagem: 'https://i.ibb.co/Kjvc93y1/feno-grego.jpg',
    detalhes: 'O Feno Grego Ellev auxilia no suporte hormonal de forma natural. É indicado para quem busca melhorar a vitalidade, a libido e a disposição física geral, promovendo um bem-estar integral.'
  },
  {
    id: 'triptofano',
    nome: 'Triptofano',
    categoria: 'Bem-Estar',
    descricao: 'Aminoácido essencial que auxilia na produção de serotonina, melhorando o humor e o sono.',
    beneficio: 'Melhora do humor e sono.',
    linkMercadoLivre: 'https://lista.mercadolivre.com.br/triptofano-nutrye',
    imagem: 'https://i.ibb.co/G3rSKPTv/triptofano.jpg',
    detalhes: 'L-Triptofano Nutrye\n\nPrincipal Benefício: Equilíbrio emocional e sono.\nDiferencial Nutrye: Alta concentração e pureza.\n\nO Triptofano é um aminoácido essencial que atua como precursor da serotonina e melatonina. Auxilia no combate ao estresse, melhora do humor e na qualidade reparadora do sono.'
  },
  {
    id: 'complexo-b',
    nome: 'Complexo B',
    categoria: 'Saúde',
    descricao: 'Mix completo de vitaminas do complexo B para energia, metabolismo e saúde do sistema nervoso.',
    beneficio: 'Energia e metabolismo.',
    linkMercadoLivre: 'https://lista.mercadolivre.com.br/complexo-b-nutrye',
    imagem: 'https://i.ibb.co/HpDqffJD/complexo-b.jpg',
    detalhes: 'Complexo B Nutrye\n\nPrincipal Benefício: Metabolismo energético.\nDiferencial Nutrye: Dose equilibrada de todas as vitaminas B.\n\nAs vitaminas do complexo B são fundamentais para a transformação dos alimentos em energia. Auxiliam no funcionamento do sistema nervoso, saúde da pele e na manutenção da vitalidade diária.'
  },
  {
    id: 'renoderme',
    nome: 'Renoderme',
    categoria: 'Estética',
    descricao: 'Fórmula avançada para rejuvenescimento da pele, fortalecimento de unhas e brilho dos cabelos.',
    beneficio: 'Beleza e rejuvenescimento.',
    linkMercadoLivre: 'https://lista.mercadolivre.com.br/renoderme-nutrye',
    imagem: 'https://i.ibb.co/7tjKb8vH/renoderme.jpg',
    detalhes: 'Renoderme Nutrye\n\nPrincipal Benefício: Saúde de pele, unhas e cabelos.\nDiferencial Nutrye: Mix de nutrientes de alta biodisponibilidade.\n\nRenoderme é a solução completa para quem busca cuidar da estética de dentro para fora. Rica em biotina, zinco e antioxidantes, combate o envelhecimento precoce e garante força para unhas e cabelos.'
  },


  // 2. Linha Saúde Essencial
  {
    id: 'vitalli-az',
    nome: 'Vitalli AZ',
    categoria: 'Saúde',
    descricao: 'Polivitamínico e polimineral completo com 23 nutrientes. Pastilhas mastigáveis sabor morango.',
    beneficio: 'Suporte nutricional completo.',
    linkMercadoLivre: 'https://www.mercadolivre.com.br/polivitaminico-e-polimineral-nutrye-vitaliaz-60-comprimidos-sem-sabor/p/MLB52969259?pdp_filters=item_id%3AMLB4456953793&matt_tool=38524122#origin=share&sid=share&wid=MLB4456953793',
    imagem: 'https://i.ibb.co/1YQ3BKVF/vitalli-az.jpg',
    detalhes: 'Vitalli AZ é um polivitamínico e polimineral completo com 23 nutrientes essenciais. Em formato de pastilhas mastigáveis sabor morango, oferece uma forma deliciosa e prática de garantir o suporte nutricional diário.'
  },
  {
    id: 'omega-3',
    nome: 'Ômega 3 (e Mastigável)',
    categoria: 'Saúde',
    descricao: 'Óleo de peixe rico em EPA e DHA. Auxilia na saúde do coração, cérebro e controle do colesterol.',
    beneficio: 'Saúde cardiovascular e cerebral.',
    linkMercadoLivre: 'https://lista.mercadolivre.com.br/omega-3-nutrye',
    imagem: 'https://i.ibb.co/93ZgqDZX/omega-3.jpg',
    detalhes: 'Nosso Ômega 3 possui o selo MEG-3 de pureza premium, garantindo um óleo de peixe livre de metais pesados. Rico em EPA e DHA, é fundamental para a saúde cardiovascular, cerebral e manutenção de níveis saudáveis de colesterol.'
  },
  {
    id: 'omega-3-mastigavel',
    nome: 'Ômega 3 Mastigável',
    categoria: 'Saúde',
    descricao: 'A praticidade do Ômega 3 em pastilhas mastigáveis. Mesma pureza e benefícios do óleo tradicional.',
    beneficio: 'Saúde cardiovascular com praticidade.',
    linkMercadoLivre: 'https://lista.mercadolivre.com.br/omega-3-mastigavel-nutrye',
    imagem: 'https://i.ibb.co/8DyjV9zT/omega-3-mastigavel.jpg',
    detalhes: 'O Ômega 3 Mastigável Nutrye oferece uma alternativa prática para quem tem dificuldade em engolir cápsulas. Com sabor agradável, mantém a alta concentração de EPA e DHA necessária para o suporte cerebral e cardiovascular.'
  },
  {
    id: 'vitamina-b12',
    nome: 'Vitamina B12 Mastigável',
    categoria: 'Saúde',
    descricao: 'Suplemento mastigável sabor morango. Essencial para o sistema nervoso e formação de células vermelhas.',
    beneficio: 'Energia e sistema nervoso.',
    linkMercadoLivre: 'https://www.mercadolivre.com.br/vitamina-b12-nutrye-60-comprimidos-mastigaveis-sabor-morango-vegano/p/MLB55945338?pdp_filters=item_id%3AMLB4456881663&matt_tool=38524122#origin=share&sid=share&wid=MLB4456881663',
    imagem: 'https://i.ibb.co/bR28F51c/vitamina-b12.jpg',
    detalhes: 'A Vitamina B12 Mastigável Nutrye é essencial para o metabolismo energético e o funcionamento do sistema nervoso. Com sabor morango, é uma opção prática e eficiente para prevenir carências nutricionais.'
  },
  {
    id: 'vitamina-b12-vegana',
    nome: 'Vitamina B12 Vegana + Ácido Fólico',
    categoria: 'Saúde',
    descricao: 'Fórmula vegana com 90 comprimidos. Auxilia na saúde do sistema nervoso e na imunidade.',
    beneficio: 'Saúde nervosa e imunidade.',
    linkMercadoLivre: 'https://www.mercadolivre.com.br/vitamina-b12-vegana-nutrye-comprimidos-acido-folico-90-unidades/p/MLB51112571?pdp_filters=item_id%3AMLB6215899032&matt_tool=38524122#origin=share&sid=share&wid=MLB6215899032',
    imagem: 'https://i.ibb.co/bR28F51c/vitamina-b12-vegana.jpg',
    detalhes: 'Desenvolvida especialmente para o público vegano, esta fórmula combina Vitamina B12 com Ácido Fólico. Auxilia na formação de células vermelhas do sangue e no fortalecimento do sistema imunológico.'
  },
  {
    id: 'vitamina-d3-k2',
    nome: 'Vitamina D3 + K2',
    categoria: 'Saúde',
    descricao: 'Combinação poderosa para o fortalecimento dos ossos e suporte ao sistema imunológico.',
    beneficio: 'Ossos fortes e imunidade.',
    linkMercadoLivre: 'https://www.mercadolivre.com.br/vitamina-d3-2000ui-nutrye-60-capsulas-rapido-sabor-sem-sabor/p/MLB53540901?pdp_filters=item_id%3AMLB6217193108&matt_tool=38524122#origin=share&sid=share&wid=MLB6217193108',
    imagem: 'https://i.ibb.co/zH44HVnF/vitamina-d3-k2.jpg',
    detalhes: 'A sinergia entre Vitamina D3 e K2 é fundamental para a saúde óssea, garantindo que o cálcio seja direcionado corretamente para os ossos. Além disso, oferece suporte vital ao sistema imunológico.'
  },
  {
    id: 'vitamina-d3',
    nome: 'Vitamina D3',
    categoria: 'Saúde',
    descricao: 'Suporte essencial para a imunidade e fixação de cálcio, fundamental para saúde óssea.',
    beneficio: 'Imunidade e ossos.',
    linkMercadoLivre: 'https://lista.mercadolivre.com.br/vitamina-d3-nutrye',
    imagem: 'https://i.ibb.co/GQRpXQ2W/vitamina-d3.jpg',
    detalhes: 'Vitamina D3 Nutrye\n\nPrincipal Benefício: Saúde óssea e Imunidade.\nDiferencial Nutrye: Alta dosagem por cápsula.\n\nA Vitamina D3 é vital para o correto funcionamento do sistema imunológico e para a absorção de cálcio e fósforo, mantendo dentes e ossos saudáveis.'
  },
  {
    id: 'vitamina-a',
    nome: 'Vitamina A + Betacaroteno',
    categoria: 'Saúde',
    descricao: 'Essencial para a saúde da visão, pele e sistema imunológico. Poderosa ação antioxidante.',
    beneficio: 'Saúde da visão e pele.',
    linkMercadoLivre: 'https://www.mercadolivre.com.br/vitamina-a-betacaroteno-nutrye-60-capsulas/up/MLBU3825002580?pdp_filters=item_id%3AMLB4502317619&matt_tool=38524122#origin=share&sid=share&wid=MLB4502317619',
    imagem: 'https://i.ibb.co/LdMVTnkP/vitamina-a.jpg',
    detalhes: 'A Vitamina A com Betacaroteno Nutrye é um potente antioxidante. Essencial para a manutenção da saúde visual e da integridade da pele, além de auxiliar no bom funcionamento das defesas do corpo.'
  },
  {
    id: 'ferro-c',
    nome: 'Ferro + C',
    categoria: 'Saúde',
    descricao: 'Suplemento de ferro associado à vitamina C para melhor absorção. Auxilia na prevenção da anemia e no transporte de oxigênio.',
    beneficio: 'Combate à anemia e mais energia.',
    linkMercadoLivre: 'https://lista.mercadolivre.com.br/ferro-c-nutrye',
    imagem: 'https://i.ibb.co/bR28F51c/ferro-c.jpg',
    detalhes: 'Ferro + C Nutrye combina o mineral ferro com Vitamina C, que potencializa sua absorção. Ideal para prevenir anemias ferroprivas e garantir o transporte eficiente de oxigênio para todos os tecidos.'
  },
  {
    id: 'zinco-c',
    nome: 'Zinco + C',
    categoria: 'Saúde',
    descricao: 'Combinação essencial para o fortalecimento do sistema imunológico e ação antioxidante no organismo.',
    beneficio: 'Imunidade fortalecida.',
    linkMercadoLivre: 'https://lista.mercadolivre.com.br/zinco-c-nutrye',
    imagem: 'https://i.ibb.co/1YQ3BKVF/zinco-c.jpg',
    detalhes: 'Zinco + C é a dupla dinâmica para a imunidade. O zinco atua em centenas de reações enzimáticas, enquanto a Vitamina C oferece proteção antioxidante, mantendo o organismo protegido contra agentes externos.'
  },
  {
    id: 'colageno-tipo-2',
    nome: 'Colágeno Tipo 2',
    categoria: 'Saúde',
    descricao: 'Auxilia na manutenção da função articular e na regeneração das cartilagens, proporcionando mais mobilidade.',
    beneficio: 'Saúde das articulações.',
    linkMercadoLivre: 'https://www.mercadolivre.com.br/colageno-tipo-2-30-capsulas-osteolig-nutrye-sabor-neutro/p/MLB37138835?pdp_filters=item_id%3AMLB4268381205&matt_tool=38524122#origin=share&sid=share&wid=MLB4268381205',
    imagem: 'https://i.ibb.co/8L1q4Jgp/colageno-tipo-2.jpg',
    detalhes: 'Osteolig (Colágeno Tipo II) Nutrye\n\nPrincipal Benefício: Saúde das articulações e ossos.\nDiferencial Nutrye: Colágeno Tipo II de alta absorção.\n\nO Colágeno Tipo 2 Nutrye (Osteolig) é específico para a saúde das articulações. Auxilia na redução de dores articulares e na regeneração das cartilagens, sendo ideal para atletas e pessoas com desgaste articular.'
  },
  {
    id: 'coenzima-q10',
    nome: 'Coenzima Q10',
    categoria: 'Saúde',
    descricao: 'Potente antioxidante que auxilia na produção de energia celular e na saúde cardiovascular.',
    beneficio: 'Energia e saúde do coração.',
    linkMercadoLivre: 'https://www.mercadolivre.com.br/coq10-nutrye-100mg-suplemento-natural-sem-sabor-60-comprimidos-vegano/p/MLB62692439?pdp_filters=item_id%3AMLB4456878193&matt_tool=38524122#origin=share&sid=share&wid=MLB4456878193',
    imagem: 'https://i.ibb.co/tMxF3Pjs/coenzima-q10.jpg',
    detalhes: 'A Coenzima Q10 (CoQ10) é essencial para a produção de energia nas mitocôndrias. Além de ser um potente antioxidante, oferece suporte crucial para a saúde cardiovascular e vitalidade geral.'
  },



  // 3. Linha Bem-Estar e Equilíbrio
  {
    id: 'ora-pro-nobis',
    nome: 'Ora-pro-nóbis',
    categoria: 'Bem-Estar',
    descricao: 'Superalimento natural (Pó 200g). Rico em proteínas vegetais e fibras, excelente para o trato digestivo.',
    beneficio: 'Saúde digestiva e proteínas vegetais.',
    linkMercadoLivre: 'https://www.mercadolivre.com.br/orapronobis-cha-natural-instantaneo-nutrye-po-soluvel-200g/up/MLBU3772645710?pdp_filters=item_id%3AMLB6216356450&matt_tool=38524122#origin=share&sid=share&wid=MLB6216356450',
    imagem: 'https://i.ibb.co/WvdbWnVY/ora-pro-nobis.jpg',
    detalhes: 'Ora-pro-nóbis Nutrye é um superalimento em pó (200g). Conhecida como "carne de pobre" por seu alto teor proteico, é rica em fibras e minerais, sendo excelente para a saúde digestiva e suporte nutricional vegano.'
  },
  {
    id: 'magne3',
    nome: 'Magne3 (Magnésio)',
    categoria: 'Bem-Estar',
    descricao: 'Mix de 3 tipos de magnésio. Auxilia no relaxamento muscular, redução de cãibras e saúde do sistema nervoso.',
    beneficio: 'Relaxamento e saúde nervosa.',
    linkMercadoLivre: 'https://www.mercadolivre.com.br/magnesio-quelato-citrato-malato-bisglicinato-nutrye-90-comp/up/MLBU3762705393?pdp_filters=item_id%3AMLB6215900078&matt_tool=38524122#origin=share&sid=share&wid=MLB6215900078',
    imagem: 'https://i.ibb.co/1YQ3BKVF/magne3.jpg',
    detalhes: 'Magune3 (Magnésio) Nutrye\n\nPrincipal Benefício: Fim das cãibras e relaxamento.\nDiferencial Nutrye: Mix de 3 tipos de Magnésio.\n\nMagune3 combina três formas de magnésio para máxima absorção. Auxilia no relaxamento muscular, prevenção de cãibras e no bom funcionamento do sistema nervoso, promovendo um descanso mais profundo.'
  },
  {
    id: 'oleo-coco',
    nome: 'Óleo de Coco Extra Virgem',
    categoria: 'Bem-Estar',
    descricao: 'Cápsulas de 1000mg. Auxilia na redução da circunferência abdominal e oferece energia rápida.',
    beneficio: 'Gerenciamento de medidas e energia.',
    linkMercadoLivre: 'https://www.mercadolivre.com.br/1-oleo-de-coco-extra-virgem-90-capsulas-1000mg/p/MLB52313507?pdp_filters=seller_id%3A2004278488#polycard_client=search-desktop&be_origin=backend&search_layout=grid&position=13&type=product&tracking_id=14d96b3f-8727-464f-9b44-3efb361974aa&wid=MLB6647032388&sid=search',
    imagem: 'https://i.ibb.co/MDCQbdpM/oleo-coco.jpg',
    detalhes: 'Óleo de Coco Nutrye\n\nPrincipal Benefício: Metabolismo e saciedade.\nDiferencial Nutrye: Extra virgem prensado a frio.\n\nO Óleo de Coco Extra Virgem em cápsulas é uma fonte rica em TCM (Triglicerídeos de Cadeia Média). Auxilia no emagrecimento, melhora a imunidade e fornece uma fonte de energia limpa para o corpo e mente.'
  },
  {
    id: 'lactase',
    nome: 'Lactase',
    categoria: 'Bem-Estar',
    descricao: 'Enzima digestiva que auxilia na digestão da lactose, permitindo o consumo de lácteos sem desconfortos.',
    beneficio: 'Digestão de lácteos.',
    linkMercadoLivre: 'https://www.mercadolivre.com.br/suplemento-lactase-nutrye-10000-fcc-30-capsulas/up/MLBU3764558455?pdp_filters=item_id%3AMLB4456531357&matt_tool=38524122#origin=share&sid=share&wid=MLB4456531357',
    imagem: 'https://i.ibb.co/20W4pt8J/lactase.jpg',
    detalhes: 'A enzima Lactase Nutrye permite que pessoas com intolerância à lactose desfrutem de lácteos sem desconfortos abdominais, gases ou inchaço. Alta concentração para uma digestão eficiente.'
  },
  {
    id: 'repouzz',
    nome: 'Repouzz',
    categoria: 'Bem-Estar',
    descricao: 'Formulado especificamente para auxiliar na indução do sono e garantir um descanso reparador.',
    beneficio: 'Sono reparador.',
    linkMercadoLivre: 'https://www.mercadolivre.com.br/melatonina-triptofano-vitamina-b6-zinco-90-comprimidos-nutrye/p/MLB56636838?pdp_filters=item_id%3AMLB4456554001&matt_tool=38524122#origin=share&sid=share&wid=MLB4456554001',
    imagem: 'https://i.ibb.co/tGDM4rn/repouzz.jpg',
    detalhes: 'Repouzz é nossa fórmula exclusiva para o sono. Combina ingredientes que auxiliam na indução rápida do sono e na manutenção de um descanso reparador, para que você acorde renovado.'
  },


  // 4. Linha Estética e Longevidade
  {
    id: 'curmapro',
    nome: 'Curmapro',
    categoria: 'Estética',
    descricao: 'Extrato de Cúrcuma, Própolis Verde e Gengibre. Ação anti-inflamatória potente e reforço para a imunidade.',
    beneficio: 'Anti-inflamatório e imunidade.',
    linkMercadoLivre: 'https://www.mercadolivre.com.br/curmapro-curcumaextrato-de-propolisgengibrelaranja-moro/up/MLBU3748549507?pdp_filters=item_id%3AMLB4441791973&matt_tool=38524122#origin=share&sid=share&wid=MLB4441791973',
    imagem: 'https://i.ibb.co/Y4xnDG4s/curmapro.jpg',
    detalhes: 'Curmapro Nutrye\n\nPrincipal Benefício: Anti-inflamatório natural.\nDiferencial Nutrye: Cúrcuma + Própolis + Gengibre.\n\nCurmapro é uma fórmula anti-inflamatória potente que combina Cúrcuma, Própolis Verde e Gengibre. Auxilia no fortalecimento da imunidade e no combate a processos inflamatórios crônicos de forma natural.'
  },
  {
    id: 'vinoage',
    nome: 'VinoAge',
    categoria: 'Estética',
    descricao: 'Extrato de semente de uva rico em polifenóis, com poderosa ação antioxidante contra o envelhecimento precoce.',
    beneficio: 'Ação antioxidante.',
    linkMercadoLivre: 'https://www.mercadolivre.com.br/vinoage-semente-de-uva-vitamina-c-zinco-nutrye-60-comprimido/up/MLBU3814945689?pdp_filters=item_id%3AMLB4502230483&matt_tool=38524122#origin=share&sid=share&wid=MLB4502230483',
    imagem: 'https://i.ibb.co/8gk4ySNd/vinoage.jpg',
    detalhes: 'VinoAge utiliza o poder dos polifenóis da semente de uva. Oferece uma poderosa ação antioxidante que combate os radicais livres, auxiliando na prevenção do envelhecimento precoce e na saúde vascular.'
  },

  {
    id: 'colageno-hialuronico-biotina',
    nome: 'Colágeno Ácido Hialurônico + Biotina',
    categoria: 'Estética',
    descricao: 'Combinação premium para hidratação da pele, redução de rugas e fortalecimento intenso de cabelos e unhas.',
    beneficio: 'Pele, cabelos e unhas.',
    linkMercadoLivre: 'https://www.mercadolivre.com.br/colageno-hidrolisado-acido-hialuronico-biotina-em-po-200g-sabor-limo/p/MLB46012975?pdp_filters=item_id%3AMLB6196202508&matt_tool=38524122#origin=share&sid=share&wid=MLB6196202508',
    imagem: 'https://i.ibb.co/7tjKb8vH/colageno-hialuronico.jpg',
    detalhes: 'Esta fórmula premium combina Colágeno Hidrolisado, Ácido Hialurônico e Biotina. Focada na beleza de dentro para fora, promove a hidratação profunda da pele, redução de rugas e o fortalecimento de cabelos e unhas.'
  },


  // 5. Linha Gerenciamento de Peso
  {
    id: 'burn-free',
    nome: 'Burn Free',
    categoria: 'Peso',
    descricao: 'Suplemento termogênico que auxilia na queima de gordura e no controle de medidas de forma natural.',
    beneficio: 'Queima de gordura natural.',
    linkMercadoLivre: 'https://www.mercadolivre.com.br/termognico-forte-inibidor-de-apetite-sem-cafeina-nutrye-abacaxi-60-comprimidos/p/MLB31959106?pdp_filters=item_id%3AMLB6196304872&matt_tool=38524122#origin=share&sid=share&wid=MLB6196304872',
    imagem: 'https://i.ibb.co/gMnhZrgb/burn-free.jpg',
    detalhes: 'Burn Free é um termogênico natural que auxilia no gerenciamento de peso. Sua fórmula exclusiva ajuda a acelerar o metabolismo e a queima de gordura de forma segura e eficaz.'
  },
  {
    id: 'nutry-redux',
    nome: 'Nutry Redux',
    categoria: 'Peso',
    descricao: 'Poderosa combinação de fibras (Psyllium, Maçã e Ágar-Ágar) para saciedade intensa e detox.',
    beneficio: 'Saciedade e controle de peso.',
    linkMercadoLivre: 'https://www.mercadolivre.com.br/suplemento-nutricional-nutrye-em-capsulas-de-fibra-de-mac-psyllium-e-agar-agar/p/MLB20739203?pdp_filters=item_id%3AMLB6647671870#polycard_client=mshops-appearance-api&component=collection_grid&wid=MLB6647671870&title=Productos+recomendados&tracking_id=467798a8c7c2c8155afc73ff8cf93079&sid=storefronts&global_position=8',
    imagem: 'https://i.ibb.co/pj5kxZ54/nutry-redux.jpg',
    detalhes: 'Nutry Redux Nutrye\n\nPrincipal Benefício: Gerenciamento de peso através da saciedade.\nDiferencial Nutrye: Mix sinérgico de fibras naturais.\n\nNutry Redux combina Psyllium, Fibra de Maçã e Ágar-Ágar para criar um gel no estômago que promove saciedade prolongada. Auxilia no controle do apetite e melhora o trânsito intestinal, sendo um aliado indispensável para o emagrecimento saudável.'
  },
  {
    id: 'picolinato-cromo',
    nome: 'Picolinato de Cromo',
    categoria: 'Peso',
    descricao: 'Mineral que ajuda a estabilizar os níveis de açúcar no sangue e reduzir a vontade de comer doces.',
    beneficio: 'Controle de doces.',
    linkMercadoLivre: 'https://www.mercadolivre.com.br/picolinato-de-cromo-nutrye-250mcg-60-capsulas-veganas-sem-sabor/p/MLB57292205?pdp_filters=item_id%3AMLB4456736091&matt_tool=38524122#origin=share&sid=share&wid=MLB4456736091',
    imagem: 'https://i.ibb.co/ZpQVnjdW/picolinato-cromo.jpg',
    detalhes: 'O Picolinato de Cromo Nutrye é um aliado poderoso para quem busca controlar o apetite por doces. Auxilia na estabilização dos níveis de glicose no sangue, facilitando a adesão a dietas equilibradas.'
  }
];

export const SITE_IMAGES = {
  hero: "https://i.ibb.co/L7P9P20/5159013376661851189.jpg",
  importancia: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1200&auto=format&fit=crop",
  blog: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=1200&auto=format&fit=crop",
  banner_footer: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1200"
};

export const SYSTEM_INSTRUCTION = `
Você é o consultor de saúde da Nutrye. Seu objetivo é ajudar o cliente a encontrar o suplemento ideal da nossa lista oficial. Você deve ser acolhedor, técnico e sempre direcionar para o link de compra no Mercado Livre.

Regra de Ouro: Fale apenas dos produtos da nossa lista (Creatinas, Ora-pro-nóbis, Curmapro, etc.). Se o cliente perguntar algo sobre saúde, cite os 26 anos de experiência da Nutrye (desde 2000) e a qualidade das nossas certificações: Kosher Parve, FDA Approved, Non-GMO e MEG-3.

Base de Conhecimento:
1. Linha Performance e Energia:
- Creatina Mono Hidratada (Pó): Ganho de força e explosão.
- Creatina em Cápsula: Praticidade para massa muscular.
- Creatina Mastigável (Uva): Delicioso sabor uva com a eficácia da creatina.
- Burst Caffeine: Foco e energia (cafeína, taurina, cromo).
- Maca Peruana: Vitalidade e disposição.

2. Linha Saúde Essencial:
- Vitalli AZ: Polivitamínico mastigável (23 nutrientes).
- Ômega 3 (e Mastigável): Saúde do coração e cérebro. Contém selo MEG-3 de pureza premium.
- Vitamina B12 Mastigável: Sabor morango, sistema nervoso.
- Vitamina B12 Vegana: Com ácido fólico, 90 unidades.
- Vitamina D3 + K2: Ossos e imunidade.
- Vitamina D3: Suporte essencial para imunidade e ossos.
- Vitamina A + Betacaroteno: Saúde da visão, pele e imunidade.
- Ferro + C / Zinco + C: Imunidade e combate à anemia.
- Complexo B: Energia, metabolismo e saúde do sistema nervoso.
- Colágeno Tipo 2: Saúde das articulações e cartilagens.
- Coenzima Q10: Energia celular e saúde cardiovascular.

3. Linha Bem-Estar e Equilíbrio:
- Ora-pro-nóbis: Superalimento rico em proteínas e fibras.
- Óleo de Coco Extra Virgem: Energia rápida e auxílio abdominal.
- Magne3 (Magnésio): Mix de 3 magnésios para relaxamento.
- Triptofano: Aminoácido precursor da serotonina, melhora humor e sono.
- Repouzz: Indução do sono e descanso reparador.
- Lactase: Digestão de lácteos.

4. Linha Estética e Longevidade:
- Colágeno Ácido Hialurônico + Biotina: Hidratação da pele e fortalecimento.
- Renoderme: Rejuvenescimento da pele, unhas e cabelos.
- VinoAge: Antioxidante (semente de uva).
- Ellev Feno Grego: Suporte hormonal e vitalidade.
- Curmapro: Anti-inflamatório (Cúrcuma, Própolis, Gengibre).

5. Linha Gerenciamento de Peso:
- Nutry Redux: Fibras para saciedade e controle de apetite.
- Burn Free: Queima de gordura natural.
- Picolinato de Cromo: Estabiliza açúcar e reduz vontade de doces.

Certificações e Compromisso:
- 26 anos de história (desde 2000).
- KOSHER PARVE: Pureza rigorosa, sem derivados de carne/leite.
- FDA APPROVED: Instalações auditadas seguindo normas GMP.
- NON-GMO: Livre de transgênicos.
- MEG-3: Óleo de peixe premium, livre de metais pesados.
`;

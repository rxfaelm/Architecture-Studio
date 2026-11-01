export type Project = {
  slug: string;
  title: string;
  place: string;
  category: "Residencial" | "Comercial" | "Interiores";
  year: string;
  area: string;
  image: string;
  description: string;
  detail: string;
};
export const projects: Project[] = [
  {
    slug: "casa-entre-arvores",
    title: "Casa entre árvores",
    place: "Serra da Mantiqueira, SP",
    category: "Residencial",
    year: "2025",
    area: "286 m²",
    image: "photo-1600210492486-724fe5c67fb0",
    description: "Uma casa que encontra seu lugar entre a mata e a montanha.",
    detail:
      "Implantada com delicadeza no declive natural do terreno, a casa se organiza em dois volumes de pedra e madeira. Grandes aberturas acompanham o percurso do sol e fazem da paisagem parte da vida cotidiana. A matéria é local, a escala é íntima e a presença, silenciosa.",
  },
  {
    slug: "casa-do-patio",
    title: "Casa do pátio",
    place: "São Paulo, SP",
    category: "Residencial",
    year: "2024",
    area: "214 m²",
    image: "photo-1600607687939-ce8a6c25118c",
    description: "Luz, respiro e intimidade no coração da cidade.",
    detail:
      "Um pátio central costura os ambientes e transforma a luz em matéria de projeto. As áreas sociais se abrem para o verde, enquanto os espaços de recolhimento preservam uma escala doméstica e tranquila.",
  },
  {
    slug: "cafe-alvorada",
    title: "Café Alvorada",
    place: "Pinheiros, São Paulo",
    category: "Comercial",
    year: "2025",
    area: "138 m²",
    image: "photo-1554118811-1e0d58224f24",
    description: "Um lugar de encontro desenhado para durar.",
    detail:
      "A reforma de um imóvel de esquina dá forma a um café aberto para o bairro. Bancadas de pedra, madeira de demolição e caixilhos restaurados criam uma atmosfera familiar, sem abrir mão de uma identidade própria.",
  },
  {
    slug: "refugio-vale",
    title: "Refúgio do Vale",
    place: "Ibiúna, SP",
    category: "Residencial",
    year: "2023",
    area: "192 m²",
    image: "photo-1600566753086-00f18fb6b3ea",
    description: "Um abrigo contemporâneo em diálogo com a paisagem.",
    detail:
      "A implantação compacta reduz intervenções no terreno e enquadra vistas longas sobre o vale. Materiais honestos envelhecem com o tempo e conectam a construção ao entorno.",
  },
  {
    slug: "apartamento-livre",
    title: "Apartamento Livre",
    place: "Jardins, São Paulo",
    category: "Interiores",
    year: "2024",
    area: "156 m²",
    image: "photo-1600607687920-4e2a09cf159d",
    description: "Interiores que acolhem sem impor um modo de viver.",
    detail:
      "Uma reorganização cuidadosa devolve fluidez ao apartamento. A paleta mineral, os tons naturais e a marcenaria precisa deixam que a coleção de arte e os objetos dos moradores ocupem o primeiro plano.",
  },
  {
    slug: "casa-linha",
    title: "Casa Linha",
    place: "Campinas, SP",
    category: "Interiores",
    year: "2023",
    area: "168 m²",
    image: "photo-1600210491369-e753d80a41f3",
    description: "Uma reforma feita de pequenos gestos e grandes permanências.",
    detail:
      "A intervenção preserva a estrutura original e atualiza a casa com luz, materiais táteis e uma relação mais generosa entre cozinha e estar.",
  },
];
export const photo = (id: string, w = 1400) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=85`;

const imageUrl =
  "https://eshows.com.br/_next/image?url=https%3A%2F%2Fs3.us-east-2.amazonaws.com%2Fepm-blue%2Feshows%2FT_ATRACOES%2F1505%2F638230607572053170_perfil.png&w=1920&q=50";

  const images = [
    { id: 5, uri: imageUrl, borderRadius: { borderTopLeftRadius: 8 } },
    { id: 6, uri: imageUrl, borderRadius: { borderTopRightRadius: 8 } },
    { id: 7, uri: imageUrl, borderRadius: { borderBottomLeftRadius: 8 } },
    { id: 8, uri: imageUrl, borderRadius: { borderBottomRightRadius: 8 } },
  ];

export const CompanyInfo = {
  id: "123",
  bio: {
    name: "Bar Brahma",
    cover: "https://s3.us-east-2.amazonaws.com/epm-blue/eshows/T_COMPANIES/797/638204533896098902_BarBrahmaImagem.jpg.jpg",
    highlightedSocialNetwork: "@barbrahma",
    address: "Av. Brg. Faria Lima 3183 - Itaim Bibi ",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at mauris tristique, convallis justo eu, aliquet nibh. Aenean id blandit risus. Vivamus suscipit et risus eget placerat. Nullam tempus massa vitae laoreet varius.",
    openHours: [],
    cuisineTypes: [],
  },
  links: {
    menuLink: "https://www.google.com.br",
    reserveLink: "https://www.google.com.br",
    deliveryLink: "https://www.google.com.br",
  },
  followersCount: 200,
  followingCount: 200,
  tags: [],
  banners: [
    {
      id: 1,
      cover: imageUrl,
      date: "Sex - 12/04",
      title: "Aniversário do Fabião",
    },
    {
      id: 2,
      cover: imageUrl,
      date: "Sex - 14/04",
      title: "Despedida do Mika",
    },
    {
      id: 3,
      cover: imageUrl,
      date: "Sex - 13/04",
      title: "Cospe veneno",
    },
  ],
  events: [
    {
      id: 4,
      cover: imageUrl,
      space: "Espaço 1",
      date: "Sexta, 05/04",
      hour: '22:00',
      title: "Snake",
      tags: ["Balada", "Bar Balada", "Restaurante"],
    },
    {
      id: 5,
      cover: imageUrl,
      space: "Espaço 2",
      date: "Sexta, 05/04",
      hour: '22:00',
      title: "Alesso",
      tags: ["Balada", "Bar Balada", "Restaurante"],
    },
    {
      id: 5,
      cover: imageUrl,
      space: "Espaço 3",
      date: "Sexta, 05/04",
      hour: '22:00',
      title: "Koiote",
      tags: ["Balada", "Bar Balada", "Restaurante"],
    },
    {
      id: 6,
      cover: imageUrl,
      space: "Espaço 4",
      date: "Sexta, 05/04",
      hour: '22:00',
      title: "Zina",
      tags: ["Balada", "Bar Balada", "Restaurante"],
    },
  ],
  ambients: [
    {
      id: 5,
      uri: imageUrl,
      borderRadius: { borderTopLeftRadius: 8 },
      name: "Ambiente 1",
      images,
    },
    {
      id: 6,
      uri: imageUrl,
      borderRadius: { borderTopRightRadius: 8 },
      name: "Ambiente 2",
      images,
    },
    {
      id: 7,
      uri: imageUrl,
      borderRadius: { borderBottomLeftRadius: 8 },
      name: "Ambiente 3",
      images,
    },
    {
      id: 8,
      uri: imageUrl,
      borderRadius: { borderBottomRightRadius: 8 },
      name: "Ambiente 4",
      images,
    },
  ],
};

import { Header } from "@/components/Header";
import { Input } from "@/components/Input";
import { useNavigation } from "@react-navigation/native";
import { BookmarkSimple, MagnifyingGlass } from "phosphor-react-native";
import { useForm } from "react-hook-form";
import { FlatList } from "react-native";
import { useTheme } from "styled-components/native";
import { CompanyCard } from "./CompanyCard";
import { Card, Container, Content, Title } from "./styles";

export function CompanySelection() {
  const theme = useTheme();
  const { control } = useForm();
  const navigation = useNavigation();
  const companies = [
    {
      TITULO: "Onde tomar vinho em São Paulo",
      ID: "e7d23ab0-93e2-419f-944e-8e3604b19485",
      EXID: 1209,
      NAME: "Bardega",
      COMPANY_SLUG: "bardega",
      COZINHA: "Contemporânea, Bar",
      LOGRADOURO:
        "Rua Doutor Alceu de Campos Rodrigues 218, 04544-000 - Vila Nova Conceição",
      CITY: "São Paulo",
      STATE_ABBR: "São Paulo",
      DISTANCIA: 0.9134887968899414,
      PHOTO:
        "https://eshows-images.s3.amazonaws.com/16799212296421904deb7f016799212293x2rt.jpg",
    },
    {
      TITULO: "Onde tomar vinho em São Paulo",
      ID: "c0845df7-dd11-4621-a764-6dd10eca3f24",
      EXID: 1212,
      NAME: "Huevos de Oro",
      COMPANY_SLUG: "huevos-de-oro",
      COZINHA: "Bar, Espanhola",
      LOGRADOURO: "Avenida Pedroso de Morais 267, 05419-000 - Pinheiros",
      CITY: "São Paulo",
      STATE_ABBR: "São Paulo",
      DISTANCIA: 2.396291039065665,
      PHOTO: "https://eshows-images.s3.amazonaws.com/huevos.webp",
    },
    {
      TITULO: "Onde tomar vinho em São Paulo",
      ID: "af815e41-89d2-4aa8-b7a2-17f613a410f0",
      EXID: 1206,
      NAME: "Sede261",
      COMPANY_SLUG: "sede261",
      COZINHA: "Bar",
      LOGRADOURO: "Rua Benjamim Egas 261, 05418-030 - Pinheiros",
      CITY: "São Paulo",
      STATE_ABBR: "São Paulo",
      DISTANCIA: 2.497912575893394,
      PHOTO: "https://eshows-images.s3.amazonaws.com/sede261.webp",
    },
    {
      TITULO: "Onde tomar vinho em São Paulo",
      ID: "0ce9cd92-5033-48de-869b-1918c0cb7c63",
      EXID: 1203,
      NAME: "Clementina",
      COMPANY_SLUG: "clemetina",
      COZINHA: "Comida de Bar, Bar, Pizza",
      LOGRADOURO: "Rua João Moura 613, 05412-001 - Pinheiros",
      CITY: "São Paulo",
      STATE_ABBR: "São Paulo",
      DISTANCIA: 3.184074944601736,
      PHOTO: "https://eshows-images.s3.amazonaws.com/clementinaofc.jpg",
    },
    {
      TITULO: "Onde tomar vinho em São Paulo",
      ID: "9b9d953e-26ea-4e50-810b-492ea275485f",
      EXID: 1205,
      NAME: "Miya Wine Bar - Pinheiros",
      COMPANY_SLUG: "miya-wine-bar-pinheiros",
      COZINHA: "Brasileira, Sul-americana, Mediterrânea",
      LOGRADOURO: "Rua Padre Carvalho 55, 05427-100 - Pinheiros",
      CITY: "São Paulo",
      STATE_ABBR: "São Paulo",
      DISTANCIA: 3.3955707864979234,
      PHOTO: "https://eshows-images.s3.amazonaws.com/Vino.jpg",
    },
    {
      TITULO: "Onde tomar vinho em São Paulo",
      ID: "3b47909d-101e-43b6-b721-43b615f7eddc",
      EXID: 1213,
      NAME: "Barletta Ristorante",
      COMPANY_SLUG: "barletta",
      COZINHA: "Bar, Italiana",
      LOGRADOURO: "Alameda Tietê 360, 01417-020 - Cerqueira César",
      CITY: "São Paulo",
      STATE_ABBR: "São Paulo",
      DISTANCIA: 3.4078765908589204,
      PHOTO:
        "https://eshows-images.s3.amazonaws.com/CapturadeTela20220912s14.19.55.png",
    },
    {
      TITULO: "Onde tomar vinho em São Paulo",
      ID: "fce25635-facd-499f-a998-01ed70b4de3b",
      EXID: 1214,
      NAME: "Bocca Nera",
      COMPANY_SLUG: "bocca-nera",
      COZINHA: "Contemporânea",
      LOGRADOURO: "Rua Mourato Coelho 1160, 05417-002 - Pinheiros",
      CITY: "São Paulo",
      STATE_ABBR: "São Paulo",
      DISTANCIA: 3.4725953181341174,
      PHOTO: "https://eshows-images.s3.amazonaws.com/img1770ok.png",
    },
    {
      TITULO: "Onde tomar vinho em São Paulo",
      ID: "44fa5e0b-2c76-41f9-9f76-07960bdbad99",
      EXID: 1215,
      NAME: "Ciao Vino & Birra",
      COMPANY_SLUG: "ciao-vina-e-birra",
      COZINHA: "Italiana",
      LOGRADOURO: "Rua Tutóia 451, 04007-002 - Paraíso",
      CITY: "São Paulo",
      STATE_ABBR: "São Paulo",
      DISTANCIA: 3.58240628631307,
      PHOTO: "https://eshows-images.s3.amazonaws.com/ciaovino4.jpg",
    },
    {
      TITULO: "Onde tomar vinho em São Paulo",
      ID: "587d466d-d8fe-4831-98ef-5aee0b7a2bde",
      EXID: 1207,
      NAME: "Clos Wine Bar & Bistrô",
      COMPANY_SLUG: "clos-wine-bar",
      COZINHA: "Francesa, Contemporânea",
      LOGRADOURO: "Rua Girassol 310, 05433-000 - Vila Madalena",
      CITY: "São Paulo",
      STATE_ABBR: "São Paulo",
      DISTANCIA: 3.6389395930456288,
      PHOTO:
        "https://eshows-images.s3.amazonaws.com/dc4cbb4eb61c1152e4493f8fb6d9ef581bb455mv2.png",
    },
    {
      TITULO: "Onde tomar vinho em São Paulo",
      ID: "721e1ae2-a70c-4ea3-b371-955e6a929288",
      EXID: 1208,
      NAME: "Los Perros - Vinho no Boteco",
      COMPANY_SLUG: "los-perros",
      COZINHA: "Comida de Bar, Bar",
      LOGRADOURO: "Rua Bela Cintra 806, 01415-002 - Consolação",
      CITY: "São Paulo",
      STATE_ABBR: "São Paulo",
      DISTANCIA: 4.394372184355437,
      PHOTO: "https://eshows-images.s3.amazonaws.com/LosPerros029.jpg.png",
    },
    {
      TITULO: "Onde tomar vinho em São Paulo",
      ID: "2717e798-2e2e-447c-b560-ccc01f30a7ce",
      EXID: 1204,
      NAME: "Enoteca Nacional",
      COMPANY_SLUG: "enoteca-nacional",
      COZINHA: "Comida de Bar, Bar",
      LOGRADOURO:
        "Rua Professor Sebastião Soares de Faria 32, 01317-010 - Bela Vista",
      CITY: "São Paulo",
      STATE_ABBR: "São Paulo",
      DISTANCIA: 5.104479371656537,
      PHOTO:
        "https://eshows-images.s3.amazonaws.com/affe4f6724264c3a8196601641176899.png",
    },
    {
      TITULO: "Onde tomar vinho em São Paulo",
      ID: "a61ae3e3-d7c6-411c-b366-ce5e99a346dd",
      EXID: 1211,
      NAME: "Beverino Vinhos Naturais",
      COMPANY_SLUG: "beverino",
      COZINHA: "Bar, Contemporânea",
      LOGRADOURO: "Rua General Jardim 702,  - Vila Buarque",
      CITY: "São Paulo",
      STATE_ABBR: "SP",
      DISTANCIA: 5.786480896886714,
      PHOTO: "https://eshows-images.s3.amazonaws.com/ambiente06.png",
    },
    {
      TITULO: "Onde tomar vinho em São Paulo",
      ID: "16d1eee4-fbd9-43b0-a352-c955ee4265cd",
      EXID: 1210,
      NAME: "Paloma",
      COMPANY_SLUG: "paloma",
      COZINHA: "Brasileira, Bar",
      LOGRADOURO:
        "Avenida Ipiranga 200, 01046-010 - Centro Histórico de São Paulo",
      CITY: "São Paulo",
      STATE_ABBR: "São Paulo",
      DISTANCIA: 6.063059248353196,
      PHOTO: "https://eshows-images.s3.amazonaws.com/Ambiente2.jpg.png",
    },
    {
      TITULO: "Onde tomar vinho em São Paulo",
      ID: "1771b470-fe05-43fe-822a-405925745c7a",
      EXID: 1216,
      NAME: "Prosa e Vinho",
      COMPANY_SLUG: "prosa-vinho",
      COZINHA: "Bar",
      LOGRADOURO: " 0, 01047-010 - República",
      CITY: "São Paulo",
      STATE_ABBR: "São Paulo",
      DISTANCIA: 6.17930863260194,
      PHOTO: "https://eshows-images.s3.amazonaws.com/prosaevinho2.jpeg",
    },
  ];

  const handlePress = (item) => {
    navigation.navigate("newPublication", {
      company: item,
    });
  };

  const renderItem = ({ item }: any) => (
    <CompanyCard data={item} handlePress={() => handlePress(item)} />
  );
  return (
    <Container>
      <Header />
      <Content>
        <Card onPress={() => navigation.navigate("newList" as never)}>
          <BookmarkSimple size={32} color={theme.colors.main} weight="fill" />
          <Title>Crie uma nova lista</Title>
        </Card>
        <Input
          control={control}
          name="search"
          placeholder="Pesquisar por um espaço"
          style={{ borderRadius: 999, marginTop: 16 }}
          Icon={<MagnifyingGlass color="#929292" weight="bold" />}
        />

        <FlatList
          scrollEnabled={false}
          data={companies}
          renderItem={renderItem}
          keyExtractor={(item) => item.ID}
          contentContainerStyle={{ marginTop: 16, gap: 8 }}
        />
      </Content>
    </Container>
  );
}

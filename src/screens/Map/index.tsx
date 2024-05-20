import MapView from "react-native-map-clustering";
import { Marker } from "react-native-maps";

import { Input } from "@/components/Input";
import { MagnifyingGlass } from "phosphor-react-native";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Animated, { SlideInDown } from "react-native-reanimated";
import { useTheme } from "styled-components/native";
import { CompanyCard } from "./CompanyCard";
import { CustomMarker } from "./Marker";
import { Bottom, Container, Content, Top } from "./styles";

export function Map() {
  const [selectedCompany, setSelectedCompany] = useState({});
  const companies = [
    {
      LATITUDE: "-23.5417320932361",
      LONGITUDE: "-46.6405358178913",
      NAME: "Bar Brahma inativo",
      LOGRADOURO: "Av. São João, 677",
      ID: "100",
      FOTO: "https://s3.us-east-2.amazonaws.com/epm-blue/eshows/T_COMPANIES/100/638506020236414130_Camada_2.png",
    },
    {
      LATITUDE: "-23.5348791299596",
      LONGITUDE: "-46.7709777490115",
      NAME: "Coco Bambu Osasco",
      LOGRADOURO: "Avenida dos Autonomistas, 1828 Segundo Piso",
      ID: "101",
      FOTO: "https://s3.us-east-2.amazonaws.com/epm-blue/eshows/T_COMPANIES/101/637771839696283298_cocoBambu.png",
    },
    {
      LATITUDE: "-23.542304373355034",
      LONGITUDE: "-46.64060387540616",
      NAME: "CASA TESTE INTERNO 2",
      LOGRADOURO: "Av. Coronal Maximiano",
      ID: "102",
      FOTO: "https://s3.us-east-2.amazonaws.com/epm-blue/eshows/T_COMPANIES/102/638385071129581626_birthday.png",
    },
    {
      LATITUDE: "-23.5817513302274",
      LONGITUDE: "-46.6847501754756",
      NAME: "Eu Tu Eles - FARIA LIMA",
      LOGRADOURO: "Av. Brg. Faria Lima",
      ID: "105",
      FOTO: "https://s3.us-east-2.amazonaws.com/epm-blue/eshows/T_COMPANIES/105/637980871625378101_ETE.png",
    },
    {
      LATITUDE: "-23.5869937400608",
      LONGITUDE: "-46.6726506463124",
      NAME: "Bardassê",
      LOGRADOURO: "R. Dr. Renato Paes de Barros,994",
      ID: "112",
      FOTO: null,
    },
    {
      LATITUDE: "-22.9540147025420",
      LONGITUDE: "-43.1782766299987",
      NAME: "Coco Bambu Botafogo",
      LOGRADOURO: "R. Gen. Severiano, 97",
      ID: "113",
      FOTO: "https://s3.us-east-2.amazonaws.com/epm-blue/eshows/T_COMPANIES/113/637953038762601054_cocoBambu__1_.png",
    },
    {
      LATITUDE: "-23.5952645023957",
      LONGITUDE: "-46.689276631831",
      NAME: "Tatu Bola - VILA OLÍMPIA",
      LOGRADOURO: "R. Gomes de Carvalho",
      ID: "125",
      FOTO: "https://s3.us-east-2.amazonaws.com/epm-blue/eshows/T_COMPANIES/125/638203631701306270_logotatu.png.png",
    },
    {
      LATITUDE: "-23.586616302483126",
      LONGITUDE: "-46.679572341094975",
      NAME: "Tatu Bola - ITAIM",
      LOGRADOURO: "Rua Clodomiro Amazonas",
      ID: "127",
      FOTO: "https://s3.us-east-2.amazonaws.com/epm-blue/eshows/T_COMPANIES/127/638203633600516349_logotatu.png.png",
    },
    {
      LATITUDE: "-23.5854395677252",
      LONGITUDE: "-46.6704855453258",
      NAME: "Coco Bambu JK",
      LOGRADOURO: "Av. Antônio Joaquim de Moura Andrade",
      ID: "129",
      FOTO: "https://s3.us-east-2.amazonaws.com/epm-blue/eshows/T_COMPANIES/129/637829482929510581_cocoBambu.png",
    },
    {
      LATITUDE: "-23.5658874078936",
      LONGITUDE: "-46.5040040012276",
      NAME: "Quiosque Aricanduva ",
      LOGRADOURO: "Shopping Leste Aricanduva ,144",
      ID: "134",
      FOTO: null,
    },
    {
      LATITUDE: "-23.6824830734887",
      LONGITUDE: "-46.5553157326498",
      NAME: "Coco Bambu Conceito São Bernardo",
      LOGRADOURO: "Av. Kennedy",
      ID: "135",
      FOTO: "https://s3.us-east-2.amazonaws.com/epm-blue/eshows/T_COMPANIES/135/637829483218172239_cocoBambu.png",
    },
    {
      LATITUDE: "-23.5718037477004",
      LONGITUDE: "-46.7039441742397",
      NAME: "Vila Butantan",
      LOGRADOURO: "R. Agostinho Cantu,47",
      ID: "136",
      FOTO: null,
    },
    {
      LATITUDE: "-22.8929422636892",
      LONGITUDE: "-47.0252143913304",
      NAME: "Coco Bambu Campinas",
      LOGRADOURO: "Shopping Iguatemi -  Av. Iguatemi",
      ID: "137",
      FOTO: "https://s3.us-east-2.amazonaws.com/epm-blue/eshows/T_COMPANIES/137/637829485926749215_cocoBambu.png",
    },
    {
      LATITUDE: "-24.0196465078942",
      LONGITUDE: "-46.4526834471437",
      NAME: "Quintal do Espeto - Tupi (Praia Grande)",
      LOGRADOURO: "Av. Pres. Castelo Branco,35/36 ",
      ID: "139",
      FOTO: "https://s3.us-east-2.amazonaws.com/epm-blue/eshows/T_COMPANIES/139/637829594992774809_Quintal_do_Espeto.png",
    },
    {
      LATITUDE: "-23.5594642249448",
      LONGITUDE: "-46.6649657588209",
      NAME: "Espetto Carioca Jardins",
      LOGRADOURO: "R. Bela Cintra",
      ID: "143",
      FOTO: "https://s3.us-east-2.amazonaws.com/epm-blue/eshows/T_COMPANIES/143/637829551989233334_Espetto_Carioca__1_.png",
    },
    {
      LATITUDE: "-23.472934051693",
      LONGITUDE: "-46.5317391030777",
      NAME: "Espetto Carioca Guarulhos",
      LOGRADOURO: "Rua Barão de Mauá,92",
      ID: "144",
      FOTO: null,
    },
    {
      LATITUDE: "-23.6143805370910",
      LONGITUDE: "-46.6655848588197",
      NAME: "Quintal do Espeto - MOEMA CARINÁS",
      LOGRADOURO: "Av. dos Carinás",
      ID: "146",
      FOTO: "https://s3.us-east-2.amazonaws.com/epm-blue/eshows/T_COMPANIES/146/637829554261153743_Quintal_do_Espeto.png",
    },
    {
      LATITUDE: "-23.5703049029579",
      LONGITUDE: "-46.6431069789655",
      NAME: "Coco Bambu Conceito Pátio Paulista",
      LOGRADOURO: "R. Treze de Maio",
      ID: "147",
      FOTO: "https://s3.us-east-2.amazonaws.com/epm-blue/eshows/T_COMPANIES/147/637829486072534308_cocoBambu.png",
    },
    {
      LATITUDE: "-20.8663352092178",
      LONGITUDE: "-49.4138461741886",
      NAME: "Coco Bambu São José do Rio Preto",
      LOGRADOURO: "Av. Pres. Juscelino K. de Oliveira, 5000",
      ID: "154",
      FOTO: "https://s3.us-east-2.amazonaws.com/epm-blue/eshows/T_COMPANIES/154/637829486218900276_cocoBambu.png",
    },
    {
      LATITUDE: "-23.5579475185346",
      LONGITUDE: "-46.6907326449785",
      NAME: "Bar Léo - Vila Madalena",
      LOGRADOURO: "R. Aspicuelta, 578",
      ID: "155",
      FOTO: "https://s3.us-east-2.amazonaws.com/epm-blue/eshows/T_COMPANIES/155/637829550037203103_Bar_Leo.png",
    },
    {
      LATITUDE: "-22.8706915929675",
      LONGITUDE: "-43.3414801978009",
      NAME: "Espetto Carioca Madureira Shopping",
      LOGRADOURO: "Estr. do Portela,222",
      ID: "164",
      FOTO: null,
    },
    {
      LATITUDE: "-3.73692701897057",
      LONGITUDE: "-38.5011163745971",
      NAME: "Apelo Piadineria",
      LOGRADOURO: "R. Norvinda Píres ",
      ID: "167",
      FOTO: "https://s3.us-east-2.amazonaws.com/epm-blue/eshows/T_COMPANIES/167/637829549473470615_Apelo.png",
    },
    {
      LATITUDE: "-23.5384030819868",
      LONGITUDE: "-46.6743951288605",
      NAME: "Bélier Bistrot ",
      LOGRADOURO: "Av. Sumaré,1078",
      ID: "168",
      FOTO: null,
    },
    {
      LATITUDE: "-22.8193888930231",
      LONGITUDE: "-47.0810952103275",
      NAME: "Orla Vidottinho",
      LOGRADOURO: "R. Carlos Martins,17",
      ID: "169",
      FOTO: null,
    },
    {
      LATITUDE: "-23.5451737811014",
      LONGITUDE: "-46.6431395730424",
      NAME: "Circolo Cucina",
      LOGRADOURO: "Av. Ipiranga,344",
      ID: "170",
      FOTO: null,
    },
    {
      LATITUDE: "-22.9864003368397",
      LONGITUDE: "-43.2004648683632",
      NAME: "Boteco Belmonte - Vieira Souto",
      LOGRADOURO: "Av. Vieira Souto",
      ID: "171",
      FOTO: "https://s3.us-east-2.amazonaws.com/epm-blue/eshows/T_COMPANIES/171/637829688438419976_Boteco_Belmonte.png",
    },
    {
      LATITUDE: "-23.5242050262776",
      LONGITUDE: "-46.6850261162408",
      NAME: "Taru Cervejaria",
      LOGRADOURO: "R. Clélia,285",
      ID: "172",
      FOTO: null,
    },
    {
      LATITUDE: "-23.6534659757558",
      LONGITUDE: "-46.5338695356473",
      NAME: "Baby Beef Jardim",
      LOGRADOURO: "R. das Bandeiras,166",
      ID: "189",
      FOTO: null,
    },
    {
      LATITUDE: "-23.5533985948202",
      LONGITUDE: "-46.5617330649309",
      NAME: "Tatu Bola - TATUAPÉ",
      LOGRADOURO: "R. Emília Marengo",
      ID: "190",
      FOTO: "https://s3.us-east-2.amazonaws.com/epm-blue/eshows/T_COMPANIES/190/638203635007046628_logotatu.png.png",
    },
    {
      LATITUDE: "-23544501",
      LONGITUDE: "-46636479",
      NAME: "Teste 2",
      LOGRADOURO:
        "Av. São João - Centro Histórico de São Paulo, São Paulo - SP, Brasil",
      ID: "196",
      FOTO: null,
    },
    {
      LATITUDE: "-23.5850474323000",
      LONGITUDE: "-46.6835908878792",
      NAME: "Bar das Patroas",
      LOGRADOURO: "Rua Tabapuã",
      ID: "199",
      FOTO: "https://s3.us-east-2.amazonaws.com/epm-blue/eshows/T_COMPANIES/199/637901409803636603_12935029_DlkVLp0iviqkTW0J3_3fGrjlqIi_NVANs6i5K3Hc3U0.jpg",
    },
    {
      LATITUDE: "-23.6267685486873",
      LONGITUDE: "-46.6991682877321",
      NAME: "Jien Sushi",
      LOGRADOURO: "R. Chafic Maluf,47",
      ID: "200",
      FOTO: null,
    },
    {
      LATITUDE: "-16.7061495928355",
      LONGITUDE: "-49.2607180454529",
      NAME: "Tatu Bola - Goiânia",
      LOGRADOURO: "Alameda Cel. Eugênio Jardim",
      ID: "202",
      FOTO: "https://s3.us-east-2.amazonaws.com/epm-blue/eshows/T_COMPANIES/202/638203612250504828_logotatu.png.png",
    },
    {
      LATITUDE: "-23566084",
      LONGITUDE: "-46650795",
      NAME: "Bar do Marcelo",
      LOGRADOURO: "Av. Paulista - Bela Vista, São Paulo - SP, Brasil",
      ID: "205",
      FOTO: null,
    },
    {
      LATITUDE: "-23.5581540881583",
      LONGITUDE: "-46.690932487734",
      NAME: "Zé da Praia",
      LOGRADOURO: "R. Aspicuelta,596",
      ID: "211",
      FOTO: null,
    },
    {
      LATITUDE: "-23.5839580672134",
      LONGITUDE: "-46.6829600870931",
      NAME: "Boteco Boa Praça - ITAIM",
      LOGRADOURO: "Av. Brg. Faria Lima",
      ID: "218",
      FOTO: "https://s3.us-east-2.amazonaws.com/epm-blue/eshows/T_COMPANIES/218/637976554619191384_BP.png",
    },
    {
      LATITUDE: "-23.5577253567385",
      LONGITUDE: "-46.6903388741616",
      NAME: "O Pasquim Bar e Prosa - Vila Madalena",
      LOGRADOURO: "R. Aspicuelta",
      ID: "220",
      FOTO: "https://s3.us-east-2.amazonaws.com/epm-blue/eshows/T_COMPANIES/220/637829592271988211_O_Pasquim.png",
    },
    {
      LATITUDE: "-23.5513656214943",
      LONGITUDE: "-46.5877515446481",
      NAME: "Mooca Bar",
      LOGRADOURO: "R. Dr. João Batista de Lacerda, 728",
      ID: "221",
      FOTO: null,
    },
    {
      LATITUDE: "-23.5569404290833",
      LONGITUDE: "-46.6877078319109",
      NAME: "High Line",
      LOGRADOURO: "R. Girassol,144",
      ID: "226",
      FOTO: "https://s3.us-east-2.amazonaws.com/epm-blue/eshows/T_COMPANIES/226/637829553879435359_High_Lin.png",
    },
    {
      LATITUDE: "-23.5909337802772",
      LONGITUDE: "-46.6821983011499",
      NAME: "Sky Hall",
      LOGRADOURO: "Av. Pres. Juscelino Kubitschek",
      ID: "227",
      FOTO: "https://s3.us-east-2.amazonaws.com/epm-blue/eshows/T_COMPANIES/227/637829597095420458_SkyHall.png",
    },
    {
      LATITUDE: "-23.556594875005697",
      LONGITUDE: "-46.687064626988125",
      NAME: "Pracinha Seu Justino",
      LOGRADOURO: "Rua Harmonia",
      ID: "236",
      FOTO: "https://s3.us-east-2.amazonaws.com/epm-blue/eshows/T_COMPANIES/236/638412673087759805_SemTtulo7.png.png",
    },
    {
      LATITUDE: "-22.8222786627338",
      LONGITUDE: "-47.0816460592301",
      NAME: "Vidottinho Barão",
      LOGRADOURO: "R. Agostinho Pátaro,60",
      ID: "239",
      FOTO: null,
    },
    {
      LATITUDE: "-23.5717208442982",
      LONGITUDE: "-46.7038246588982",
      NAME: "Lá em Cima",
      LOGRADOURO: "R. Agostinho Cantu,47",
      ID: "241",
      FOTO: null,
    },
    {
      LATITUDE: "-25.4350477390884",
      LONGITUDE: "-49.3165200814868",
      NAME: "Coco Bambu Barigui",
      LOGRADOURO: "R. Prof. Pedro Viriato Parigot de Souza",
      ID: "258",
      FOTO: "https://s3.us-east-2.amazonaws.com/epm-blue/eshows/T_COMPANIES/258/637828774859009902_cocoBambu.png",
    },
    {
      LATITUDE: "-23556859",
      LONGITUDE: "-46662879",
      NAME: "Salão Duas Rodas",
      LOGRADOURO:
        "R. Bela Cintra, 1200 - Cerqueira César, São Paulo - SP, Brasil",
      ID: "259",
      FOTO: null,
    },
    {
      LATITUDE: "-23.566062535801",
      LONGITUDE: "-46.5904957030752",
      NAME: "Bar.In",
      LOGRADOURO: "R. Bixira,178",
      ID: "260",
      FOTO: null,
    },
    {
      LATITUDE: "-23.5552022876134",
      LONGITUDE: "-46.6881534742401",
      NAME: "Jacaré ",
      LOGRADOURO: "Rua Harmonia",
      ID: "261",
      FOTO: "https://s3.us-east-2.amazonaws.com/epm-blue/eshows/T_COMPANIES/261/638249365701798269_IMG3485.jpg.jpg",
    },
    {
      LATITUDE: "-23567716",
      LONGITUDE: "-46588788",
      NAME: " Deck Lounge Pizza",
      LOGRADOURO:
        "R. Isabel Dias, 89 - Mooca, São Paulo - SP, 03119-030, Brasil",
      ID: "262",
      FOTO: null,
    },
    {
      LATITUDE: "-23.501914597362617",
      LONGITUDE: "-46.69899378857928",
      NAME: "Oh Freguês",
      LOGRADOURO: "Largo da Matriz de Nossa Senhora do Ó, 145",
      ID: "263",
      FOTO: "https://s3.us-east-2.amazonaws.com/epm-blue/eshows/T_COMPANIES/263/638430996107032430_000.png.png",
    },
    {
      LATITUDE: "-23.5582491114266",
      LONGITUDE: "-46.6906852741615",
      NAME: "Navarro",
      LOGRADOURO: "R. Aspicuelta",
      ID: "266",
      FOTO: "https://s3.us-east-2.amazonaws.com/epm-blue/eshows/T_COMPANIES/266/637829591678416607_Navarro.png",
    },
    {
      LATITUDE: "-23.5126225662644",
      LONGITUDE: "-46.6537470453274",
      NAME: "Coco Bambu Anhembi",
      LOGRADOURO: "Av. Braz Leme",
      ID: "270",
      FOTO: "https://s3.us-east-2.amazonaws.com/epm-blue/eshows/T_COMPANIES/270/637829486565159259_cocoBambu.png",
    },
    {
      LATITUDE: "-3.7303315752152",
      LONGITUDE: "-38.5102323167408",
      NAME: "Coco Bambu Dom Pastel",
      LOGRADOURO: "R. Carlos Vasconcelos",
      ID: "271",
      FOTO: "https://s3.us-east-2.amazonaws.com/epm-blue/eshows/T_COMPANIES/271/637829486905378846_cocoBambu.png",
    },
    {
      LATITUDE: "-22.8965557812734",
      LONGITUDE: "-47.0493297109666",
      NAME: "Tatu Bola - CAMPINAS",
      LOGRADOURO: "R. Américo Brasiliense",
      ID: "274",
      FOTO: "https://s3.us-east-2.amazonaws.com/epm-blue/eshows/T_COMPANIES/274/638203646043054814_logotatu.png.png",
    },
    {
      LATITUDE: "-23.5958699393293",
      LONGITUDE: "-46.6879245453255",
      NAME: "Eu Tu Eles - VILA OLÍMPIA",
      LOGRADOURO: "R. Gomes de Carvalho",
      ID: "275",
      FOTO: "https://s3.us-east-2.amazonaws.com/epm-blue/eshows/T_COMPANIES/275/637980881057991140_ETE.png",
    },
    {
      LATITUDE: "-23.6026968526158",
      LONGITUDE: "-46.6917153453254",
      NAME: "Tatu Bola - BERRINI",
      LOGRADOURO: "Av. Engenheiro Luís Carlos Berrini",
      ID: "276",
      FOTO: "https://s3.us-east-2.amazonaws.com/epm-blue/eshows/T_COMPANIES/276/638203637272559225_logotatu.png.png",
    },
    {
      LATITUDE: "-23.5661307359201",
      LONGITUDE: "-46.6686546091064",
      NAME: "Tatu Bola - JARDINS",
      LOGRADOURO: "R. Augusta",
      ID: "277",
      FOTO: "https://s3.us-east-2.amazonaws.com/epm-blue/eshows/T_COMPANIES/277/638386993314032718_tb_jardins.png",
    },
    {
      LATITUDE: "-23.5490819019541",
      LONGITUDE: "-46.5675271588211",
      NAME: "Seu Justino Tatuapé",
      LOGRADOURO: "R. Azevedo Soares, 940",
      ID: "278",
      FOTO: "https://s3.us-east-2.amazonaws.com/epm-blue/eshows/T_COMPANIES/278/638439593005754719_agenda12.png.png",
    },
    {
      LATITUDE: "-21.1948096302031",
      LONGITUDE: "-47.8093000877934",
      NAME: "Tatu Bola - RIBEIRÃO PRETO",
      LOGRADOURO: "Av. Itatiaia",
      ID: "279",
      FOTO: "https://s3.us-east-2.amazonaws.com/epm-blue/eshows/T_COMPANIES/279/638203611875182850_logotatu.png.png",
    },
    {
      LATITUDE: "-23.5663316281667",
      LONGITUDE: "-46.6516711588206",
      NAME: "Eu Tu Eles - PAULISTA",
      LOGRADOURO: "Alameda Joaquim Eugênio de Lima",
      ID: "280",
      FOTO: "https://s3.us-east-2.amazonaws.com/epm-blue/eshows/T_COMPANIES/280/637980885977411778_ETE.png",
    },
    {
      LATITUDE: "-23.6778595485228",
      LONGITUDE: "-46.5563844109501",
      NAME: "Tatu Bola - SÃO BERNARDO",
      LOGRADOURO: "Av. Kennedy",
      ID: "281",
      FOTO: "https://s3.us-east-2.amazonaws.com/epm-blue/eshows/T_COMPANIES/281/638203643148025899_logotatu.png.png",
    },
    {
      LATITUDE: "-22.9856519452103",
      LONGITUDE: "-43.2282586589134",
      NAME: "Boteco Boa Praça - LEBLON",
      LOGRADOURO: "Rua Dias Ferreira",
      ID: "283",
      FOTO: "https://s3.us-east-2.amazonaws.com/epm-blue/eshows/T_COMPANIES/283/637976554138003832_BP.png",
    },
    {
      LATITUDE: "-23563522",
      LONGITUDE: "-46652687",
      NAME: "Banco do Brasil",
      LOGRADOURO: "Avenida Paulista, 1230",
      ID: "284",
      FOTO: null,
    },
    {
      LATITUDE: "-23.5569610166893",
      LONGITUDE: "-46.6870455183375",
      NAME: "Seu Justino Vila Madalena",
      LOGRADOURO: "Rua Harmonia, 77",
      ID: "285",
      FOTO: "https://s3.us-east-2.amazonaws.com/epm-blue/eshows/T_COMPANIES/285/638430995125006504_SemTtulo1.png.png",
    },
    {
      LATITUDE: "-23.6213879063276",
      LONGITUDE: "-46.6997393048416",
      NAME: "Coco Bambu Market Place",
      LOGRADOURO: "Av. Dr. Chucri Zaidan",
      ID: "288",
      FOTO: "https://s3.us-east-2.amazonaws.com/epm-blue/eshows/T_COMPANIES/288/637829487173130564_cocoBambu.png",
    },
    {
      LATITUDE: "-23.5578605459618",
      LONGITUDE: "-46.6898979334239",
      NAME: "Boteco São Vicente",
      LOGRADOURO: "R. Fradique Coutinho,1048",
      ID: "292",
      FOTO: null,
    },
    {
      LATITUDE: "-23.5895347808395",
      LONGITUDE: "-46.6795861030745",
      NAME: "Motirô",
      LOGRADOURO: "R. Soares de Barros",
      ID: "293",
      FOTO: "https://s3.us-east-2.amazonaws.com/epm-blue/eshows/T_COMPANIES/293/638315819900340219_RP44oRBRR6aNMmD5T1F2Sj5dS38f2FcdBy7q.jfif.jfif",
    },
    {
      LATITUDE: "-23.6125346374845",
      LONGITUDE: "-46.7136941006044",
      NAME: "Fazenda Churrascada",
      LOGRADOURO: "Av. Morumbi",
      ID: "295",
      FOTO: "https://s3.us-east-2.amazonaws.com/epm-blue/eshows/T_COMPANIES/295/637829553073310190_Fazenda_Churrascada.png",
    },
    {
      LATITUDE: "-22559955",
      LONGITUDE: "-47416957",
      NAME: "40tão Chopp",
      LOGRADOURO:
        "Norte Avenida Dr. Fabrício Vampré - Jardim Piratininga, Limeira - SP, Brasil",
      ID: "298",
      FOTO: null,
    },
    {
      LATITUDE: "-23.5579681515713",
      LONGITUDE: "-46.6892843145824",
      NAME: "Bar do Urso - Vl Madalena ",
      LOGRADOURO: "R. Fradique Coutinho,1064",
      ID: "300",
      FOTO: null,
    },
    {
      LATITUDE: "-15.7202722733868",
      LONGITUDE: "-47.8854633052367",
      NAME: "Coco Bambu Iguatemi Brasília",
      LOGRADOURO: "ST, Shin Ca 2, 04 - Bloco A - Lago Norte",
      ID: "301",
      FOTO: "https://s3.us-east-2.amazonaws.com/epm-blue/eshows/T_COMPANIES/301/637829487477111372_cocoBambu.png",
    },
    {
      LATITUDE: "-15.8367934196449",
      LONGITUDE: "-48.0393202820958",
      NAME: "Restaurante Same Same ",
      LOGRADOURO: "R T48  Q L 18 - setor oeste",
      ID: "302",
      FOTO: "https://s3.us-east-2.amazonaws.com/epm-blue/eshows/T_COMPANIES/302/637829595852868484_Same_Same.png",
    },
    {
      LATITUDE: "-23.4967135080739",
      LONGITUDE: "-46.8509964508451",
      NAME: "Espetto Carioca Alphaville",
      LOGRADOURO: "Praça das Orquídeas",
      ID: "303",
      FOTO: "https://s3.us-east-2.amazonaws.com/epm-blue/eshows/T_COMPANIES/303/637829552183957482_Espetto_Carioca__1_.png",
    },
    {
      LATITUDE: "-23.5552382270528",
      LONGITUDE: "-46.6886354913388",
      NAME: "Boteco Belmonte - Vila Madalena",
      LOGRADOURO: "R. Girassol",
      ID: "304",
      FOTO: "https://s3.us-east-2.amazonaws.com/epm-blue/eshows/T_COMPANIES/304/637829688695162010_Boteco_Belmonte.png",
    },
    {
      LATITUDE: "-23.5734610488704",
      LONGITUDE: "-46.6227828355193",
      NAME: "Celeiro da Carne",
      LOGRADOURO: "R. Robertson",
      ID: "305",
      FOTO: "https://s3.us-east-2.amazonaws.com/epm-blue/eshows/T_COMPANIES/305/638066363976279511_Logo_Celeiro_da_Carne.png",
    },
    {
      LATITUDE: "-23.489231680701",
      LONGITUDE: "-46.6307620232925",
      NAME: "Matsuya - Mandaqui",
      LOGRADOURO: "Rua Dona Luiza Tolle,79",
      ID: "307",
      FOTO: "https://s3.us-east-2.amazonaws.com/epm-blue/eshows/T_COMPANIES/307/637957403312147960_matsuya_logo1_1567465251173.png",
    },
    {
      LATITUDE: "-23.6353818105951",
      LONGITUDE: "-46.7337774872633",
      NAME: "Matsuya - Panamby",
      LOGRADOURO: "R. Germano Ulbrich,17",
      ID: "308",
      FOTO: "https://s3.us-east-2.amazonaws.com/epm-blue/eshows/T_COMPANIES/308/637957403435974726_matsuya_logo1_1567465251173.png",
    },
    {
      LATITUDE: "-15.8382013340211",
      LONGITUDE: "-48.0555146087064",
      NAME: "Ô Bahea",
      LOGRADOURO: "QSB 08 SETOR B LOTE 40 LOJA 02",
      ID: "309",
      FOTO: null,
    },
    {
      LATITUDE: "-23.5939304288222",
      LONGITUDE: "-46.6799733225281",
      NAME: "Trabuca Prainha",
      LOGRADOURO: "Av. Brg. Faria Lima,4433",
      ID: "310",
      FOTO: "https://s3.us-east-2.amazonaws.com/epm-blue/eshows/T_COMPANIES/310/637829698665876297_Trabuca.png",
    },
    {
      LATITUDE: "-23.6239829094349",
      LONGITUDE: "-46.6975534607446",
      NAME: "Boteco Boa Praça - MORUMBI",
      LOGRADOURO: "R. Oscar Rodrigues Cajado Filho",
      ID: "311",
      FOTO: "https://s3.us-east-2.amazonaws.com/epm-blue/eshows/T_COMPANIES/311/637976553716954552_BP.png",
    },
    {
      LATITUDE: "-23566137",
      LONGITUDE: "-46711906",
      NAME: "Travel Idea Empresas de Turismo",
      LOGRADOURO:
        "R. Alvarenga, 1777 - Butantã, São Paulo - SP, 05509-005, Brasil",
      ID: "312",
      FOTO: null,
    },
    {
      LATITUDE: "-23.5586789236521",
      LONGITUDE: "-46.6905416011505",
      NAME: "Quintal do Espeto - VILA MADALENA",
      LOGRADOURO: "R. Mourato Coelho",
      ID: "313",
      FOTO: "https://s3.us-east-2.amazonaws.com/epm-blue/eshows/T_COMPANIES/313/638387000459041731_qe_vila_mada.jpg",
    },
    {
      LATITUDE: "-23.5977602463199",
      LONGITUDE: "-46.6611720588975",
      NAME: "Royal Enfield São Paulo",
      LOGRADOURO: "Av. República do Líbano,2099",
      ID: "314",
      FOTO: null,
    },
    {
      LATITUDE: "-23.6784319260689",
      LONGITUDE: "-46.6985211011481",
      NAME: "Coco Bambu SP Market",
      LOGRADOURO: " Av. das Nações Unidas",
      ID: "315",
      FOTO: "https://s3.us-east-2.amazonaws.com/epm-blue/eshows/T_COMPANIES/315/637829487591107707_cocoBambu.png",
    },
    {
      LATITUDE: "-23.443134930491265",
      LONGITUDE: "-46.53988700078544",
      NAME: "Coco Bambu Guarulhos",
      LOGRADOURO: "Av. Bartolomeu de Carlos",
      ID: "316",
      FOTO: "https://s3.us-east-2.amazonaws.com/epm-blue/eshows/T_COMPANIES/316/637829487745673088_cocoBambu.png",
    },
    {
      LATITUDE: "-27.6121052103925",
      LONGITUDE: "-48.5964656691888",
      NAME: "Matsuya - Floripa",
      LOGRADOURO: "R. Plácido de Castro,277",
      ID: "317",
      FOTO: "https://s3.us-east-2.amazonaws.com/epm-blue/eshows/T_COMPANIES/317/637957403531622197_matsuya_logo1_1567465251173.png",
    },
    {
      LATITUDE: "-23.5901063044941",
      LONGITUDE: "-46.6830318333059",
      NAME: "Trabuca JK",
      LOGRADOURO: "Av. Pres. Juscelino Kubitschek",
      ID: "318",
      FOTO: "https://s3.us-east-2.amazonaws.com/epm-blue/eshows/T_COMPANIES/318/637829698870870160_Trabuca.png",
    },
    {
      LATITUDE: "-23.3143366401202",
      LONGITUDE: "-51.1691080895879",
      NAME: "Matsuya - Londrina",
      LOGRADOURO: "R. Pará,1825",
      ID: "319",
      FOTO: "https://s3.us-east-2.amazonaws.com/epm-blue/eshows/T_COMPANIES/319/637957403638459381_matsuya_logo1_1567465251173.png",
    },
    {
      LATITUDE: "-22.986762881644",
      LONGITUDE: "-43.1971348990253",
      NAME: "Boteco Boa Praça - IPANEMA",
      LOGRADOURO: "Av. Vieira Souto",
      ID: "320",
      FOTO: "https://s3.us-east-2.amazonaws.com/epm-blue/eshows/T_COMPANIES/320/637976552698721776_BP.png",
    },
    {
      LATITUDE: "-23.6667402548716",
      LONGITUDE: "-46.5353945802691",
      NAME: "Coco Bambu Santo André",
      LOGRADOURO: "Av. Portugal",
      ID: "321",
      FOTO: "https://s3.us-east-2.amazonaws.com/epm-blue/eshows/T_COMPANIES/321/637829487849010259_cocoBambu.png",
    },
    {
      LATITUDE: "-23.5584915963377",
      LONGITUDE: "-46.6599919742401",
      NAME: "Blue Note São Paulo",
      LOGRADOURO: "Av. Paulista",
      ID: "322",
      FOTO: "https://s3.us-east-2.amazonaws.com/epm-blue/eshows/T_COMPANIES/322/637829550336833903_Blue_Note.png",
    },
    {
      LATITUDE: "-23.4957268952011",
      LONGITUDE: "-46.6116095455443",
      NAME: "Poderoso Lounge Bar",
      LOGRADOURO: "Av. Luiz Dumont Villares, 699",
      ID: "323",
      FOTO: null,
    },
    {
      LATITUDE: "-23.5730096467173",
      LONGITUDE: "-46.6962906606667",
      NAME: "Coco Bambu Conceito Eldorado",
      LOGRADOURO: "Avenida Rebouças",
      ID: "326",
      FOTO: "https://s3.us-east-2.amazonaws.com/epm-blue/eshows/T_COMPANIES/326/637829488013984799_cocoBambu.png",
    },
    {
      LATITUDE: "-23.6119918125603",
      LONGITUDE: "-46.6181217607448",
      NAME: "Matsuya - Saúde",
      LOGRADOURO: "Av. Bosque da Saúde,2175",
      ID: "327",
      FOTO: "https://s3.us-east-2.amazonaws.com/epm-blue/eshows/T_COMPANIES/327/637957403743996632_matsuya_logo1_1567465251173.png",
    },
    {
      LATITUDE: "-27.5895909517842",
      LONGITUDE: "-48.5143775493276",
      NAME: "Coco Bambu Florianópolis",
      LOGRADOURO: "Shopping Iguatemi -  Av. Me. Benvenuta",
      ID: "328",
      FOTO: "https://s3.us-east-2.amazonaws.com/epm-blue/eshows/T_COMPANIES/328/637829488223158376_cocoBambu.png",
    },
    {
      LATITUDE: "-23.5552228270276",
      LONGITUDE: "-46.6629328319109",
      NAME: "Riviera Bar",
      LOGRADOURO: "Av. Paulista,2584",
      ID: "329",
      FOTO: "https://s3.us-east-2.amazonaws.com/epm-blue/eshows/T_COMPANIES/329/637829543479244297_Riviera.png",
    },
    {
      LATITUDE: "-3.7344221004200",
      LONGITUDE: "-38.4915137455759",
      NAME: "Moleskine Gastrobar e Sótão Moleskine",
      LOGRADOURO: "Rua Professor Dias da Rocha, 578",
      ID: "331",
      FOTO: "https://s3.us-east-2.amazonaws.com/epm-blue/eshows/T_COMPANIES/331/637829591429114275_Moleskine.png",
    },
    {
      LATITUDE: "-22.9783713120879",
      LONGITUDE: "-43.1886665447973",
      NAME: "Quiosque Solaris",
      LOGRADOURO: "Av. Atlântica,35/36 ",
      ID: "338",
      FOTO: null,
    },
    {
      LATITUDE: "-23.5584934715665",
      LONGITUDE: "-46.6640827943942",
      NAME: "Trabuca Jardins",
      LOGRADOURO: "Rua Haddock Lobo,870",
      ID: "340",
      FOTO: "https://s3.us-east-2.amazonaws.com/epm-blue/eshows/T_COMPANIES/340/637829699036194948_Trabuca.png",
    },
    {
      LATITUDE: "-23.0127558098597",
      LONGITUDE: "-43.3050417165836",
      NAME: "Boteco Boa Praça - BARRA DA TIJUCA",
      LOGRADOURO: "Av. Olegário Maciel",
      ID: "341",
      FOTO: "https://s3.us-east-2.amazonaws.com/epm-blue/eshows/T_COMPANIES/341/637976551679048233_BP.png",
    },
    {
      LATITUDE: "-23.5318256062894",
      LONGITUDE: "-46.6851352318324",
      NAME: "Quintal do Espeto - POMPÉIA PERDIZES",
      LOGRADOURO: "R. Cotoxó",
      ID: "342",
      FOTO: "https://s3.us-east-2.amazonaws.com/epm-blue/eshows/T_COMPANIES/342/637829554511226061_Quintal_do_Espeto.png",
    },
  ];
  const { control } = useForm();
  const theme = useTheme();
  return (
    <Container>
      <Content>
        <MapView
          initialRegion={{
            latitude: -23.542304373355034,
            longitude: -46.64060387540616,
            latitudeDelta: 0.004,
            longitudeDelta: 0.005,
          }}
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          {companies.map((item) => (
            <Marker
              onSelect={() => setSelectedCompany(item)}
              coordinate={{
                latitude: Number(item.LATITUDE),
                longitude: Number(item.LONGITUDE),
              }}
            >
              <CustomMarker key={item.ID} imageSource={item.FOTO} />
            </Marker>
          ))}
        </MapView>
        <Top>
          <Input
            control={control}
            name="search"
            style={{ backgroundColor: theme.colors.background }}
            placeholder="Busque por um espaço"
            Icon={<MagnifyingGlass color={theme.colors.main} weight="bold" />}
          />
        </Top>
        <Bottom>
          {selectedCompany?.ID && (
            <Animated.View entering={SlideInDown} key={selectedCompany.ID}>
              <CompanyCard data={selectedCompany} />
            </Animated.View>
          )}
        </Bottom>
      </Content>
    </Container>
  );
}

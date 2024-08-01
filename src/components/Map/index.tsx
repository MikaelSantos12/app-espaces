import MapView from "react-native-map-clustering";
import { Marker } from "react-native-maps";

import { Input } from "@/components/Input";
import { useLocation } from "@/context/LocationContext";
import { CompanyListDTO } from "@/dtos/ListDetailsDTO";
import { MagnifyingGlass } from "phosphor-react-native";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useTheme } from "styled-components/native";
import { CustomMarker } from "./Marker";
import { Bottom, Container, Content, Top } from "./styles";
interface Props {
  companies: CompanyListDTO[];
  search?: boolean;
}
export function Map({ companies, search = false }: Props) {
  const [selectedCompany, setSelectedCompany] = useState({});
  const { location } = useLocation();
  const { control } = useForm();
  const theme = useTheme();

  return (
    <Container>
      <Content>
        <MapView
          initialRegion={{
            latitude: location?.coords.latitude as number,
            longitude: location?.coords.longitude as number,
            latitudeDelta: 0.5,
            longitudeDelta: 0.5,
          }}
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          {!!location.coords.latitude && (
            <Marker
              onSelect={() => {}}
              coordinate={{
                latitude: location?.coords.latitude as number,
                longitude: location?.coords.longitude as number,
              }}
            />
          )}

          {companies.map((item, i) => (
            <Marker
              key={i}
              onSelect={() => setSelectedCompany(item)}
              coordinate={{
                latitude: Number(item.lat),
                longitude: Number(item.lng),
              }}
            >
              <CustomMarker imageSource={item.photo} />
            </Marker>
          ))}
        </MapView>
        {search && (
          <Top>
            <Input
              control={control}
              name="search"
              style={{ backgroundColor: theme.colors.background }}
              placeholder="Busque por um espaço"
              Icon={<MagnifyingGlass color={theme.colors.main} weight="bold" />}
            />
          </Top>
        )}

        <Bottom></Bottom>
      </Content>
    </Container>
  );
}

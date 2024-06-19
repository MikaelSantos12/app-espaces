import React, { useCallback } from "react";

import { X } from "phosphor-react-native";
import { useState } from "react";
import { Dimensions } from "react-native";
import {
  GooglePlaceData,
  GooglePlaceDetail,
  GooglePlacesAutocomplete,
} from "react-native-google-places-autocomplete";
import { useTheme } from "styled-components";
import { ClearButton, Label, LocationText, RenderRow, Wrapper } from "./styles";

export type AutocompleteData = {
  street?: string | number | undefined | null;
  number?: string | number | undefined | null;
  city?: string | number | undefined | null;
  country?: string | number | undefined | null;
  district?: string | number | undefined | null;
  state?: string | number | undefined | null;
  address?: string | number | undefined | null;
  latitude?: string | number | undefined | null;
  longitude?: string | number | undefined | null;
};

type Props = {
  placeholder: string;
  label?: string;
  handlePress: (values: AutocompleteData) => void;
  handleClear?: () => void;
};

const InputAutocomplete = ({
  placeholder,
  label,
  handlePress,
  handleClear,
}: Props) => {
  const [field, setField] = useState<string | undefined | null>();
  const [isFocused, setIsFocused] = useState(false);

  const theme = useTheme();

  const styles = {
    container: {
      flex: 0,
      zIndex: 2,
    },
    textInput: {
      width: 300,
      paddingLeft: 16,
      borderWidth: 1,
      borderColor: isFocused ? theme?.colors?.main : theme?.colors?.text,
      borderRadius: 8,
      zIndex: 2,
      backgroundColor: `${theme.colors.background}`,
      height: 56,
      fontWeight: "400",
      color: theme?.colors?.text,
    },
    listView: {
      left: -16,

      width: Dimensions.get("window").width,
      borderBottomWidth: 1,
      borderColor: theme?.colors?.card,
    },
    separator: {
      backgroundColor: "transparent",
    },
    row: {
      paddingVertical: 8,
      paddingHorizontal: 16,
      zIndex: 2,
      backgroundColor: theme?.colors?.background,
    },
  };

  const handleSelect = useCallback(
    (data: GooglePlaceData, details: GooglePlaceDetail | null) => {
      const addressData = details.address_components;

      const state = addressData.filter((item) =>
        item.types.includes("administrative_area_level_1")
      );

      const city = addressData.filter(
        (item) =>
          item.types.includes("administrative_area_level_2") ||
          item.types.includes("locality")
      );

      const country = addressData.filter((item) =>
        item.types.includes("country")
      );

      const district = addressData.filter((item) =>
        item.types.includes("sublocality")
      );

      const street = addressData.filter((item) => item.types.includes("route"));

      const number = addressData.filter((item) =>
        item.types.includes("street_number")
      );

      const payload = {
        street: street.length >= 1 ? street[0].long_name : "",
        number: number.length >= 1 ? number[0].short_name : "",
        city: city.length >= 1 ? city[0].short_name : "",
        country: country.length >= 1 ? country[0].short_name : "",
        district: district.length >= 1 ? district[0].short_name : "",
        state: state.length >= 1 ? state[0].short_name : "",
        address: data.description,
        latitude: details.geometry.location.lat,
        longitude: details.geometry.location.lng,
      };

      handlePress(payload);
      handlePress(payload);
    },
    []
  );

  const handleClearField = () => {
    setField();

    if (handleClear) {
      handleClear();
    }
  };

  return (
    <Wrapper>
      <Label>{label}</Label>
      {!!field && (
        <ClearButton onPress={handleClearField}>
          <X />
        </ClearButton>
      )}
      <GooglePlacesAutocomplete
        placeholder={placeholder}
        query={{
          key: "AIzaSyDnJKj9q8Dn9O03tF33dMpDjDuNN_mzjz8",
          language: "pt-br",
          components: "country:br",
          types: ["(cities)"],
        }}
        renderRow={(data) => {
          return (
            <RenderRow>
              <LocationText>{data.description}</LocationText>
            </RenderRow>
          );
        }}
        onPress={handleSelect}
        isRowScrollable={false}
        enablePoweredByContainer={false}
        fetchDetails={true}
        keepResultsAfterBlur={false}
        textInputProps={{
          placeholderTextColor: theme?.colors?.text,
          returnKeyType: "search",
          onFocus: () => setIsFocused(true),
          onBlur: () => setIsFocused(false),
        }}
        styles={styles}
      />
    </Wrapper>
  );
};

export default InputAutocomplete;

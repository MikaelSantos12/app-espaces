import { Header } from "@/components/Header";
import Ambients from "./Ambients";
import Banners from "./Banners";
import Bio from "./Bio";
import GridButtons from "./GridButtons";
import ToogleArea from "./ToogleArea";
import { CompanyInfo } from "./data";
import * as C from "./styles";

export const Company = () => {
  return (
    <C.Container>
      <Header title="Bar brahma" />
      <C.Content>
        <Bio data={CompanyInfo.bio} />
        <C.Separator />
        <GridButtons data={CompanyInfo.links} />
        <C.Separator />
        <Banners data={CompanyInfo.banners} />
        <ToogleArea data={CompanyInfo.events} />
        <C.Separator />
        <Ambients data={CompanyInfo.ambients} />
      </C.Content>
    </C.Container>
  );
};

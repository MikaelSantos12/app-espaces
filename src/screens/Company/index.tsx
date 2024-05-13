import * as C from "./styles";
import { Header } from "@/components/Header";
import Bio from "./Bio";
import Banners from "./Banners";
import Ambients from "./Ambients";
import ToogleArea from "./ToogleArea";
import GridButtons from "./GridButtons";
import { CompanyInfo } from "./data";

export const Company = () => {
  return (
    <C.Container>
      <Header />
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

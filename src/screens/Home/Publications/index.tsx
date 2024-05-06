import { PublicationActions } from "./PublicationActions";
import { PublicationDescription } from "./PublicationDescription";
import { PublicationHeader } from "./PublicationHeader";
import { PublicationImage } from "./PublicationImage";
import { PublicationRoot } from "./PublicationRoot";
interface Props {}

export const Publication = {
  Root: PublicationRoot,
  Header: PublicationHeader,
  Description: PublicationDescription,
  Image: PublicationImage,
  Actions: PublicationActions,
};

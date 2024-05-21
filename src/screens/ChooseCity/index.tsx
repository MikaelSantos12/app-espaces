import { Header } from '@/components/Header'
import * as C from "./styles";
import { Dropdown } from '@/components/Dropdown'

export const ChooseCity = () => {
  return (
    <C.Container>
      <Header logoOnly />
      <C.Title>Escolha uma cidade</C.Title>
      <Dropdown />
    </C.Container>
  )
}
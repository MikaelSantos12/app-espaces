import { Plus } from 'phosphor-react-native';
import * as C from './styles'
import { ToogleAreaProps } from '..';

const Event = ({ data }: { data: ToogleAreaProps }) => {
  return (
    <C.Container activeOpacity={0.8}>
      <C.Avatar
        source={{
          uri: "https://eshows.com.br/_next/image?url=https%3A%2F%2Fs3.us-east-2.amazonaws.com%2Fepm-blue%2Feshows%2FT_ATRACOES%2F1505%2F638230607572053170_perfil.png&w=1920&q=50",
        }}
      />
      <C.Column>
        <C.Text size="16px">{data.title}</C.Text>
        <C.Text size="12px">{data.space}</C.Text>

        <C.TagsArea>
          {data.tags.map((tag, key) => (
            <C.Tag key={key}>
              <C.Text color="#fff">{tag}</C.Text>
            </C.Tag>
          ))}
          <Plus size={20} weight="bold" />
        </C.TagsArea>
      </C.Column>

      <C.DateArea>
        <C.TagsArea>
          <C.Bullet />
          <C.Bullet />
          <C.Bullet />
        </C.TagsArea>
        <C.TagsArea>
          <C.Bullet />
          <C.Bullet />
          <Plus size={20} weight="bold" />
        </C.TagsArea>
        <C.Text mt="10px">{data.date}</C.Text>
        <C.Text size="20px">{data.hour}</C.Text>
      </C.DateArea>
    </C.Container>
  );
};

export default Event
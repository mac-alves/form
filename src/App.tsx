import React from 'react';
import { 
  Container, 
  Submit, 
  Form,
  Files,
  Fields,
  Camps,
  Footer
} from './styles';
import GlobalStyle from './styles/global';
import Input from './components/Form/Input';
import File from './components/Form/File';
import FileImg from './components/Form/FileImg';
import Radio from './components/Form/Radio';
import CheckBox from './components/Form/CheckBox';
import Slider from './components/Form/Slider';

const App: React.FC = () => {

  const options = [
    { label: "Homem", value: "M" },
    { label: "Mulher", value: "F" }
  ]

  function handleSubmit(data: object) {
    console.log(data);
  }

  return (
    <Container>
      <GlobalStyle />
      <Form onSubmit={handleSubmit}>
        <Files>
          <FileImg name="img" accept="image/png, image/jpeg, image/jpg" />
          <File name="arquivos" />
        </Files>
        <Fields>
          <Input name="name" type="text" />
          <Input name="email" type="email" />
          <Camps>
            <Input name="password" type="password" />
            <Slider name="range" />
          </Camps>
          <Camps>
            <Radio name="radio" options={options} />
          </Camps>
          {/* <CheckBox /> */}
        </Fields>
        <Footer>
          <Submit>Salvar</Submit>
        </Footer>
      </Form>
    </Container>
  );
}

export default App;

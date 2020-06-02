import React from 'react';
import { 
  Container, 
  Submit, 
  Form,
  Files,
  Camps,
  Footer
} from './styles';
import GlobalStyle from './styles/global';
import Input from './components/Input';
import File from './components/File';
import FileImg from './components/FileImg';
import Radio from './components/Radio';
import CheckBox from './components/CheckBox';

const App: React.FC = () => {

  function handleSubmit(data: object) {
    console.log(data);
  }

  return (
    <Container>
      <GlobalStyle />
      <Form onSubmit={handleSubmit}>
        <Files>
          <FileImg name="img" />
          <File />
        </Files>
        <Camps>
          <Input name="name" type="text" />
          <Input name="email" type="email" />
          <Input name="password" type="password" />
          {/* <Radio /> */}
          {/* <CheckBox /> */}
        </Camps>
        <Footer>
          <Submit>Salvar</Submit>
        </Footer>
      </Form>
    </Container>
  );
}

export default App;

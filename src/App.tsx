import React, { useRef, useState } from 'react';
import { 
  Container, 
  Submit, 
  Form,
  Files,
  Fields,
  Camps,
  Footer,
  Msg
} from './styles';
import GlobalStyle from './styles/global';

import Input from './components/Form/Input';
import File from './components/Form/File';
import FileImg from './components/Form/FileImg';
import Radio from './components/Form/Radio';
import CheckBox from './components/Form/CheckBox';
import Slider from './components/Form/Slider';

import * as Yup from 'yup';
import { CustomErrorForm } from './errors';

interface FormFilds {
  arquivos: File | undefined;
  checkbox: boolean;
  email: string
  img: File | undefined;
  name: string
  password: string
  radio: string
  range: string
}

const options = [
  { label: "Homem", value: "M" },
  { label: "Mulher", value: "F" }
]

const App: React.FC = () => {
  const formRef = useRef(null);
  const [ confirm, setConfirm ] = useState(false);

  async function handleSubmit(data: FormFilds) {
    ( formRef as any).current.setErrors({});
    
    try {
      // validateFile(data.arquivos, 'arquivos', 'Arquivos obrigatorios');
      // validateFile(data.img, 'img', 'Imagem obrigatoria');
      
      const schema = Yup.object().shape({
          email: Yup.string()
                    .required('Campo obrigatório')
                    .email('Email invalido'),
          name: Yup.string()
                   .required('Campo obrigatório')        
                   .min(3, 'Nome muito curto'),
          password: Yup.string()
                       .required('Campo obrigatório') 
                       .min(6, 'Senha deve conter entre 6 e 8 caracteres')
                       .max(8, 'Senha deve conter entre 6 e 8 caracteres'),
          radio: Yup.string()
                    .required('Campo obrigatório')
      });

      
      await schema.validate(data, {
        abortEarly: false,
      });

      console.log(data);
      setConfirm(true);

    } catch (err) {
      const validationErrors: any = {};

      if (err instanceof CustomErrorForm) {
          validationErrors[err.name] = err.message;
          ( formRef as any).current.setErrors(validationErrors);
      }

      if (err instanceof Yup.ValidationError) {
          err.inner.forEach(error => {                    
              validationErrors[error.path] = error.message;
          });
          ( formRef as any).current.setErrors(validationErrors);
      }
    }
  }

  // function validateFile(file: any, path: string, msg: string): boolean{
  //   if (file) return true;
  //   throw new CustomErrorForm(path, msg);
  // }

  return (
    <Container>
      <GlobalStyle />
      <Form onSubmit={handleSubmit} ref={formRef}>
        <Files>
          <FileImg name="img" accept="image/png, image/jpeg, image/jpg" />
          <File name="arquivos" />
        </Files>
        <Fields>
          <Input name="name" type="text" placeholder="Nome" />
          <Input name="email" type="text" placeholder="Email"/>
          <Input name="password" type="password" placeholder="Senha" />
          <Slider name="range" />
          <Camps>
            <Radio name="radio" options={options} />
            <CheckBox name="checkbox" label="Pandora" />
          </Camps>
        </Fields>
        <Footer>
          <Msg>{confirm && 'Dados Enviados'}</Msg>
          <Submit>Salvar</Submit>
        </Footer>
      </Form>
    </Container>
  );
}

export default App;

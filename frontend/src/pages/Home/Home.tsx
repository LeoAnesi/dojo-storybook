import * as React from 'react';
import { Field, withFormik } from 'formik';
import {
  HomeContainer,
  Logo,
  Title,
  HowTo,
  DescriptionLine,
  DescriptionList,
  InputsForm,
  LoginButton
} from './Home.style';
import InputRow from 'components/InputRow';
import logo from 'assets/storybook-logo.svg';

const Home: React.FunctionComponent = () => (
  <HomeContainer>
    <Logo alt="forgelogo" src={logo} />
    <Title>Bienvenue à cette introduction à StoryBook</Title>
    <HowTo>
      Aujourd'hui nous allons :
      <DescriptionList>
        <DescriptionLine>
          Installer Storybook sur ce projet
        </DescriptionLine>
        <DescriptionLine>
          Créer des stories de base sur les composants plus bas
        </DescriptionLine>
        <DescriptionLine>
          Ajouter des plugins à Storybook pour en faire encore plus
        </DescriptionLine>
      </DescriptionList>
      <InputsForm>
        <Field
          type="text"
          name="Error field"
          label="Error field"
          component={InputRow}
          error="That's an awfull error"
        />
        <Field
          type="password"
          name="Normal field"
          label="Normal field"
          placeholder="Hey there I'm a placeholder"
          component={InputRow}
        />
        <LoginButton>
          Button
        </LoginButton>
        <LoginButton disabled>
          Disabled button
        </LoginButton>
      </InputsForm>
    </HowTo>
  </HomeContainer>
);

export default withFormik({
  mapPropsToValues: () => ({}),
  validate: () => { },
  handleSubmit: () => { },
})(Home);

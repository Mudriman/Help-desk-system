import React, { useContext } from "react";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  LineText,
  MutedLink,
  SubmitButton,
} from "./common";
import { Marginer } from "../../components/marginer";
import { AccountContext } from './accountContext';

export function LoginForm(props) {

  const { switchToSignup } = useContext(AccountContext);

  return (
    <BoxContainer>
      <FormContainer>
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Пароль" />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <MutedLink href="#">Забыли пароль?</MutedLink>
      <Marginer direction="vertical" margin="1.6em" />
      <SubmitButton type="submit">Войти</SubmitButton>
      <Marginer direction="vertical" margin="5px" />
      <LineText>
        У вас еще нет аккаунта?{" "}
        <BoldLink onClick={switchToSignup} href="#">
          Регистрация
        </BoldLink>
      </LineText>
    </BoxContainer>
  );
}
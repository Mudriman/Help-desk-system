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
import { AuthContext } from '../../context';

export function SignupForm(props) {

  const { switchToSignin } = useContext(AccountContext);

  const {isAuth, setIsAuth} =useContext(AuthContext);
    const login = event => {
        event.preventDefault();
        setIsAuth(true);
        localStorage.setItem('auth', 'true')
  }
  return (
    <BoxContainer>
      <FormContainer>
        <Input type="text" placeholder="Полное имя" />
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Пароль" />
        <Input type="password" placeholder="Повторите пароль" />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <SubmitButton type="submit" onClick={login} >Регистрация</SubmitButton>
      <Marginer direction="vertical" margin="5px" />
      <LineText>
        У вас уже есть аккаунт?{" "}
        <BoldLink onClick={switchToSignin} href="#">
          Войти
        </BoldLink>
      </LineText>
    </BoxContainer>
  );
}
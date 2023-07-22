import { CreateAccountContainer, Form } from "./styles"
import { Input } from "./Input"

export function LoginForm() {
  return (
    <Form>
      <Input
        label="E-mail"
        placeholder="Digite seu e-mail"
        type="email"
      />

      <Input
        label="Senha"
        placeholder="Digite sua senha"
        type="password"
      />

      <button type="submit">Entrar</button>

      <CreateAccountContainer>
        Ainda não tem uma conta?
        <a href="#"> Inscreva-se </a>
      </CreateAccountContainer>
    </Form>
  )
}
import { InputContainer } from "./styles";
import eyeOff from "../../../assets/eye-off.svg"
import eye from "../../../assets/eye.svg"
import { useState } from "react";

interface IInputProps {
  label: string,
  type: string,
  placeholder: string,
}

export function Input({ label, type, placeholder }: IInputProps) {

  const [isShowPassword, setIsShowPassword] = useState<boolean>(true)

  return (
    <InputContainer>
      <section>
        <label /* for="email" */>{label}</label>
        {type === 'password' && (
          <a href="#"> Esqueceu a senha? </a>
        )}
      </section>
      <input
        id={type}
        type={isShowPassword ? "password" : "text"}
        name={type}
        required
        placeholder={placeholder}
      />
      {type === 'password' && (
        isShowPassword === true
          ?
          <img
            onClick={() => setIsShowPassword(!isShowPassword)}
            className="eye"
            src={eyeOff}
            alt=""
          />
          :
          <img
            onClick={() => setIsShowPassword(!isShowPassword)}
            className="eye"
            src={eye}
            alt=""
          />
      )}
    </InputContainer>
  )
}
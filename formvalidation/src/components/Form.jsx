import { useState } from "react";
import FormInput from "./FormInput";
import { useNavigate } from 'react-router-dom';
import "./sigin.scss";


const Form = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "email",
      type: "email",
      errorMessage: "It should be a valid email address!",
      label: "your email address",
      required: true,
    },
    {
      id: 2,
      name: "password",
      type: "password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "your Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 3,
      name: "confirmPassword",
      type: "password",
      errorMessage: "Passwords don't match!",
      label: "confirm your password",
      pattern: values.password,
      required: true,
    },
    {
      id: 4,
      name: "username",
      type: "text",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      label: "your username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 5,
      name: "phonenumber",
      type: "number",
      errorMessage: "It should be a valid phone number!",
      label: "your phone number",
      pattern: "^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im",
      required: true,

    },
  ];
  const navigate = useNavigate();

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };


  const [agree, setAgree] = useState(false);

  const checkboxHandler = () => {
    setAgree(!agree);
  }
  const handleSubmit = (e) => {
    console.log("hellooooo");
    e.preventDefault();
    navigate('/Chart');

  };


  return (
    <div className="form">
      <form onSubmit={handleSubmit} >
        <h1>Create an account</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}

        <div className="form__agree">
          <input type="checkbox" id="agree" onChange={checkboxHandler} />
          <label htmlFor="agree"> I agree to <b>terms and conditions</b></label>
        </div>

        <button className="form__button" disabled={!agree}  >
          Create account
        </button>
      </form>
    </div>
  );
};

export default Form;
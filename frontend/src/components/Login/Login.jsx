import { useState } from "react";
import {
  Container,
  Logo,
  Form,
  Input,
  Button,
  ErrorMessage,
  SignUpLink,
} from "./Login.styles";
import instagram from "../../assets/images/instagram-logo.png";
import { Link, useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");
  const handleChange = (e, key) => {
    let obj = { ...formData, [key]: e.target.value };
    setFormData(obj);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("formData", formData);
    const unfilledFields = Object.keys(formData).filter(
      (key) => !formData[key]
    );
    if (unfilledFields.length) {
      setError(`${unfilledFields.join(" ")} is required`);
      return;
    }
    console.log("ready to login");
    //Redirect to the home page
    navigate("/home");
  };

  return (
    <Container>
      <Logo src={instagram} alt="Instagram" />
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Username"
          value={formData.username}
          onChange={(e) => handleChange(e, "username")}
        />
        <Input
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={(e) => handleChange(e, "password")}
        />
        <Button type="submit">Sign In</Button>
      </Form>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <SignUpLink>
        Do not have an account? <Link to="/register">Sign up</Link>
      </SignUpLink>
    </Container>
  );
};

export default Login;

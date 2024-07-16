import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import TextInput from "./TestInput";
import Button from "./Button";
import axios from "axios";
import vbimage1 from "../assets/sign-up.png";

const OuterContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;

const ImageContainer = styled.div`
  width: 50%;
  height: 100%;
  background: url(${vbimage1}) no-repeat center center;
  background-size: cover;
`;

const FormContainer = styled.div`
  width: 50%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  gap: 36px;
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: 800;
  color: ${({ theme }) => theme.primary};
`;

const Span = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + 90};
`;

const SignUp = () => {
  const [loading, setLoading] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const validateInputs = () => {
    if (!name || !email || !password) {
      alert("Please fill in all fields");
      return false;
    }
    return true;
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (!validateInputs()) return;

    setLoading(true);
    setButtonDisabled(true);

    const values = {
      name,
      email,
      password,
    };

    try {
      const { data } = await axios.post("http://localhost:4000/signup", values);
      console.log(data);
      navigate("/success"); // Example of navigating to a success page
    } catch (err) {
      console.log(err);
      // Handle error (e.g., display error message)
    } finally {
      setLoading(false);
      setButtonDisabled(false);
    }
  };

  return (
    <OuterContainer>
      <ImageContainer />
      <FormContainer>
        <div>
          <Title>Create Your Account 👋</Title>
          <Span>Please enter details to create a new account</Span>
        </div>
        <div style={{ display: "flex", gap: "20px", flexDirection: "column" }}>
          <TextInput
            label="Full Name"
            placeholder="Enter your full name"
            value={name}
            handelChange={(e) => setName(e.target.value)}
          />
          <TextInput
            label="Email Address"
            placeholder="Enter your email address"
            value={email}
            handelChange={(e) => setEmail(e.target.value)}
          />
          <TextInput
            label="Password"
            placeholder="Enter your password"
            password
            value={password}
            handelChange={(e) => setPassword(e.target.value)}
          />
          <Button
            text="Sign Up"
            onClick={handleSignUp}
            isLoading={loading}
            isDisabled={buttonDisabled}
          />
        </div>
      </FormContainer>
    </OuterContainer>
  );
};

export default SignUp;

import React, { useState } from "react";
import styled from "styled-components";
import TextInput from "./TestInput";
import Button from "./Button";
import sign from '../assets/sign-up1.png'; // Adjust the path as necessary

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
  background: url(${sign}) no-repeat center center;
  background-size: cover;
`;

const FormContainer = styled.div`
  width: 50%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  gap: 36px;
  padding: 20px; // Optional: add padding to the form container
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

const SignIn = () => {
  const [buttonLoading, setButtonLoading] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const validateInputs = () => {
    if (!email || !password) {
      alert("Please fill in all fields");
      return false;
    }
    return true;
  };

  const handleSignIn = async () => {
    setButtonLoading(true);
    setButtonDisabled(true);
    if (validateInputs()) {
      try {
        // Call your sign-in API here
        // Example:
        // const res = await UserSignIn({ email, password });
        // Replace with your actual API call
        const res = { data: { /* Replace with your response */ } };

        // Dispatch actions (remove if not using Redux)
        // dispatch(loginSuccess(res.data));
        // dispatch(openSnackbar({ message: "Login Successful", severity: "success" }));

        alert("Login Successful"); // Replace with your snackbar or alert component

      } catch (err) {
        // Handle errors
        if (err.response) {
          alert(err.response.data.message);
          // dispatch(openSnackbar({ message: err.response.data.message, severity: "error" }));
        } else {
          alert(err.message);
          // dispatch(openSnackbar({ message: err.message, severity: "error" }));
        }
      } finally {
        setButtonLoading(false);
        setButtonDisabled(false);
      }
    } else {
      setButtonLoading(false);
      setButtonDisabled(false);
    }
  };

  return (
    <OuterContainer>
      <FormContainer>
        <div>
          <Title>Welcome to Sai Acaquirum 👋</Title>
          <Span>Please login with your details here</Span>
        </div>
        <div style={{ display: "flex", gap: "20px", flexDirection: "column" }}>
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
            text="Sign In"
            onClick={handleSignIn}
            isLoading={buttonLoading}
            isDisabled={buttonDisabled}
          />
        </div>
      </FormContainer>
      <ImageContainer />

    </OuterContainer>
  );
};

export default SignIn;

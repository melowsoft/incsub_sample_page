import React from "react";
import { Input } from "../Input";
import { Button } from "../Button";
import { OptionSelector } from "../OptionSelector";
import { Wrapper } from "./styles";
import { Steppers } from "../Steppers";

const RegisterScreen = () => {
  return (
    <Wrapper>
      <div className="right-col">
        <Steppers />
        <div className="form-wrapper">
          <h3 className="form-title">Let’s set up your account</h3>

          <p className="signin-info">
            Already have an account?{" "}
            <span className="signin-link">Sign in</span>
          </p>
          <Input placeholder="Your name" />
          <Input placeholder="Email Address" />
          <OptionSelector />

          <Input placeholder="Password" />
          <p className="info">Minimun 8 characters</p>

          <Button>Next</Button>

          <p className="terms">
            By clicking the “Next” button, you agree to creating a free account,
            and to <span className="link-style">Terms of Service</span> and{" "}
            <span className="link-style">Privacy Policy</span>.
          </p>
        </div>
      </div>

      <div className="left-col">
        <div>
          <h3 className="dummy-heading">Dummy Heading</h3>
          <p className="dummy-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
            eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </div>

    </Wrapper>
  );
};

export default RegisterScreen;

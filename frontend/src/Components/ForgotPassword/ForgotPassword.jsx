import e from "express";
import React, { useState } from "react";
import "./ForgotPassword";
import { Typography, Button } from "@mui/material";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const submitHandler = () => {
    e.preventDefault();
  };
  return (
    <div className="forgotPassword">
      <form className="forgotPasswordForm" onSubmit={submitHandler}>
        <Typography variant="h3" style={{ padding: "2vmax" }}>
          Social Aap
        </Typography>

        <input
          type="email"
          placeholder="Email"
          required
          className="forgotPasswordInputs"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Button type="submit">Send Token</Button>
      </form>
    </div>
  );
};

export default ForgotPassword;

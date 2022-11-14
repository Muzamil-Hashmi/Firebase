import React from "react";
import { TextField, Box } from "@mui/material";

export default function Forget({ updateEmail, setEmail, title }) {
  return (
    <div>
      <TextField
        id="email"
        label="email"
        type="email"
        variant="outlined"
        onChange={(e) => setEmail(e.target.value)}
      />
      <button className="btn btn-primary" onClick={updateEmail}>
        {title}
      </button>
    </div>
  );
}

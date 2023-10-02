import React, { FC, useState } from "react";

const LoginForm: FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <div>
      <input
        type="text"
        onChange={(e) => setEmail(e.currentTarget.value)}
        value={email}
        placeholder="email"
      />
      <input
        type="password"
        onChange={(e) => setPassword(e.currentTarget.value)}
        value={email}
        placeholder="password"
      />

      <button>Login</button>
      <button>Register </button>
    </div>
  );
};

export default LoginForm;

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import App from "./components/App";
import { SignInPage } from "./components/pages/singnIn";
import { SignUpPage } from "./components/pages/signUp";
import { ChangePasswordPage } from "./components/pages/changePassword";
import { WelcomePage } from "./components/pages/welcome";
import { Provider } from "react-redux";
import store from "./redux/store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/ciplay" element={<App />}>
            <Route index element={<WelcomePage />} />
            <Route path="/ciplay/signIn" element={<SignInPage />} />
            <Route path="/ciplay/signUp" element={<SignUpPage />} />
            <Route path="/ciplay/changePassword" element={<ChangePasswordPage />} />
            <Route path="*" element={<Navigate to={"/ciplay"} />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// React //
import React from "react";
import ReactDOM from "react-dom";

// React Router //
import { BrowserRouter as Router, Route } from "react-router-dom";

// Components //
import { homepage } from "../package.json";
import App from "./Components/App";
import reportWebVitals from './reportWebVitals';


// Recoil
import { RecoilRoot } from 'recoil';

// Styles //
import CalciteThemeProvider from "calcite-react/CalciteThemeProvider";
import { GlobalStyle } from "./styles/global";
import "./styles/fonts.css";

// App runs at the root locally, but under /{homepage} in production
let basename;
process.env.NODE_ENV !== "production" ? (basename = "") : (basename = homepage);


ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <Router>
      <CalciteThemeProvider>
        <GlobalStyle />
        <Route path="/" component={App} />
      </CalciteThemeProvider>
      </Router>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

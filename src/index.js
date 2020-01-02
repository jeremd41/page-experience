import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./style/styles.scss";
import Layout from "./component/Layout";
import Home from "./pages/Home";
import Profile from "./pages/Profile"
import ViewArticle from "./pages/ViewArticle";

function App() {
  return (
    <div className="App">
      <Router forceRefresh={false}>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/MyProfile" component={Profile} />
            <Route path="/article/:art_id" component={ViewArticle} />
          </Switch>
        </Layout>      
      </Router>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

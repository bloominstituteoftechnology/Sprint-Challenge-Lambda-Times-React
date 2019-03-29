import React, { Component } from "react";
import TopBar from "./components/TopBar";
import Header from "./components/Header";
import Content from "./components/Content/Content";
import withAuthenticate from "./authentication/withAuthenticate";

const Placeholder = () => {
  return <div>Please log in to view content</div>;
};

const ComponentFromWithAuthenticate = withAuthenticate(Content)(Placeholder);

const App = () => {
  return (
    <div className="App">
      <TopBar />
      <Header />
      <ComponentFromWithAuthenticate />
    </div>
  );
};

export default App;

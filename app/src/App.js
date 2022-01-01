import React from 'react'
import { Layout } from 'layout/layout'
import { RouterApp } from 'router/router';
import { BrowserRouter as Router, } from "react-router-dom";

function App() {
  return (
    <Layout >
      <Router>
        <RouterApp></RouterApp>
      </Router>
    </Layout>
  );
}

export default App;

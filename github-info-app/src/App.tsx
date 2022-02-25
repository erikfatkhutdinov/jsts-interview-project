import React from 'react';
import './App.css';
import HeaderContainer from "./components/header/HeaderContainer";
import ContentContainer from "./components/content/ContentContainer"
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles({
  app: {
    background: '#f5f8fa',
    width: '100%',
    height: '100vh',
    textAlign: 'center',
  }
})

function App() {
  const classes = useStyles()

  return (
    <div className={classes.app}>
      <HeaderContainer />
      <ContentContainer />
    </div>
  );
}

export default App;

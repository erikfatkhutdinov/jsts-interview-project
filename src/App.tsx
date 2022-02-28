import React from 'react';
import './App.css';
import HeaderContainer from "./components/header/HeaderContainer";
import ContentContainer from "./components/content/ContentContainer"
import {makeStyles} from "@material-ui/styles";
import Container from "./components/Container/Container";

const useStyles = makeStyles({
  app: {
    background: '#f5f8fa',
    width: '100%',
  }
})

function App() {
  const classes = useStyles()

  return (
    <div className={classes.app}>
      <Container component={() => <HeaderContainer />} />
      <ContentContainer />
    </div>
  );
}

export default App;

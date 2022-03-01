import React, { ReactElement } from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import {useLocation} from "react-router-dom";
import Header from "./Header";
import {searchUser, updateInputText, setUserName} from "../../redux/header-reducer";


const HeaderContainer = (props: any) => {


  const location = useLocation()

/*
  const catchAllUnhundledErrors = (promiseRejectionEvent: any) => {
    console.log('Error')
  }
  window.addEventListener('unhundledrejection', catchAllUnhundledErrors)
  */

  return <Header {...props} path={location.pathname} />
}

const mapStateToProps = (state: any) => ({
  inputText: state.header.inputText,
  userName: state.header.userName
})



export default compose (
  connect (mapStateToProps, {updateInputText, searchUser, setUserName})
) (HeaderContainer)



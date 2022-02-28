import React from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import Header from "./Header";
import {searchUser, updateInputText} from "../../redux/header-reducer";

const HeaderContainer = (props: any) => {

  const catchAllUnhundledErrors = (promiseRejectionEvent: any) => {
    console.log('Error')
  }

  window.addEventListener('unhundledrejection', catchAllUnhundledErrors)

  return <Header {...props} />
}

const mapStateToProps = (state: any) => ({
  inputText: state.header.inputText
})


export default compose (
  connect (mapStateToProps, {updateInputText, searchUser}),
) (HeaderContainer)



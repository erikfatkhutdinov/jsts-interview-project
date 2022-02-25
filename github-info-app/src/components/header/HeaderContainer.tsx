import React from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import Header from "./Header";
import {searchUser, updateInputText} from "../../redux/header-reducer";

const HeaderContainer = (props: any) => {


  return <Header {...props} />
}

const mapStateToProps = (state: any) => ({
  inputText: state.header.inputText
})

const mapDispatchToProps = () => ({
  searchUser,
  updateInputText
})

export default compose (
  connect (mapStateToProps, mapDispatchToProps),

) (HeaderContainer)



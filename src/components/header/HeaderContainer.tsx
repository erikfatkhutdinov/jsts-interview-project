import React from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import {useLocation} from "react-router-dom";
import Header from "./Header";
import {searchUser, updateInputText} from "../../redux/header-reducer";
import { setChapter } from "../../redux/user-info-reducer";
import {setUserName} from "../../redux/user-info-reducer";
import { useNavigate } from "react-router-dom";

const HeaderContainer = (props: any) => {
  const location = useLocation().pathname
  const navigate = useNavigate();
  const path = location.slice(1).split('/')

  
  
  const validateInput = (input: string) => {
    let output: string = input.trim()
    return output
  }

  const updateInput = (inputText: string) => {
    props.updateInputText(validateInput(inputText))
  }

  const getUserFromPath = () => {
    if (props.inputText.length || (path[0] === props.userName)) return 
    if (path[0]?.length) props.searchUser(path[0])
    if (path[1]?.length) props.setChapter(path[1])
  }
  getUserFromPath()
  
  const search = (userName: string = '') => {
    props.setUserName(validateInput(userName))
    props.searchUser(validateInput(userName))
  }

  const onEnter = (inputText: string) => {
    search(inputText)
    navigate(`/${validateInput(inputText)}`)
  }

  return <Header {...props} onEnter={onEnter} search={search} updateInput={updateInput} />
}

const mapStateToProps = (state: any) => ({
  inputText: state.header.inputText,
  chapter: state.header.chapter,
  userName: state.userInfo.userName
})

export default compose (
  connect (mapStateToProps, {updateInputText, searchUser, setChapter, setUserName})
) (HeaderContainer)



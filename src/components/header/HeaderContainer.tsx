import React, {useState} from "react";
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
  const path = useState(location.slice(1).split('/'))[0]
  
  const validateInput = (input: string) => {
    const text: string = input.trim()
    let output: string = text
    return output
  }


  const updateInput = (inputText: string) => {
    props.updateInputText(validateInput(inputText))
  }

  const getUserFromPath = () => {
    if (!(props.inputText.length || props.userName.length)) {
      if (path[0]?.length) props.searchUser(path[0])
      if (path[1]?.length) props.setChapter(path[1])
    }
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

  return <Header {...props} onEnter={onEnter} search={search} updateInput={updateInput} path={path} />
}

const mapStateToProps = (state: any) => ({
  inputText: state.header.inputText,
  userName: state.header.userName,
  userInfo: state.userInfo.userData.login,
  chapter: state.header.chapter
})



export default compose (
  connect (mapStateToProps, {updateInputText, searchUser, setChapter, setUserName})
) (HeaderContainer)



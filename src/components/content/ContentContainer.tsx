import React from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import Content from "./Content";
import Preloader from "../common/Preloader";
import Container from "../Container/Container";
import UserNotFoundErrorContainer from "../error-page/UserNotFoundErrorContainer";
import { Route, Routes } from "react-router-dom";
import RepositoriesContainer from "../repositories/RepositoriesContainer";
import OrganizationsContainer from '../organisations/OrganizationsContainer'

const ContentContainer = (props: any) => {
  const pagesArray = [
    {component: <RepositoriesContainer />, path: `repos`},
    {component: <OrganizationsContainer />, path: `orgs`},
  ]

  const makeContent = () => {
    if (props.isError) return <UserNotFoundErrorContainer />
    if (props.isFetching) return <Preloader />
    if (!props.userName) return <></>

        return (
          <Routes>
            <Route path={`/${props.userName}/*`} element={
              <Content
                pagesArray={pagesArray}
                {...props} /> 
            }/>
          </Routes> 
        )
  }
  return(<Container component={() => makeContent()}/>)
}

const mapStateToProps = (state: any) => {
  return {
    isFetching: state.userInfo.isFetchingData,
    userName: state.userInfo.userName,
    isError: state.userInfo.isError,
    chapter: state.userInfo.chapter
  }
}

export default compose (
  connect (mapStateToProps, {})
) (ContentContainer)
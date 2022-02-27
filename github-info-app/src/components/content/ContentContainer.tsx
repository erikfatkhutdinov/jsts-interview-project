import React from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import Content from "./Content";
import Preloader from "../common/Preloader";
import Container from "../Container/Container";

const ContentContainer = (props: any) => {

  const makeContent = () => {
    return props.isFetching ? <Preloader /> : <Content {...props} />
  }

  return <Container component={() => makeContent()}/>
}

const mapStateToProps = (state: any) => ({
  isFetching: state.userRepositories.isFetchingRepos && state.userInfo.isFetchingData
})


export default compose (
  connect (mapStateToProps, {})
) (ContentContainer)
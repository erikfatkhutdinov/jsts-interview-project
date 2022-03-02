import React from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import Repositories from "./Repositories";

const RepositoriesContainer = (props: any) => {

  console.log(props.repos)

  return <Repositories {...props} />
}

const mapStateToProps = (state: any) => ({
  repos: state.userRepos.repos
})

const mapDispatchToProps = () => ({

})

export default compose (
  connect (mapStateToProps, mapDispatchToProps),

) (RepositoriesContainer)
import React from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import Repositories from "./Repositories";
import DataNotFound from "../error-page/DataNotFound";

const RepositoriesContainer = (props: any) => {
  const repos = props.repos.map((item: any, i: number) => ({
    id: i,
    name: item.name,
    url: item.html_url,
    visibility: item.visibility,
    pushed_at: item.pushed_at,
    license: item.license,
    language: item.language
  }))
  return (props.isError || !props.repos.length) 
    ? <DataNotFound notFoundData={'Repositories'} />
    : <Repositories repos={repos} /> 
}

const mapStateToProps = (state: any) => ({
  repos: state.userRepos.repos,
  isError: state.userRepos.isError
})

export default compose (
  connect (mapStateToProps, {}),
) (RepositoriesContainer)
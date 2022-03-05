import React from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import Repositories from "./Repositories";

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

  return <Repositories repos={repos} />
}

const mapStateToProps = (state: any) => ({
  repos: state.userRepos.repos
})

const mapDispatchToProps = () => ({

})

export default compose (
  connect (mapStateToProps, mapDispatchToProps),

) (RepositoriesContainer)
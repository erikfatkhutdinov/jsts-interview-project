import React from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import Profile from "./Profile";

const ProfileContainer = (props: any) => {

  return <Profile {...props} />
}

const mapStateToProps = (state: any) => {
  const user = state.header.userData
  return {
    login: user.login,
    avatar_url: user.avatar_url,
    name: user.name,
    blog: user.blog,
    company: user.company,
    location: user.location,
    email: user.email,
    bio: user.bio,
    twitter_username: user.bio,
    created_at: user.created_at
  }

}

export default compose (
  connect (mapStateToProps, {}),

) (ProfileContainer)
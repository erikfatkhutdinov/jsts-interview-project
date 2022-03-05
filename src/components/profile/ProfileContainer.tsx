import React from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import Profile from "./Profile";

const ProfileContainer = (props: any) => {
  const date: any = new Date(props.created_at)
  const createdAt: string = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`

  return <Profile {...props} createdAt={createdAt} />
}

const mapStateToProps = (state: any) => {
  const user = state.userInfo.userData
  return {
    login: user.login,
    avatar_url: user.avatar_url,
    name: user.name,
    additionalInfo: [
      {data: {bio: user.bio}, description: 'bio'},
      {data: {blog: user.blog}, description: 'blog'},
      {data: {company: user.company}, description: 'company'},
      {data: {location: user.location}, description: 'location'},
      {data: {twitter_username: user.twitter_username}, description: 'twitter'},
    ],
    html_url: user.html_url,
    created_at: user.created_at
  }
}

export default compose (
  connect (mapStateToProps, {}),
) (ProfileContainer)
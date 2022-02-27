import React from "react";
import Avatar from "../common/Avatar";
import Preloader from "../common/Preloader";

const Profile = (props: any) => {





  return (
    <div>
       <Avatar height={'200px'} url={props.avatar_url} />
    </div>
  )
}

export default Profile
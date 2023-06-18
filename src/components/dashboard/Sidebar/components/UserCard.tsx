// Dependencies
import { FC } from "react";

const UserCard: FC = () => {

  return (
    <article className="sidebar-user-card">
      <div className="head">
        <img className="avatar" src="https://avatars.githubusercontent.com/u/122090895?v=4" alt="user avatar" />
        <div className="info">
          <h3 className="title">{`Youssef Bibawy`}</h3>
          <p className="country">Egypt</p>
        </div>
      </div>
    </article>
  )
}

export default UserCard;

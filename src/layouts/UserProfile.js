export const UserProfile = ({ user }) => {
  return (
    <div className="container d-flex justify-content-between align-items-center pt-4">
      <div className="">
        <img src={user.icon} alt="" />
      </div>
      <div className="">
        <p className="type-4 mb-1">{user.name}</p>
        <p className="type-5-ink mb-1"> {user.mail}</p>
      </div>
      <div className="">
        <i className="ci-exit type-5-ink" />
      </div>
    </div>
  );
};

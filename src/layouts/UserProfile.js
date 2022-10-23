export const UserProfile = ({ user }) => {
  return (
    <div className="container d-flex justify-content-start align-items-center pt-4 px-0">
      <div>
        <img className="img-fluid" src={user.icon} alt="" />
      </div>
      <div className="d-flex flex-column align-items-start mx-3">
        <p className="type-4 mb-1">{user.name}</p>
        <p className="mb-0 type-5 text--ink ">{user.mail}</p>
      </div>
      <div className="">
        <i className="ci-exit type-5 text--ink" />
      </div>
    </div>
  );
};

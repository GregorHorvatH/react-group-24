const UserData = ({ user }) => {
  const { name, dob, email, picture } = user;

  return name?.first ? (
    <div className="user-data">
      <img src={picture?.large} alt={name?.first} />
      <p>FirstName: {name?.first}</p>
      <p data-testid="lastname">LastName: {name?.last}</p>
      <p>Email: {email}</p>
      <p>Age: {dob?.age}</p>
    </div>
  ) : (
    <p>Loading...</p>
  );
};

export default UserData;

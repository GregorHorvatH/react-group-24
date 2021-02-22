const UserData = ({ user }) => {
  const { firstName, lastName, email, age = 15 } = user;

  return (
    <div className="user-data">
      <p>FirstName: {firstName}</p>
      <p>LastName: {lastName}</p>
      <p>Email: {email}</p>
      <p>Age: {age}</p>
    </div>
  );
};

export default UserData;

import "/src/Profile/Profile.css";
const Profile = (props) => {
  return (
    <div className="profile">
      <span>Profile</span>
      <div className="profile-image">
        <img src={props.imageUrl} alt={props.name} />
      </div>
      <div className="name">{props.name}</div>
      <div className="age">{props.age}</div>
      <div className="hoppies">
        Hoppies:
        {props.hobbies.map((hobby, index) => (
          <span>
            {hobby} {props.hobbies.length == index + 1 ? "" : ","}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Profile;

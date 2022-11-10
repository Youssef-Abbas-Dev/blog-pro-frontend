import "./profile.css";
import PostList from "../../components/posts/PostList";
import { posts } from "../../dummyData";
import { useEffect, useState } from "react";
import UpdateProfileModal from "./UpdateProfileModal";
import swal from "sweetalert";
import { toast } from "react-toastify";


const Profile = () => {

  const [updateProfile, setUpdateProfile] = useState(false);
  const [file, setFile] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Form Submit Handler
  const formSubmitHandler = (e) => {
    e.preventDefault();
    if(!file) return toast.warning("there is no file!");

    console.log("image uploaded");
  }

  // Delete Account Handler
  const deleteAccountHandler = () => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover your account!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("Account has been deleted!", {
          icon: "success",
        });
      } else {
        swal("Something went wrong!");
      }
    });
  }

  return (
    <section className="profile">
      <div className="profile-header">
        <div className="profile-image-wrapper">
          <img src={file ? URL.createObjectURL(file) : "/images/user-avatar.png"} alt="" className="profile-image" />
          <form onSubmit={formSubmitHandler}>
          <abbr title="choose profile photo">
            <label
              htmlFor="file"
              className="bi bi-camera-fill upload-profile-photo-icon"
            ></label>
          </abbr>
            <input
              type="file"
              name="file"
              id="file"
              style={{ display: "none" }}
              onChange={e => setFile(e.target.files[0])}
            />
            <button type="submit" className="upload-profile-photo-btn">upload</button>
          </form>
        </div>
        <h1 className="profile-username">Youssef Abbas</h1>
        <p className="profile-bio">
          hello my name is Youssef I am a web developer
        </p>
        <div className="user-date-joined">
          <strong>Date Joined: </strong>
          <span>Fri Nov 04 2022</span>
        </div>
        <button onClick={() => setUpdateProfile(true)} className="profile-update-btn">
          <i className="bi bi-file-person-fill"></i>
          Update Profile
        </button>
      </div>
      <div className="profile-posts-list">
        <h2 className="profile-posts-list-title">Youssef Posts</h2>
        <PostList posts={posts} />
      </div>
      <button onClick={deleteAccountHandler} className="delete-account-btn">
        Delete Your Account
      </button>
      {updateProfile && <UpdateProfileModal setUpdateProfile={setUpdateProfile} />}
    </section>
  );
};

export default Profile;

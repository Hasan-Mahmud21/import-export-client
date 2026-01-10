// pages/Dashboard/Profile.jsx
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { toast } from "react-toastify";

const Profile = () => {
  const { user, updateUserProfile } = useContext(AuthContext);
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(user?.displayName || "");
  const [photo, setPhoto] = useState(user?.photoURL || "");

  const handleUpdate = async () => {
    try {
      await updateUserProfile(name, photo);
      toast.success("Profile updated successfully!");
      setIsEditing(false);
    } catch (err) {
      toast.error("Failed to update profile", err.message);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="relative h-48 bg-primary rounded-[2.5rem] shadow-lg overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
      </div>

      <div className="card bg-base-100 -mt-20 shadow-xl rounded-[2.5rem] border border-base-300">
        <div className="card-body items-center text-center p-10">
          <div className="avatar -mt-24 mb-6">
            <div className="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-8 shadow-2xl">
              <img
                src={user?.photoURL || "https://via.placeholder.com/150"}
                alt="profile"
              />
            </div>
          </div>

          <div className="w-full max-w-lg space-y-4">
            <div className="form-control">
              <label className="label font-bold opacity-60">FULL NAME</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                disabled={!isEditing}
                className="input input-bordered rounded-2xl bg-base-200 border-none font-bold text-center"
              />
            </div>
            <div className="form-control">
              <label className="label font-bold opacity-60">
                ACCOUNT EMAIL
              </label>
              <input
                type="text"
                value={user?.email}
                disabled
                className="input input-bordered rounded-2xl bg-base-200 border-none text-center italic"
              />
            </div>

            {isEditing && (
              <div className="form-control">
                <label className="label font-bold opacity-60">PHOTO URL</label>
                <input
                  type="text"
                  value={photo}
                  onChange={(e) => setPhoto(e.target.value)}
                  className="input input-bordered rounded-2xl bg-base-200 border-none text-center"
                />
              </div>
            )}

            <div className="pt-6">
              {isEditing ? (
                <div className="flex gap-4">
                  <button
                    onClick={() => setIsEditing(false)}
                    className="btn btn-ghost flex-1 rounded-2xl"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleUpdate}
                    className="btn btn-primary flex-1 rounded-2xl text-white"
                  >
                    Save Changes
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setIsEditing(true)}
                  className="btn btn-primary w-full rounded-2xl text-white"
                >
                  Edit Profile
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

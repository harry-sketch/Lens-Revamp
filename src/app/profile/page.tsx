import { NextPage } from "next";

// Components
import ProfileNavbar from "@/components/Profile/ProfileNavbar/ProfileNavbar";
import ProfileDesc from "@/components/Profile/ProfileDesc/ProfileDesc";

const Profile: NextPage = () => (
  <div className="bg-custom-lens03 w-full h-screen grid place-items-center">
    <ProfileNavbar />
    <ProfileDesc />
  </div>
);

export default Profile;

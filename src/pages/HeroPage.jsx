import BackGround from "../components/BackGround";
import NavBar from "../components/NavBar";
import profileImage from "../assets/images/profile.png";

function HeroPage() {
  return (
    <div>
      <h1>Hero Page</h1>
      <img src={profileImage} alt="Mr. Light" />
    </div>
  );
}
export default HeroPage;

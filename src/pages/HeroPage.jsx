import BackGround from "../components/BackGround";
import NavBar from "../components/NavBar";
import profileImage from "../assets/images/profile.png";

function HeroPage() {
  return (
    <div>
      <h1>Hero Page</h1>
      <div className="m-4">
        <img src={profileImage} alt="Mr. Light" />
      </div>
    </div>
  );
}
export default HeroPage;

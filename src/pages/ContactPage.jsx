import BackGround from "../components/BackGround";
import NavBar from "../components/NavBar";

function ContactPage() {
  return (
    <BackGround>
      <NavBar />
      <div className="flex relative justify-center mt-8">
        <h1>Contact Page</h1>

        <ul>
          <li>Phone Number: 935186970</li>
          <li>Email: laurindosunset@gmail.com</li>
          <li>Github: LaurindoMissengo</li>
          <li>Twiter: lausent9</li>
        </ul>
      </div>
    </BackGround>
  );
}
export default ContactPage;

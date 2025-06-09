import Button from "./Button";

function NavBar() {
  return (
    <nav className="flex gap-6 p-5">
      <div>
        <a href="/">
          <h1>Home</h1>
        </a>
      </div>
      <div>
        <a href="/projects">
          <h1>Projects</h1>
        </a>
      </div>
      <div>
        <a href="about">
          <h1>About</h1>
        </a>
      </div>
      <div>
        <a href="contact">
          <h1>Contact</h1>
        </a>
      </div>
    </nav>
  );
}
export default NavBar;

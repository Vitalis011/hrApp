import "./Header.css";

const Header = (props) => {
  console.log("This is header", props); //for testing the component.. always console
  return (
    <header className="header">
      <div>
        <h1>{props.name}</h1>
      </div>
    </header>
  );
};

export default Header;

import "./Footer.css";

const Footer = (props) => {
  console.log("this is a footer", props);
  return (
    <footer className="footer">
      <div>
        <h2>{props.name} copyrights REACT25K</h2>
      </div>
    </footer>
  );
};

export default Footer;

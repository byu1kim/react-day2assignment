const Header = ({ title }) => {
  return <h1>{title}</h1>;
};

Header.defaultProps = {
  title: "React App",
};

export default Header;

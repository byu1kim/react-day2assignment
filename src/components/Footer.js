const Footer = ({ copyright, author }) => {
  return (
    <h5>
      &copy; {copyright} {author}
    </h5>
  );
};

Footer.defaultProps = {
  copyright: new Date().getFullYear(),
};

export default Footer;

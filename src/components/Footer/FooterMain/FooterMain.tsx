import FooterContacts from "../FooterContacts/FooterContacts";
import FooterLinks from "../FooterLinks/FooterLinks";
import FooterSubscribe from "../FooterSubscribe/FooterSubscribe";
import "./FooterMain.css"

const links1 = ["home", "shop", "about", "contact"];
const links2 = ["payment options", "returns", "privacy policies"];

const FooterMain = () => {
  return (
    <footer className="footer">
      <div className="footerContainer">
        <div className="fotterTop">
        <div>
          <FooterContacts />
        </div>
        <div>
          <FooterLinks links={links1} title="links" />
        </div>
        <div>
          <FooterLinks links={links2} title="help" />
        </div>
        <div>
          <FooterSubscribe />
        </div>
        </div>
        <div className="fotterBottom">
          <p>2023 furino. All rights reverved</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterMain;

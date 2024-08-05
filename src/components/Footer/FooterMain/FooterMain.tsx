import FooterContacts from '../FooterContacts/FooterContacts';
import FooterLinks from '../FooterLinks/FooterLinks';
import FooterSubscribe from '../FooterSubscribe/FooterSubscribe';
import './FooterMain.css';

const FooterMain = () => {
  return (
    <footer className="footer">
      <div className="footerContainer">
        <div className="footerTop">
          <div>
            <FooterContacts />
          </div>
          <div>
            <FooterLinks title="links" />
          </div>
          <div>
            <FooterSubscribe />
          </div>
        </div>
        <div className="footerBottom">
          <p>2023 furniro. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterMain;

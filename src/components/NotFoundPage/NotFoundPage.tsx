import { FaRegSadCry } from "react-icons/fa";
import "./NotFoundPage.css";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <section className="notFoundSection">
      <div className="notFoundContainer">
        <div className="notFoundImageContainer">
          <FaRegSadCry />
        </div>
        <h1>404</h1>
        <p className="notFoundNotification">Page not found!</p>
        <p>The Page you are looking for doesn't exist.</p>
        <button onClick={() => navigate(-1)} className="orderFinalLink">
          Back
        </button>
      </div>
    </section>
  );
};

export default NotFoundPage;

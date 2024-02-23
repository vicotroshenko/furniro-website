import { FaRegSadCry } from "react-icons/fa";
import { FaRegFaceSadTear } from "react-icons/fa6";
import "./NotFoundPage.css";
import { useNavigate } from "react-router-dom";

interface INotFoundPage {
  status: "not-found" | "error";
}

const NotFoundPage: React.FC<INotFoundPage> = ({ status }) => {
  const navigate = useNavigate();

  const notFound = status === "not-found";

  return (
    <section className="notFoundSection">
      <div className="notFoundContainer">
        <div className="notFoundImageContainer">
          {notFound ? <FaRegSadCry /> : <FaRegFaceSadTear />}
        </div>
        <h1>{notFound ? 404 : 500}</h1>
        <p className="notFoundNotification">
          {notFound ? "Page not found!" : "Internal Sever Error"}
        </p>
        {notFound && <p>The Page you are looking for doesn't exist.</p>}
        <button onClick={() => navigate(-1)} className="orderFinalLink">
          Back
        </button>
      </div>
    </section>
  );
};

export default NotFoundPage;

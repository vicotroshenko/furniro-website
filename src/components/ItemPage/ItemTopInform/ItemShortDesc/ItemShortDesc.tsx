import { nanoid } from "nanoid";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IItemShortDesc } from "../../../../types/types";
import "./ItemShortDesc.css";


const ItemShortDesc: React.FC<IItemShortDesc> = ({ tags=[], category }) => {
  return (
    <ul className="itemShortInfoList">
      <li>
        <p>Category</p>
        <p>:</p>
        <p>{category}</p>
      </li>
      <li>
        <p>Tags</p>
        <p>:</p>
        <p>
          {tags.map((item) => (
            <span key={nanoid()}>{item},</span>
          ))}
        </p>
      </li>
      <li>
        <p>Share</p>
        <p>:</p>
        <p className="itemShortNetworks">
          <a href="http://www.facebook.com">
            <FaFacebook
              style={{ fill: "black", width: "100%", height: "100%" }}
            />
          </a>
          <a href="http://www.linkedin.com">
            <FaLinkedin
              style={{ fill: "black", width: "100%", height: "100%" }}
            />
          </a>
          <a href="https://twitter.com/">
            <FaSquareXTwitter
              style={{ fill: "black", width: "100%", height: "100%" }}
            />
          </a>
        </p>
      </li>
    </ul>
  );
};

export default ItemShortDesc;

import { nanoid } from 'nanoid';
import { memo } from 'react';
import { FaFacebook, FaLinkedin } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';

import { IDataSlice } from '../../../../types/types';
import './ItemShortDesc.css';

interface IItemShortDesc extends Pick<IDataSlice, 'tags' | 'category'> {}

const ItemShortDesc: React.FC<IItemShortDesc> = memo(
  ({ tags = [], category }) => {
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
          <div className="itemShortNetworks">
            <a href="http://www.facebook.com">
              <FaFacebook className="itemShortNetworks_links" />
            </a>
            <a href="http://www.linkedin.com">
              <FaLinkedin className="itemShortNetworks_links" />
            </a>
            <a href="https://twitter.com/">
              <FaSquareXTwitter className="itemShortNetworks_links" />
            </a>
          </div>
        </li>
      </ul>
    );
  }
);

export default ItemShortDesc;

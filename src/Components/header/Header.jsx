import "./header.css";
import { AiOutlineBars } from "react-icons/ai";
import { MdKeyboardArrowDown } from "react-icons/md";
import { GoLocation } from "react-icons/go";
import { IoPricetagsOutline } from "react-icons/io5";
import MainHeader from "./MainHeader";
import {Link} from 'react-router-dom'


const Header = () => {
  return (
    <>
      <div className="navBar">
        <div className="container subNav">
          <div className="categories">
            <span>
              <AiOutlineBars />
            </span>
            <div className="pdetails">
              <p>BrowseCategory</p>
              <span>
                <MdKeyboardArrowDown />
              </span>
            </div>
          </div>
          <div className="links">
            <ul>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/Shop'>Shop</Link></li>
              <li><Link to='/Vender'>Vendor</Link></li>
              <li><Link to='#'>About us</Link></li>
            </ul>
          </div>
          <div className="trackOrders">
            <div className="track">
              <span>
                <GoLocation />
              </span>
              <p>Track Order</p>
            </div>
            <div className="track">
              <span>
                <IoPricetagsOutline />
              </span>
              <p>Hot deals</p>
            </div>
          </div>
        </div>
      </div>
      <MainHeader />
    </>
  );
};

export default Header;

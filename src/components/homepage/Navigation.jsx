import React from 'react'
import { Link } from 'react-router-dom'
import Avatar from 'react-avatar'
import DarazSmLogo from '../../assets/darazSmLogo.png'
import DarazBigLogo from '../../assets/darazBigLogo.png'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PersonIcon from '@mui/icons-material/Person';
import LanguageIcon from '@mui/icons-material/Language';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Navigation = () => {
  return (
    <div className="navigation_main">
        <div className="navigation_size_manager">
            {/* Items at the Top of navigation */}
            <div className="top_navigation">
                <div className="left_nav">
                <ul>
                    <Link><li>Become a seller</li></Link>
                    <Link><li>Payments and Rechange</li></Link>
                    <Link><li>Help & Support</li></Link>
                    <Link><li>Daraz Logistics Partner</li></Link>
                </ul>
                </div>
                <div className="save_more">
                    <button><Avatar src={DarazSmLogo} size='20'/>Save More on App</button>
                </div>

            </div>

            {/* Navigation Search Bar Main */}
            <div className="main_navigation">
                <div className="navs logobox">
                    <img src={DarazBigLogo} alt="darazLogo" />
                </div>
                <div className="navs search_box">
                    <input type="text" placeholder='Search in Daraz' />
                </div>
               <div className="navs login">
                <Link><p><PersonIcon/>Login</p></Link>
               </div>
               <div className="navs signup">
                <Link><p>Signup</p></Link>
               </div>
                <div className="navs language">
                    <span><LanguageIcon/>EN</span>
                </div>
                <div className="navs cart">
                    <span><ShoppingCartIcon/></span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navigation
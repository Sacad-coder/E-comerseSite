import React from 'react';
import './header.css';
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import{Link} from "react-router-dom";
import { useStateValue } from './StateProvider';


function Header() {
    
    const[{basket}] = useStateValue();
    console.log(basket);

    return (
        <div className='header'>
         <Link to="/home">
         <img
         className="header__logo"
          src="https://wildfiresocial.com/wp-content/uploads/2019/01/amazon-logo-white._cb1509666198_.png" alt=""
          />
        </Link>
           <div
            className="header__search">
                <input
                className="header__searchInput" type="text" />
                
            </div> 

            <div
                className="header__nav">
                    <div
                        className="header__options">
                        <span className="header__optionLineOne"
                        >Hello, Guest</span>

                    <span className="header__optionLineTwo">Sign In</span>

                    </div>

                    <div
                        className="header__options">
                            <span className="header__optionLineOne"
                            >Returns</span>

                            <span className="header__optionLineTwo">& Orders</span>
                    </div>

                    <div
                    className="header__options">
                           <span className="header__optionLineOne"
                        > Your</span>

                         <span className="header__optionLineTwo">Prime</span>
                    </div>
                    <Link to='checkout'>
                    <div className="header__optionBasket">
                        <ShoppingBasketIcon/> 
                        <span className ="header__optionLineTwo header__basketCount">{basket.length}</span>
                    </div>
                    </Link>
                

            </div>



        </div>
    )
}

export default Header

import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";



// SPA - Single Page Application???
// Client Side Routing

// const Title = () => (
//   <a href="/">
//     <img data-testid="logo" className="h-10 p-2 ml-2 rounded-full ring-1 ring-gray-300" alt="logo" src={Logo} />
//   </a>
// );

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const isOnline = useOnline();

  const { user } = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);
  //console.log(cartItems);


  return (
    <>
      
      <div className="h-20 bg-stone-300 text-neutral-950 shadow-md mb-1">
        <div className="nav-items">
          <ul className="flex justify-between py-8">
            {/* <li><Logo/></li> */}
            <li className="px-6 text-3xl font-bold"><Link to="/">Coconut</Link></li>
            <li>
              <ul className="flex flex-wrap">
              <li>{user.name}</li>
              <li className="font-bold px-2" data-testid="cart"> <Link to="/cart">Cart-{cartItems.length} items</Link></li>
              </ul>
            </li>
            
          </ul>
        </div>
      </div>

    </>
  );
};

export default Header;

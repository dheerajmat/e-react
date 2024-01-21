import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import img from "./logo-no-background.png";
import { useAuth0, isAuthenticated } from "@auth0/auth0-react";



function Navbat1() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [fname,setfname] = useState()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0()
  const { user, isAuthenticated, isLoading } = useAuth0()



  return (
    <>
      <div  className="relative w-full bg-white text-[#020202] ">
        <div className="m-auto flex max-w-8xl items-center justify-between px-8 py-3  sm:px-6 lg:px-5 border-b-2 border-black ">
          <div className="inline-flex items-center space-x-2">
            <Link to='/'>
              <img className='h-[65px] w-[150px]' src={img} alt="Logo" />
            </Link>
          </div>

          {/* Navigation Links for larger screens */}
           <div className="hidden lg:block">
      <ul className="inline-flex space-x-[50px] text-[20px] font-semibold text-green-900  border-black bottom-1">
      <li>
          <Link
            to="/"   
            className='hover:text-green-300'   
          >
            Home
          </Link>
        </li>
        
        <li>
          <Link
            to="/man"   
            className='hover:text-green-300'   
          >
            Man
          </Link>
        </li>
        <li>
          <Link
            to="/women"
            className='hover:text-green-300'  
            
          >
            Women
          </Link>
        </li>
        <li>
          <Link
            to="/allshoes"
            className='hover:text-green-300'  
           
          >
            Shoes
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className='hover:text-green-300'  
          
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>

    {/* <svg className="  w-6 h-6 text-black dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 21">
    <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z"/>
  </svg> */}
          

          {/* Button for larger screens */}
          <div className="hidden lg:block  ">
            {/* <Link to="/signin"

              className="rounded-md bg-black px-3 py-2 mx-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Sign in
            </Link> */}


       {/* log in log out  */}

            {/* {1 == 1 ? (
  <Link
    to="/logout"
    className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
  >
    Log Out
  </Link>
) : (
  <Link
    to="/login"
    className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
  >
    Log In
  </Link>
)} */}







            
         
          </div>

          <div className='flex justify-end  '>

          {isAuthenticated ? (<button className="rounded-md hidden lg:block bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}> 
      Log Out
    </button>)  : (<button  className="rounded-md bg-green-600 lg:block hidden px-3.5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black" onClick={() => loginWithRedirect()}>Log In</button>)  }



 <svg className=" ml-6 pt-1   w-7 h-7 text-black dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 21">
    <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z"/>
  </svg>


</div>
         

          
<div class="flex items-center gap-4">
{isAuthenticated && (
      <div>
       <span className='text-xl text-danger-600'>Welcome</span>
        
        <p>{user.email}</p>
      </div>
    )}

</div>


          {/* Hamburger menu icon for smaller screens */}
          <div className="lg:hidden" onClick={toggleMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6 cursor-pointer"
            >
              <line x1="4" y1="12" x2="20" y2="12"></line>
              <line x1="4" y1="6" x2="20" y2="6"></line>
              <line x1="4" y1="18" x2="20" y2="18"></line>
            </svg>
          </div>
        </div>

        

        {/* Responsive menu for smaller screens */}
        {isMenuOpen && (
          <div className="lg:hidden flex items-center flex-col p-5">
            <ul className="flex flex-col items-center space-y-4 text-[20px] border-black">
            
            <li>
          <Link
            to="/"   
            className='hover:text-green-300'   
          >
            Home
          </Link>
        </li> 
              <li>
                <Link to="/man" onClick={toggleMenu}>
                  Man
                </Link>
              </li>
              <li>
                <Link to="/women" onClick={toggleMenu}>
                  Women
                </Link>
              </li>
              <li>
                <Link to="/allshoes" onClick={toggleMenu}>
                  Shoes
                </Link>
              </li>
              <li>
                <Link to="/contact" onClick={toggleMenu}>
                  Contact
                </Link>
              </li>
            </ul>
            {isAuthenticated ? (<button  className="rounded-md  bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black justify-center flex m-0" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Log Out
    </button>)  : (<button  className="rounded-md bg-green-600 px-3.5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black" onClick={() => loginWithRedirect()}>Log In</button>)  }
          </div>
        )}
 
        
      </div>
    </>
  );
}

export default Navbat1;
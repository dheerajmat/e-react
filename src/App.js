
import './App.css';

import { BrowserRouter, Routes , Route  } from 'react-router-dom';
import  Home from './Pages.js/Home';
import Man from './Pages.js/Man';
import Women from './Pages.js/Women';
import Navbat2 from './component/Navbat2';
import Footer from './component/Footer';
import AllShoes from './Pages.js/AllShoes';
import Productoverview from './Pages.js/Productoverview';
import ProductOverviewOne from './Pages.js/Productoverview';
import Navbat1, { StickyNavbar } from './component/Navbar1';
import BasicExample from './component/Scrollbacktotop';
import Register from './Pages.js/Register';
import { Login } from './Pages.js/Login';




function App() {

  function handleUpdate() {
    let {
      action
    } = this.state.location;
  
    if (action === 'PUSH') {
      window.scrollTo(0, 0);
    }
  }

  
  
  return (
    <>
     

      <BrowserRouter onUpdate={handleUpdate}>
      <Navbat1/>
      {/* <Navbat2/> */}
        <Routes     >
          <Route path='/' element=<Home/> onUpdate={handleUpdate} > </Route>
          <Route path='/man' element=<Man/> onUpdate={handleUpdate} > </Route>
          <Route path='/women' element=<Women/> > </Route>
          <Route path='/allshoes' element=<AllShoes/> > </Route>
          <Route path='/signin' element=<Register/> > </Route>
          <Route path='/login' element=<Login/> > </Route>
          <Route path="/product/:id" onUpdate={handleUpdate} element={<ProductOverviewOne /> }  />
          

          
          
          
        </Routes>
        <Footer/>
        {/* <BasicExample/> */}
      </BrowserRouter>
      

    </>
    
   
  );
}

export default App;

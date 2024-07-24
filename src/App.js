import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Accommodation from './Page/Accomodation/Accomodation';
import { Provider } from "react-redux";
import store from './Store/Store';
import Checkout from './Page/Checkout/Checkout';
import Home from './Page/Home/Home';
import { AutoProvider } from './UseContext/UseContext';
import NoFound from './Page/NoFound/NoFound';
import DetailEvents from './Page/DetailEvents/DetailEvents';
import EventsNext from './Page/Events/EventsNext';
import Login from './Page/Login/Login';
import Somethingwrong from './Page/somethingwrong/Somethingwrong';
import InsertEvents from './Page/InsertEvents/InsertEvents';
import PanelActivity from './Page/PanelActivity/PanelActivity';
import PanelHotel from './Page/PanelHotel/PanelHotel';


function App() {
  return (
    <Provider  store={store}>
      <AutoProvider>
      <BrowserRouter> 
        <Routes>
          <Route exact path="/" element={<Home/> } />
          <Route exact path="/Accomodation" element={<Accommodation/> } />
          <Route exact path="/Checkout" element={<Checkout/> } />
          <Route exact path="/Events" element={<EventsNext />} />
          <Route  exact path="Events/DetailEvents/:userId" element={<DetailEvents />} />
          <Route  exact path="/DetailEvents/:userId" element={<DetailEvents />} />
          <Route  exact path="/Login" element={<Login />} />
          <Route  exact path="/InsertEvents/:id" element={<InsertEvents />} />
          <Route  exact path="/PanelActivity/:id" element={<PanelActivity />} />
          <Route  exact path="/PanelHotel" element={<PanelHotel />} />
          <Route  exact path="/Somethingwrong" element={<Somethingwrong />} />
          <Route path='/*'  element={<NoFound/> } />
        </Routes> 
      </BrowserRouter>
      </AutoProvider>
      </Provider>
  );
}

export default App;

import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import AddImage from "./components/image/AddImage";
import Offer from "./components/offer/Offer";
import Favourites from "./components/favourites/Favourites";
import Home from "./components/home/Home";
import SignIn from "./components/user/SignIn";
import SignUp from "./components/user/SignUp";
import Profile from "./components/profil/Profile";
import ForgotPassword from "./components/user/ForgotPassword";

function App() {
    const appStyle = {
        backgroundColor: '#EEEEEE',
        minHeight: '100vh'
    };


    return (
        <div className="App" style={appStyle}>


            <>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/favourites" element={<Favourites />}/>
                        <Route path="/add" element={<AddImage/>}/>
                        <Route path="/profile" element={<Profile/>}/>
                        <Route path="/offer/:imageId" element={<Offer />} />
                        <Route path="/signin" element={<SignIn/>}/>
                        <Route path="/signup" element={<SignUp/>}/>
                        <Route path="/forgot" element={<ForgotPassword/>}/>
                    </Routes>
                </BrowserRouter>
            </>
        </div>
    );
}

export default App;

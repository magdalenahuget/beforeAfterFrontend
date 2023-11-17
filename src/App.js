import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import AddImage from "./components/image/AddImage";
import OfferDetails from "./components/offer/OfferDetails";
import Favourites from "./components/favourites/Favourites";
import MyImages from "./components/myimages/MyImages";
import Home from "./components/home/Home";
import SignIn from "./components/user/SignIn";
import SignUp from "./components/user/SignUp";
import Profile from "./components/profil/Profile";

function App() {

    const userId = 1

    return (
        <div className="App">
            <>
                <BrowserRouter>
                    <Routes>
                        <Route path="/home" element={<Home />}/>
                        <Route path="/favourites" element={<Favourites userId={userId}/>}/>
                        <Route path="/add" element={<AddImage/>}/>
                        <Route path="/images" element={<MyImages/>}/>
                        <Route path="/profile" element={<Profile userId={userId}/>}/>
                        <Route path="/offer" element={<OfferDetails userId={userId} />} />
                        <Route path="/signin" element={<SignIn />}/>
                        <Route path="/signup" element={<SignUp />}/>
                    </Routes>
                </BrowserRouter>
            </>
        </div>
    );
}

export default App;

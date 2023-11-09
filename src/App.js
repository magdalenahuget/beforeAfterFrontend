import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import Main from "./components/Main";
import AddImage from "./components/image/AddImage";
import OfferDetails from "./components/offer/OfferDetails";
import Favourites from "./components/favourites/Favourites";
import MyImages from "./components/myimages/MyImages";

function App() {

    const userId = 6

    return (
        <div className="App">
            <>
                <BrowserRouter>
                    <Routes>
                        <Route path="/home" element={<Main/>}/>
                        <Route path="/favourites" element={<Favourites userId={userId}/>}/>
                        <Route path="/add" element={<AddImage/>}/>
                        <Route path="/images" element={<MyImages/>}/>
                        <Route path="/profile"/>
                        <Route path="/offer" element={<OfferDetails userId={userId} />} />
                    </Routes>
                </BrowserRouter>
            </>
        </div>
    );
}

export default App;

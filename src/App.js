import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import Main from "./components/Main";
import ImageDetails from "./components/imagedetails/ImageDetails";
import Favourites from "./components/favourites/Favourites";
import MyImages from "./components/MyImages";
import AddImage from "./components/AddImage";


function App() {
    return (
        <div className="App">
            <>
                <BrowserRouter>
                    <Routes>
                        <Route path="/home" element={<Main/>}/>
                        <Route path="/favourites" element={<Favourites/>}/>
                        <Route path="/add" element={<AddImage/>}/>
                        <Route path="/images" element={<MyImages/>}/>
                        <Route path="/profile"/>
                        <Route path="/offer" element={<ImageDetails/>}/>
                    </Routes>
                </BrowserRouter>
            </>
        </div>
    );
}

export default App;

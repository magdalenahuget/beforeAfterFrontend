import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import Main from "./components/Main";
import ImageDetails from "./components/imagedetails/ImageDetails";
import Favourites from "./components/favourites/Favourites";
import MyImages from "./components/MyImages";


function App() {
    return (
        <div className="App">
            <>
                <BrowserRouter>
                    <Routes>
                        <Route path="/home" element={<Main/>}/>
                        <Route path="/offer" element={<ImageDetails/>}/>
                        <Route path="/favourites" element={<Favourites/>}/>
                        <Route path="/images" element={<MyImages/>}/>
                    </Routes>
                </BrowserRouter>
            </>
        </div>
    );
}

export default App;

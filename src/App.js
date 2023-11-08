import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import Main from "./components/Main";
import ImageDetails from "./components/imagedetails/ImageDetails";
import Favourites from "./components/favourites/Favourites";


function App() {
    return (
        <div className="App">
            <>
                <BrowserRouter>
                    <Routes>
                        <Route path="/home" element={<Main/>}/>
                        <Route path="/offer" element={<ImageDetails/>}/>
                        <Route path="/favourites" element={<Favourites/>}/>
                    </Routes>
                </BrowserRouter>
            </>
        </div>
    );
}

export default App;

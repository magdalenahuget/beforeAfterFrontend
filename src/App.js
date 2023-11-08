import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import Main from "./components/Main";
import AddImage from "./components/addimage/AddImage";


function App() {
    return (
        <div className="App">
            <>
                <BrowserRouter>
                    <Routes>
                        <Route path="/home" element={<Main/>}/>
                        <Route path="/add-image" element={<AddImage/>}/>
                    </Routes>
                </BrowserRouter>
            </>
        </div>
    );
}

export default App;

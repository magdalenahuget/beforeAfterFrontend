import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import Main from "./components/Main";


function App() {
    return (
        <div className="App">
            <>
                <BrowserRouter>
                    <Routes>
                        <Route path="/home" element={<Main/>}/>
                    </Routes>
                </BrowserRouter>
            </>
        </div>
    );
}

export default App;

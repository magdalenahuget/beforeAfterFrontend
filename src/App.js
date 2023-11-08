import logo from './logo.svg';
import './App.css';
import BottomNav from "./components/BottomNav";
import Header from "./components/Header";
import CategoriesButton from "./components/search/CategoriesButton";
import CitySelect from "./components/search/CitySelect";


function App() {
    return (
        <div className="App">
            <>
                <Header/>
                <CategoriesButton />
                <CitySelect />
                <BottomNav/>
            </>
        </div>
    );
}

export default App;

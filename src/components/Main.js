import Header from "./layout/Header";
import CategoriesButton from "./search/CategoriesButton";
import CitySelect from "./search/CitySelect";
import BottomNav from "./layout/BottomNav";


export default function Main() {
    return (<>
            <Header/>
            <CategoriesButton />
            <CitySelect />
            <BottomNav/>
        </>
    );
}
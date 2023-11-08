import Header from "./Header";
import CategoriesButton from "./search/CategoriesButton";
import CitySelect from "./search/CitySelect";
import BottomNav from "./BottomNav";


export default function Main() {
    return (<>
            <Header/>
            <CategoriesButton />
            <CitySelect />
            <BottomNav/>
        </>
    );
}
import CategoriesButton from "./CategoriesButton";
import CitySelect from "./CitySelect";
import Header from "../layout/Header";
import BottomNav from "../layout/BottomNav";
import useImageData from "../../hooks/useImageData";
import ImagesList from "../image/ImagesList";


export default function Home() {
    const {
        selectedCategories,
        selectedCity,
        categories,
        cities,
        images,
        handleCategorySelect,
        handleChange,
    } = useImageData()

    return (
        <div>
            <Header/>
            <CategoriesButton
                categories={categories}
                onSelect={handleCategorySelect}
                selectedCategories={selectedCategories}
            />
            <CitySelect
                cities={cities}
                selectedCity={selectedCity}
                onChange={handleChange}
            />
            <ImagesList
                images={images}
            />
            <BottomNav/>
        </div>
    );
};

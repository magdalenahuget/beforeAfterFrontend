import React, { useState } from 'react';
import Header from "./Header";
import CategoriesButton from "./search/CategoriesButton";
import CitySelect from "./search/CitySelect";
import BottomNav from "./BottomNav";
import SelectedImages from "./search/SelectedImages";


export default function Main() {



    return (<>
            <Header/>
            <CategoriesButton />
            <CitySelect />
            <SelectedImages />
            <BottomNav/>
        </>
    );
}
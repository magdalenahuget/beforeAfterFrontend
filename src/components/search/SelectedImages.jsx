import React,{useEffect} from "react";


const SelectedImages = ({selectedCity, categories=[], allImages=[]}) => {
    const [image,setImage] = React.useState([]);

    useEffect(() => {
        if (selectedCity) {
            const selectedImages = allImages.filter((img) => img.cityName === selectedCity);
            setImage(selectedImages);
        } else {
            setImage(allImages);
        }
    }, [selectedCity]);//jak dodam tutal allImages to sie odrazu pojawia wszytskie i mozna pozniej filtorwaac ale przetrwarza caly czas

    return (


            <>

                {image.map((image)=>(
                    <div>
                    <h1>Id:  {image.id}</h1>
                    <h1>File:  {image.file}</h1>
                        <h1>CityName:  {image.cityName}</h1>
                    <h1>CategoryId:  {image.categoryId}</h1>
                    <h1>UserId:  {image.userId}</h1>
                    <h1>Status:  {image.approvalStatus ? "Approved" : "Not Approved"}</h1>
                        <h1>.</h1>
                        <h1>.</h1>
                        <h1>.</h1>
                    </div>
                ))}
            </>

    );
};

export default SelectedImages;
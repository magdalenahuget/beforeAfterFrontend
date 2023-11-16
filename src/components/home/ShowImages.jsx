import React from 'react';

const ShowImages = ({images}) => {
    return (
        <div>

            <ul>
                {images.map((image) => (
                    <h1 key={image.id}>Picture
                        <li>{image.id}</li>
                        <li>{image.cityName}</li>
                        <li>{image.userId}</li>
                    </h1>
                ))}
            </ul>
        </div>
    );
};

export default ShowImages;
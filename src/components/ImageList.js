import React from "react";

export default function ImageList({ imagelist }) {
    const divCount = 3;

    // Calculate the maximum number of images in each div
    const maxImagesPerDiv = Math.ceil(imagelist.length / divCount);
  
    // Create an array of divs, each containing a subset of images
    const divs = Array.from({ length: divCount }, (_, index) =>
      imagelist.slice(index * maxImagesPerDiv, (index + 1) * maxImagesPerDiv)
    );

  return (
    <div className="imagelist-div">
      {/* {imagelist.map((value) => {
        return <img src={value.urls.raw} alt={value.alt_description} />;
      })} */}
      {divs.map((divImages, index) => (
        <div key={index} className='image-group'>
          {divImages.map((value, innerIndex) => (
            <img
              key={innerIndex}
              src={value.urls.raw}
              alt={value.alt_description}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

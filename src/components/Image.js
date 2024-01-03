import React, { useState } from 'react';

function Image() {
  const [images, setImages] = useState([
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP18qmx1sxhWKC1z2YUe11klQx-4aueLss-F2YmFzhcrv8Wqlwf4vNayjlJep8nyXKhPc&usqp=CAU'
  ]);
  const [width, setWidth] = useState(1000);

  const addImage = () => {
    const newImageUrl = prompt('Введіть URL зображення:');
    if (newImageUrl) {
      setImages([...images, newImageUrl]);
    }
  };

  const zoomIn = () => {
    setWidth(width * 1.2);
  };

  const zoomOut = () => {
    setWidth(width / 1.2);
  };

  const deleteImage = (index) => {
    const newImages = images.filter((_, i) => i !== index);
    setImages(newImages);
  };

  return (
    <div className="image-content">
      {images.map((imageUrl, index) => (
        <div key={index} className="image-card">
          <a href="https://uk.wikipedia.org/wiki/%D0%9F%D1%80%D0%B0%D0%B3%D0%B0">
            <img
              className="image"
              src={imageUrl}
              alt={`Зображення ${index + 1}`}
              style={{ width: `${width}px` }}
            />
          </a>
          <button className="action-button" onClick={() => deleteImage(index)}>
            Видалити
          </button>
        </div>
      ))}
      <button className="action-button" onClick={addImage}>
        Додати
      </button>
      <button className="action-button" onClick={zoomIn}>
        Збільшити
      </button>
      <button className="action-button" onClick={zoomOut}>
        Зменшити
      </button>
    </div>
  );
}

export default Image;

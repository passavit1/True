import React, { useState, useEffect } from "react";
import { Nav } from "../../components/index";
import tablet from "../../items/data/tablet.json";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const StyledSlider = styled(Slider)`
  margin-top: 10px;

  .slick-slide {
    padding: 10px;
  }

  .slick-slide {
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 100%;
      scale: 1.1;
    }
  }

  .slick-prev,
  .slick-next {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1;
    cursor: pointer;
  }

  .slick-prev {
    left: 10px;
  }

  .slick-next {
    right: 10px;
  }
`;

const StyledCardContainer = styled.div`
  color: white;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  height: 93vh;
`;

const StyledCard = styled.div`
  border: 1px solid #dedbd5;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  padding: 20px;
  margin: 20px;
  width: 25%;
  height: 45%;
`;

const StyledImage = styled.img`
  width: 60%;
  height: 200px;
  border-radius: 8px;
  margin-bottom: 10px;
`;

const Compare = () => {
  const [loadedImages, setLoadedImages] = useState([]);

  useEffect(() => {
    const preloadImages = async () => {
      const imagePromises = tablet.flatMap((model) =>
        model.imageURLs.map((url) =>
          import(`../../items/pic/${model.name}/${url}`)
            .then((image) => ({ default: image.default }))
            .catch(() => ({ default: null }))
        )
      );

      const images = await Promise.all(imagePromises);
      setLoadedImages(images);
    };

    preloadImages();
  }, []);

  return (
    <div>
      <Nav />
      <StyledCardContainer>
        {tablet.map((model, index) => (
          <StyledCard key={model.id}>
            <h2>{model.name}</h2>
            <StyledSlider>
              {model.imageURLs.map((_, i) => {
                const image = loadedImages[index * 12 + i];
                if (!image || !image.default) {
                  return null;
                }
                return (
                  <div key={i}>
                    <StyledImage src={image.default} alt={model.name} />
                  </div>
                );
              })}
            </StyledSlider>
            <p>Price: ${model.price}</p>
            <p>Promotion: {model.promotion}</p>
            <p>Storage: {model.storage}</p>
            <p>RAM: {model.ram}</p>
            <p>Display: {model.display}</p>
            <p>Camera: {model.camera}</p>
          </StyledCard>
        ))}
      </StyledCardContainer>
    </div>
  );
};

export default Compare;

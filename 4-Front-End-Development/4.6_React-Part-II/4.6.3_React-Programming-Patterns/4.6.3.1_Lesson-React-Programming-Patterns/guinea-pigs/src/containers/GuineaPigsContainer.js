import React, { useState, useEffect } from "react";
// import { createRoot } from "react-dom/client";
import GuineaPigsSlideShow from "../components/GuineaPigsSlideShow";
import GuineaPigsForm from "../components/GuineaPigsForm";
import guineaPig1 from "../assets/img/react_photo-guineapig-1.jpg";
import guineaPig2 from "../assets/img/react_photo-guineapig-2.jpg";
import guineaPig3 from "../assets/img/react_photo-guineapig-3.jpg";
import guineaPig4 from "../assets/img/react_photo-guineapig-4.jpg";

const GUINEAPATHS = [guineaPig1, guineaPig2, guineaPig3, guineaPig4];

function GuineaPigsContainer() {
  const [currentGP, setCurrentGP] = useState(0);
  const [favoriteGP, setFavoriteGP] = useState(0);
  const src = GUINEAPATHS[currentGP];

  const favoriteChangeHandler = (event) => {
    setFavoriteGP(parseInt(event.target.value));
  };

  const resetFavoriteHandler = () => {
    setFavoriteGP(0);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentGP((prevGP) => {
        const nextGP = prevGP + 1;
        return nextGP % GUINEAPATHS.length;
      });
    }, 5000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      {/* <GuineaPigsSlideShow src={src} isFavorite={true} /> */}
      <GuineaPigsSlideShow src={src} isFavorite={true} />
      <GuineaPigsForm
        favoriteGP={favoriteGP}
        onSelectFavorite={favoriteChangeHandler}
        onResetFavorite={resetFavoriteHandler}
      />
    </>
  );
}

export default GuineaPigsContainer;

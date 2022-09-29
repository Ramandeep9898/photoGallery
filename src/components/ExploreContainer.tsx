import "./ExploreContainer.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { ImageCard } from "../components/ImageCard";

type UrlType = {
  full: string;
  raw: string;
  regular: string;
  small: string;
};
type ImageCollectionType = {
  id: string;
  download_location: string;
  urls: UrlType;
  html: string;
  self: string;
};
type ExploreContainerProps = {
  imagesData: ImageCollectionType;
};
const ExploreContainer = ({ imagesData }: ExploreContainerProps) => {
  return (
    <div className="container">
      {/* 
// @ts-ignore */}
      {imagesData.map((imageData) => (
        <ImageCard imageData={imageData} />
      ))}
    </div>
  );
};

export default ExploreContainer;

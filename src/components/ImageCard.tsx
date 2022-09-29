import React, { useState } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
  IonItem,
  IonIcon,
  IonLabel,
  IonButton,
  IonImg,
  IonThumbnail,
} from "@ionic/react";
import { pin, wifi, wine, warning, walk } from "ionicons/icons";
import "./image-card.css";
import { useAuth } from "../Context/useAuth";
type UrlType = {
  full: string;
  raw: string;
  regular: string;
  small: string;
};
type UserInfoType = {
  username: string;
  bio: string;
  location: string;
  total_likes: number;
  total_photos: number;
};
type ImageCollectionType = {
  id: string;
  download_location: string;
  urls: UrlType;
  html: string;
  self: string;
  user: UserInfoType;
};

type ImageCardProps = {
  imageData: ImageCollectionType;
};
export const ImageCard = ({ imageData }: ImageCardProps) => {
  const [veiwDetailsBtn, setVeiwDetailsBtn] = useState(false);
  const toggleDetails = () => {
    setVeiwDetailsBtn((wasOpened) => !wasOpened);
  };
  console.log(imageData);
  const { isUserLogined } = useAuth();
  return (
    <>
      <div className="card-container">
        <IonCard>
          <IonCardHeader>
            <div className="Card-img">
              <IonImg src={imageData.urls.full} />
            </div>
          </IonCardHeader>
          <IonButton onClick={toggleDetails}>View Details</IonButton>
          {veiwDetailsBtn && (
            <>
              <IonItem>
                <IonIcon icon={pin} slot="start" />
                <IonLabel>{imageData.user.location}</IonLabel>
              </IonItem>

              <IonCardContent>
                Username:{imageData.user.username}
              </IonCardContent>
              <IonCardContent>Bio:{imageData.user.bio}</IonCardContent>

              <IonCardContent>
                Likes:{imageData.user.total_likes}
              </IonCardContent>
              <IonCardContent>
                ToatlPhotos:{imageData.user.total_photos}
              </IonCardContent>
            </>
          )}
        </IonCard>
      </div>
    </>
  );
};

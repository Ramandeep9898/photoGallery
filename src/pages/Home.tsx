import { useEffect, useState, useContext } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonSearchbar,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Home.css";
import axios from "axios";

const Home: React.FC = () => {
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [imagesData, setImagesData] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await axios.get(
        `https://api.unsplash.com/search/photos?page=1&query=${searchValue}&client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}`
      );
      setSearchResult(response.data.results);
    })();
  }, [searchValue]);

  useEffect(() => {
    (async () => {
      const response = await axios.get(
        `https://api.unsplash.com/photos?client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}`
      );
      setImagesData(response.data);
    })();
  }, []);
  //@ts-ignore
  const onChangeHandler = (ev) => {
    setSearchValue(ev.target.value);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <div className="header-container">
            <IonTitle>change</IonTitle>
            <IonSearchbar
              animated={true}
              placeholder="Search Images"
              debounce={500}
              value={searchValue}
              onIonChange={onChangeHandler}
            ></IonSearchbar>
          </div>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">change</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer
          // @ts-ignore
          imagesData={!searchResult.length ? imagesData : searchResult}
        />
      </IonContent>
    </IonPage>
  );
};

export default Home;

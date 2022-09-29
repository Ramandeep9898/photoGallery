import React, { useState } from "react";
import "./login.css";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonItemDivider,
  IonButton,
} from "@ionic/react";
import { useAuth } from "../Context/useAuth";

export const InputExamples: React.FC = () => {
  const [loginDetails, setLoginDetails] = useState({
    name: "",
    password: "",
  });

  const { login } = useAuth();

  /* 
// @ts-ignore */
  const loginHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setLoginDetails((prevDetail) => ({
      ...prevDetail,
      [e.target.name]: e.target.value,
    }));
    login(loginDetails);
  };
  const credentialHandler = () => {
    setLoginDetails((prev) => ({
      ...prev,
      name: "Ramandeep",
      password: "raman@123",
    }));
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          {/* name */}
          <IonItem>
            <IonLabel position="floating">Name</IonLabel>
            <IonInput
              value={loginDetails.name}
              onIonChange={(e) => loginHandler(e)}
            ></IonInput>
          </IonItem>
          <IonItemDivider></IonItemDivider>

          {/* Password  */}
          <IonItem>
            <IonLabel position="floating">Password</IonLabel>
            <IonInput value={loginDetails.password}></IonInput>
          </IonItem>

          <IonItemDivider></IonItemDivider>
          {/* button / */}
          <IonButton onClick={() => credentialHandler()}>login</IonButton>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

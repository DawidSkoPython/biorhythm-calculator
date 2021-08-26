import "./App.css";
import React, { useState } from "react";
import { IonApp, IonButton, IonContent, IonDatetime, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonTitle, IonToast, IonToolbar } from "@ionic/react";
import { play as playIcon } from "ionicons/icons";

function App() {
  const [name, setName] = useState("Alice");
  const [birthDate, setBirthDate] = useState("2020-01-31");
  return (
    <div>
      <IonApp>
        <IonHeader>
          <IonToolbar>
            <IonTitle>
              <h1>Biorythms</h1>
            </IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <IonItem>
            <IonLabel position="stacked">Name:</IonLabel>
            <IonInput value={name} onIonChange={(event) => setName(event.target.value)} />
          </IonItem>
          <p>Name: {name}</p>
          <IonItem>
            <IonLabel position="stacked">Date of Birth:</IonLabel>
            <IonDatetime displayFormat="D MMM YYYY" />
          </IonItem>
          <p>Name: {name}</p>
          <p>Date of Birth: {birthDate}</p>
        </IonContent>
      </IonApp>
    </div>
  );
}

export default App;

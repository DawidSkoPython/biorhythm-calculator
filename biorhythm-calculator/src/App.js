import "./App.css";
import React, { useState } from "react";
import { IonApp, IonContent, IonDatetime, IonHeader, IonItem, IonLabel, IonTitle, IonToolbar } from "@ionic/react";

import BiorhythmCard from "./components/BiorhythmCard";

function App() {
  const [birthDate, setBirthDate] = useState("");
  const targetDate = new Date().toISOString();
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
            <IonLabel position="stacked">Date of Birth:</IonLabel>
            <IonDatetime displayFormat="D MMM YYYY" value={birthDate} onIonChange={(event) => setBirthDate(event.detail.value)} />
          </IonItem>

          <BiorhythmCard targetDate={targetDate} />
        </IonContent>
      </IonApp>
    </div>
  );
}

export default App;

import "./App.css";
import React, { useState } from "react";
import { IonApp, IonContent, IonDatetime, IonHeader, IonItem, IonLabel, IonTitle, IonToolbar } from "@ionic/react";

import BiorhythmCard from "./components/BiorhythmCard";
import { useLocalStorage } from "./hooks";

function App() {
  const [birthDate, setBirthDate] = useLocalStorage("birthDate", "");
  const [targetDate, setTargetDate] = useState(new Date().toISOString());

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
          {birthDate && <BiorhythmCard birthDate={birthDate} targetDate={targetDate} />}
          <IonItem>
            <IonLabel position="fixed">Date of Birth:</IonLabel>
            <IonDatetime displayFormat="D MMM YYYY" value={birthDate} onIonChange={(event) => setBirthDate(event.detail.value)} />
          </IonItem>
          <IonItem>
            <IonLabel position="fixed">Target Date:</IonLabel>
            <IonDatetime displayFormat="D MMM YYYY" value={targetDate} onIonChange={(event) => setTargetDate(event.detail.value)} />
          </IonItem>
        </IonContent>
      </IonApp>
    </div>
  );
}

export default App;

import React from "react";
import ItnCard from "../components/Cards/ItnCard";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

function ItinerairesPage() {
  return (
    <div>
      <h1>Itinéraires</h1>
      <div className="card flex flex-column md:flex-row gap-3">
        <div className="p-inputgroup flex-1">
          <InputText placeholder="Keyword" />
          <Button icon="pi pi-search" className="p-button-warning" />
        </div>
      </div>
      <ItnCard></ItnCard>
    </div>
  );
}

export default ItinerairesPage;

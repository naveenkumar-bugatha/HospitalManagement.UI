import * as React from "react";
import "./record.scss";
import { useState } from 'react';
import {Popup} from '../pop-up/pop-up';
import { Patient } from "../../common/models/patient";

export interface IRecordProps {
    navigate: any
    patient: Patient
}
export interface IRecordState {
    isPopupOpen: boolean,
}
export function Record(props: IRecordProps) {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    return (
      <>
        <div className="patient-record">
            <div className="patient-coulmn">{props.patient.id}</div>
            <div className="patient-coulmn">{props.patient.name}</div>
            <div className="patient-coulmn">{props.patient.age}</div>
            <div className="patient-coulmn">{props.patient.address}</div>
            <div className="patient-coulmn-actions">
                <button className="patient-button" onClick={()=>null}>Edit</button>
                <button className="patient-button" onClick={()=>setIsPopupOpen(true)}>Delete</button>
            </div>
        </div>
        <Popup isOpen={isPopupOpen} onClose={()=>setIsPopupOpen(false)} />
      </>
    );
  }
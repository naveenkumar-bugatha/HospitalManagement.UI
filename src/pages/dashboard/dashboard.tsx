import './dashboard.scss';
import { Header } from "../../components/header/header";
import { Footer } from '../../components/footer/footer';
import { useAppSelector } from '../../store/store';
import { useContext, useEffect, useState } from 'react';
import ApiService from '../../api/apiService';
import { ApiConstants } from '../../api/apiConstants';
import { Patient } from '../../common/models/patient';
import { Record } from '../../components/record/record';
import { UserContext } from '../../contexts/userContext';

type DashboardProps = {
    navigate: any;
}

export function Dashboard(props: DashboardProps)
{ 
    let patientsData : Patient[] = [];
    const [patients , setPatients] = useState(patientsData);
    const [x , setX] = useState(0);
    const [y , setY] = useState(0);

    
    const displayMousePosition = (e:any) => {
        setX(e.clientX);
        setY(e.clientY);
    }

    useEffect(()=>{
        ApiService.get(ApiConstants.Patient.GetAll).then((res)=>{
            setPatients(res);
          })
          window.addEventListener('mousemove', displayMousePosition)
     },[]);
     const {user} = useContext(UserContext);
    const loggedInUser = useAppSelector(state => state.LoginUser.user)
    return(
        <div>
            <Header loggedInUserName = {loggedInUser.name}/>
            <div style={{textAlign:'center'}}>
                Coordinates [ X - {x} ]  [ Y - {y} ] 
                <span style={{fontWeight:600, paddingLeft:'10px'}}>{user.email}</span>
            </div>
                <div className="header-record">
                    <div className="add-button-div">
                        <button className="add-button" onClick={()=>null}>+ Add Patient</button>
                    </div>
                    <div className="patient-header">List of Patients</div> 
                </div>
                <div className="patient-header-record">
                    <div className="patient-coulmn-header">ID</div>
                    <div className="patient-coulmn-header">Patient Name</div>
                    <div className="patient-coulmn-header">Age</div>
                    <div className="patient-coulmn-header">City</div>
                    <div className="patient-actions">Actions</div>
                </div>
                {
                    patients.map((each) =>(
                        <Record navigate={props.navigate} patient={each}/>
                    ))
                }                
            <Footer/>
        </div>
    );
}
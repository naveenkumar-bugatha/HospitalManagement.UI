import './dashboard.scss';
import { Header } from "../../components/header/header";
import { Footer } from '../../components/Footer/footer';
import { useAppSelector } from '../../store/store';

type DashboardProps = {
    navigate: any;
}

export function Dashboard(props: DashboardProps)
{ 
    const loggedInUser = useAppSelector(state => state.LoginUser.user)
    return(
        <div>
            <Header loggedInUserName = {loggedInUser.name}/>
                Under Development...
            <Footer/>
        </div>
    );
}
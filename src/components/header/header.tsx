import './header.scss';

type HeaderProps = {
    loggedInUserName: string; 
}

export function Header(props: HeaderProps)
{ 
    return(
        <div className="header">
            <span className='header-name'>CES</span>
            <span className='login-user'>Hi., {props.loggedInUserName}</span>
        </div>
    );
}
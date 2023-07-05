import {Dispatch, SetStateAction, createContext, ReactNode, useState} from 'react';

export type User = {
    name: string,
    email: string,
}

export interface IUserContext{
    user: User;
    setUser: Dispatch<SetStateAction<User>>; 
}

const defaultState = {
    user: {
        name: '',
        email: ''
    },
    setUser: (user: User) => {}
} as IUserContext

export const UserContext = createContext(defaultState);

type userProvideProps = {
    children : ReactNode
}

export default function UserProvide({children}: userProvideProps){
    const [user, setUser] = useState<User>({
        name:'',
        email: ''
    });
    return(
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}
import React from 'react';
import {createContext, useState} from 'react';
import {v4 as uuidv4} from 'uuid';

const LogContext = createContext();

export function LogContextProvider({children}){
    const [logs, setLogs] = useState([]);

    const onCreate = ({title, duedate, comment}) => {
        const log = {
            id: uuidv4(),
            title, 
            duedate,
            comment,
        };
        setLogs([log, ...logs]);
    };
    return(
        <LogContext.Provider value = {{logs, onCreate}}>
            {children}
        </LogContext.Provider>
    );
}

export default LogContext;
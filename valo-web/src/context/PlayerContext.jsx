import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";




export const PlayerContext = createContext();

export const PlayerProvider = ({ children }) => {

    const [profile, setProfile] = useState(null);
    const [history, setHistory] = useState(null);

    const navigate = useNavigate();

    const handleSetProfile = (profile) => {
        setProfile(profile);
    }

    const handleSetHistory = (history) => {
        setHistory(history);
    }


    return (<PlayerContext.Provider value={{ handleSetProfile, handleSetHistory, profile, history }}>
        {children}
    </PlayerContext.Provider>)
}
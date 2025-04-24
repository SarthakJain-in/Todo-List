import { useEffect, useState } from "react";

export const TodoDateTime = () => {
    
    const [dateTime, setDateTime] = useState("");

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const curDate = now.toLocaleDateString();
            const curTime = now.toLocaleTimeString();
    
            setDateTime(`${curDate} - ${curTime}`);
        }, 1000)

        return () => clearInterval(interval)
    }, [])

    return (
        <h2 className="date-time">{dateTime}</h2>
    )
}
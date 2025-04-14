import React, { useState } from "react";
import {Button} from "../src/Button";

type UserCardProps = {
    name:string;
    email: string;
}


export const UserCard: React.FC<UserCardProps> = ({name, email}) =>
{
    const [confirmed, setConfirmed] = useState(false)
    const handleConferma = async () => {
        await new Promise((resolve) => setTimeout(resolve, 3000)); 
    setConfirmed(true);
  };

    return (
        <div style={{border: "1px solid #ccc", padding: "1rem"}}>
            <h3>{name}</h3>
            <p>{email}</p>
            <Button label="Conferma" onClick={handleConferma} />
            {confirmed && <p>Utente Confermato</p>} 
        </div>   
    );}




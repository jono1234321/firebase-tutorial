import React, { useState } from "react";
import { Card, Button, Alert } from "react-bootstrap"; 

export default function Dashboard() {

    const [error, setError] = useState(""); 

    function handleLogout() {

    }

    return (
        <div>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Profile</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <strong>{currentUser.email}</strong>
                </Card.Body>

            </Card>
            <div className="w-100 text-center mt-2">
               <Button variant="link" onClick={handleLogout}>Log out</Button>
            </div>
            
        </div>
    )
}

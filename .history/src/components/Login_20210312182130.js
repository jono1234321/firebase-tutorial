import React, { useState, useRef } from 'react'
import { Form, Button, Card, Alert } from 'react-bootstrap'
import { useAuth } from "../contexts/AuthContext"; 
import { Link } from "react-router"; 

export default function Login() {

    const emailRef = useRef();
    const passwordRef = useRef();

    const [error, setError] = useState(""); 
    const [loading, setLoading] = useState(false); 

    const { signUp } = useAuth(); 

    async function handleSubmit (e) {
        e.preventDefault();

        try{
            setError("");
            setLoading(true); 
            await signUp(emailRef.current.value, passwordRef.current.value);
        } catch {
            setError("Failed to create an account"); 
        }
        
        setLoading(false); 
    }

    return (
        <div>
        <Card>
            <Card.Body>
                <h2 className="text-center mb-4">Login</h2>
                {error && <Alert variant ="danger">{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group id="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" ref={emailRef} required />
                    </Form.Group>
                    <Form.Group id="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" ref={passwordRef} required />
                    </Form.Group>
                    <Button disabled={loading} className="w-100" type="submit">
                        Login
                    </Button>
                </Form>
            </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
            Don't have an account? <Link to="/signup">Sign Up</Link>
        </div>
        </div>
    )
}

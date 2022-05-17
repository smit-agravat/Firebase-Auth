import React, { useRef, useState } from 'react'
import { Form, Card, Button, Alert } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

export default function Login() {

    const emailRef = useRef()
    const passwordRef = useRef()
    const { login } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    
    async function handleSubmit(event){
        event.preventDefault()
        try {
            setError('')
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            navigate('/')            
        } catch {
            setError('Failed to Login')
        }
        setLoading(false)
    }

  return (
    <>
    <Card className='shadow-lg p-3 mb-2 bg-white rounded'>
        <Card.Body>
            <h2 className='text-center mb-4'>Log In</h2>
            {error && <Alert variant='danger'>{error}</Alert>}
            <Form onSubmit={handleSubmit}>
                <Form.Group id='email'>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type='email' ref = {emailRef} required />
                </Form.Group>
                <Form.Group id='password'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type='password' ref = {passwordRef} required />
                </Form.Group>
                <Button disabled = {loading} className='w-100 mt-4 mb-4' type='submit'>Log In</Button>
            </Form>
                <div className='w-100 text-center mt-2'>
                    <Link to='/forgot-password'>Forgot Password</Link>
                 </div>
                 <div className='w-100 text-center mt-3'>
                    Need an Account? <Link to='/signup'>Sing Up</Link>
                 </div>
        </Card.Body>
    </Card>
    </>
  )
}

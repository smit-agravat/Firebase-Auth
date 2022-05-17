import React, { useRef, useState } from 'react'
import { Form, Card, Button, Alert } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

export default function Singup() {

    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { singup } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    
    async function handleSubmit(event){
        event.preventDefault()

        if(passwordRef.current.value !== 
            passwordConfirmRef.current.value){
                return setError('Password do not match')
            }
        try {
            setError('')
            setLoading(true)
            await singup(emailRef.current.value, passwordRef.current.value) 
            navigate('/')             
        } catch {
            setError('Failed to create an account')
        }
        setLoading(false)
    }

  return (
    <>
    <Card className='shadow-lg p-3 mb-2 bg-white rounded'>
        <Card.Body>
            <h2 className='text-center mb-4'>Sing Up</h2>
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
                <Form.Group id='password-confirm'>
                    <Form.Label>Password Confirmation</Form.Label>
                    <Form.Control type='password-confirm' ref = {passwordConfirmRef} required />
                </Form.Group>
                <Button disabled = {loading} className='w-100 mt-4 mb-4' type='submit'>Sing Up</Button>
            </Form>
            <div className='w-100 text-center mt-2'>
                Already have an account? <Link to = '/login'>Log In</Link>
            </div>
        </Card.Body>
    </Card>
    </>
  )
}

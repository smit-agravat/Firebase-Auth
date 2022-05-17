import React, { useRef, useState } from 'react'
import { Form, Card, Button, Alert } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

export default function Updateprofile() {

    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { currentUser, updateEmail, updatePassword } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    
    function handleSubmit(event){
        event.preventDefault()

        if(passwordRef.current.value !== 
            passwordConfirmRef.current.value){
                return setError('Password do not match')
            }

        const promises = []

        setLoading(true)
        setError('')

        if(emailRef.current.value !== currentUser.email){
          promises.push(updateEmail(emailRef.current.value))
        }

        if(passwordRef.current.value){
          promises.push(updatePassword(passwordRef.current.value))
        }

        Promise.all(promises).then(() => {
          navigate('/')
        }).catch(() => {
          setError('Failed to update profile')
        }).finally(() =>{
          setLoading(false)
        })
    }

  return (
    <>
    <Card className='shadow-lg p-3 mb-2 bg-white rounded'>
        <Card.Body >
            <h2 className='text-center mb-4'>Update Profile</h2>
            {error && <Alert variant='danger'>{error}</Alert>}
            <Form onSubmit={handleSubmit} >
                <Form.Group id='email'>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type='email' ref = {emailRef} required 
                    defaultValue={currentUser.email}/>
                </Form.Group>
                <Form.Group id='password'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type='password' ref = {passwordRef}
                     placeholder='Leave blank to keep the same' />
                </Form.Group>
                <Form.Group id='password-confirm'>
                    <Form.Label>Password Confirmation</Form.Label>
                    <Form.Control type='password-confirm' ref = {passwordConfirmRef} 
                    placeholder='Leave blank to keep the same'/>
                </Form.Group>
                <Button disabled = {loading} className='w-100 mt-4 mb-4' type='submit'>Update</Button>
            </Form>
            <div className='w-100 text-center mt-1'>
              <Link to = '/'>Cancle</Link>
            </div>
        </Card.Body>
    </Card>
    </>
  )
}

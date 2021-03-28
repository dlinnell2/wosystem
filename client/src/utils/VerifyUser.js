import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom'
import { Routing } from './index'
import { Navigation } from '../components/General'
import Container from 'react-bootstrap/Container'
import { useAuthState } from '../components/Context'

export const VerifyUser = ({ children }) => {

    const userDetails = useAuthState().data;

    const evaluateUser = () => (
        userDetails ? (
            <>
                <Navigation />
                <Container fluid>
                    <Routing />
                </Container>
            </>
        ) : (
                <Redirect to={{ pathname: '/login' }} />
            )
    )
    return (
        evaluateUser()
    )
}
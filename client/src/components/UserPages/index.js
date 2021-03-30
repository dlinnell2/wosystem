import React from 'react';
import { Routing } from '../../utils'
import { Navigation } from '../General'
import Container from 'react-bootstrap/Container'

export const UserPages = props => {

    return (
        <>
            <Navigation />
            <Container fluid>
                <Routing />
            </Container>
        </>
    )

}
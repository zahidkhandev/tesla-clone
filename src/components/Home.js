import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
    return (
        <Container>

            <Section
                title="Model S"
                description="Order Online for Touchless Delivery"
                backgroundImage="model-s.jpg"
                leftButtonText="Custom Order"
                rightButtonText="Existing inventory"
            />
            <Section
                title="Model Y"
                description="Order Online for Touchless Delivery"
                backgroundImage="model-y.jpg"
                leftButtonText="Custom Order"
                rightButtonText="Existing inventory"
            />
            <Section
                title="Model 3"
                description="Order Online for Touchless Delivery"
                backgroundImage="model-3.jpg"
                leftButtonText="Custom Order"
                rightButtonText="Existing inventory"
            />
            <Section
                title="Model X"
                description="Order Online for Touchless Delivery"
                backgroundImage="model-x.jpg"
                leftButtonText="Custom Order"
                rightButtonText="Existing inventory"
            />
            <Section
                title="Lowest Cost Solar Panels"
                description="Money-back guarantee"
                backgroundImage="solar-panel.jpg"
                leftButtonText="Order Now"
                rightButtonText="Learn more"
            />
            <Section
                title="Solar For New Roofs"
                description="Money-back guarantee"
                backgroundImage="solar-roof.jpg"
                leftButtonText="Order now"
                rightButtonText="Learn more"
            />
            <Section
                title="Accessories"
                description=""
                backgroundImage="accessories.jpg"
                leftButtonText="Order now"
            />

        </Container>
    )
}

export default Home

const Container = styled.div`
    height: 100vh;
`;


import React, { Component } from 'react'
import { Image,TextImage, Title }from './styled';

export default class Home extends Component {
    render() {
        return (
            <div>
                <Image src="https://www.w3schools.com/w3images/la.jpg" style={{ width: "100%" }} />
                <TextImage style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                }} class="w3-display-bottommiddle w3-container w3-text-white w3-padding-32 w3-hide-small">
                    <Title>Chicago</Title>
                    <p><b>Thank you, Chicago - A night we won't forget.</b></p>
                </TextImage>
            </div>
        )
    }
}

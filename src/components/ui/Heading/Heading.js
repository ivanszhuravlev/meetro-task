import React, { Component } from 'react'
import { View, Text } from 'react-native'
import styles from './HeadingStyles'

class Heading extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const {item} = this.props
        return (
            <Text style={styles.heading}>{item.name}</Text>
        );
    }
}

export default Heading;

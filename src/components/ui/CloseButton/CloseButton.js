import React, { Component } from 'react'
import { TouchableOpacity } from 'react-native'
import styles from './CloseButtonStyles'
import Icon from 'react-native-vector-icons/AntDesign'

class CloseButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const {item} = this.props
        return (
            <TouchableOpacity style={styles.button}>
                <Icon name="close" style={styles.icon} />
            </TouchableOpacity>
        );
    }
}

export default CloseButton;

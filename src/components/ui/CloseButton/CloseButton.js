import React, { Component } from 'react'
import { TouchableOpacity } from 'react-native'
import styles from './CloseButtonStyles'
import Icon from 'react-native-vector-icons/AntDesign'

class CloseButton extends Component {
    pressCallback = () => {
        this.props.handleClosePress()
    }

    render() {
        return (
            <TouchableOpacity style={styles.button} onPress={this.pressCallback}>
                <Icon name="close" style={styles.icon} />
            </TouchableOpacity>
        );
    }
}

export default CloseButton;

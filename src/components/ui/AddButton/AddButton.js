import React, { Component } from 'react'
import { TouchableOpacity } from 'react-native'
import styles from './AddButtonStyles'
import Icon from 'react-native-vector-icons/AntDesign'

class AddButton extends Component {
    render() {
        return (
            <TouchableOpacity style={styles.button}>
                <Icon name="plus" style={styles.icon} />
            </TouchableOpacity>
        );
    }
}

export default AddButton;

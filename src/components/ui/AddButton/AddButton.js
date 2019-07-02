import React, { Component } from 'react'
import { TouchableOpacity } from 'react-native'
import styles from './AddButtonStyles'
import Icon from 'react-native-vector-icons/AntDesign'
import Api from '../../../api/api'

class AddButton extends Component {
    pressCallback = () => {
        if (this.props.store) {
            this.props.store.post()
        }
    }

    render() {
        return (
            <TouchableOpacity style={styles.button} onPress={this.pressCallback}>
                <Icon name="plus" style={styles.icon} />
            </TouchableOpacity>
        );
    }
}

export default AddButton;

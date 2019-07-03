import React, { Component } from 'react'
import { TouchableOpacity } from 'react-native'
import styles from './DeleteButtonStyles'
import Icon from 'react-native-vector-icons/AntDesign'

class DeleteButton extends Component {
    pressCallback = () => {
        if (this.props.store) {
            this.props.store.delete(this.props.item.created)
        }
    }

    render() {
        return (
            <TouchableOpacity style={styles.button} onPress={this.pressCallback}>
                <Icon name="close" style={styles.icon} />
            </TouchableOpacity>
        );
    }
}

export default DeleteButton;

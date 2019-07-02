import React, { Component } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import styles from './DescriptionStyles'
import Icon from 'react-native-vector-icons/AntDesign'


export class Description extends Component {

    renderDesc = (item) => {
        let component = null

        component = item.description ?
            <Text style={styles.text}>{item.description}</Text> : (
                <View style={styles.addWrapper}>
                    <Text style={styles.addText}>Описание</Text>
                    <Icon name="plus" style={styles.addIcon} />
                </View>
            )

        return component
    }

    render() {
        const {item, index} = this.props
        return (
            <TouchableOpacity style={styles.button}>
                {this.renderDesc(item)}
            </TouchableOpacity>
        )
    }
}

export default Description

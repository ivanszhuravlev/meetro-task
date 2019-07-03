import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import styles from './SubmitButtonStyles'

const SubmitButton = (props) => {
    return (
        <TouchableOpacity 
            style={[styles.button, props.style]}
            onPress={() => props.onPress()}
        >
            <Text style={styles.label}>{props.label}</Text>
        </TouchableOpacity>
    )
}

export default SubmitButton

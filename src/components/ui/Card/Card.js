import React from 'react'
import { View, Text } from 'react-native'
import styles from './CardStyles'

const Card = (props) => {
    return (
        <View style={[styles.cardWrap, props.first && styles.first]}>
            <View style={styles.card}>
                {props.children}
            </View>
        </View>
    )
}

export default Card

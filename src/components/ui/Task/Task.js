import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Card from '../Card/Card'

export class Task extends Component {
    render() {
        const {item, index} = this.props
        return (
            <Card
                first={index == 0}
            >
                <Text>{item.name}</Text>
                <Text>{item.description}</Text>
            </Card>
        )
    }
}

export default Task

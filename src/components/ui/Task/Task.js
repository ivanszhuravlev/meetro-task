import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Card from '../Card/Card'
import Heading from '../Heading/Heading';
import CloseButton from '../CloseButton/CloseButton';
import Description from '../Description/Description';

export class Task extends Component {
    render() {
        const {item, index, store} = this.props
        return (
            <Card
                first={index == 0}
            >
                <CloseButton item={item} index={index} store={store} />
                <Heading item={item} />
                <Description item={item} index={index} />
            </Card>
        )
    }
}

export default Task

import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Card from '../Card/Card'
import Heading from '../Heading/Heading';
import DeleteButton from '../DeleteButton/DeleteButton';
import Description from '../Description/Description';

export class Task extends Component {
    render() {
        const {item, index, store} = this.props
        return (
            <Card
                first={index == 0}
            >
                <DeleteButton item={item} index={index} store={store} />
                <Heading item={item} store={store}/>
                <Description item={item} store={store}/>
            </Card>
        )
    }
}

export default Task

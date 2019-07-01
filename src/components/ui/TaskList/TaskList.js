import React, { Component } from 'react'
import { Text, View, FlatList } from 'react-native'
import Api from '../../../api/api'

const api = new Api()

export class TaskList extends Component {
    render() {
        const data = api.get()
        return (
            <FlatList
                data={data}
                renderItem={({item}) => <Text>{item.key}</Text>}
                />
        )
    }
}

export default TaskList


import React, { Component } from 'react'
import { Text, View, FlatList } from 'react-native'
import Api from '../../../api/api'

export class TaskList extends Component {

    constructor(props) {
        super(props)

        this.state = {
            list: null
        };

    };

    componentDidMount() {
        this.getApiObj()
            .then((api) => {
                this.api = api
                return this.api.get()
            })
            .then((data) => {
                this.setState({
                    ...this.state,
                    list: data
                })
            })
    }

    getApiObj = async() => {
        return await Api.build()
    }

    render() {
        const {list} = this.state
        console.log(list)
        return (
            <FlatList
                data={list}
                renderItem={({ item }) => <Text>{item.name}</Text>}
            />
        )
    }
}

export default TaskList


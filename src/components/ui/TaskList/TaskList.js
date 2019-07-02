import React, { Component } from 'react'
import { Text, View, FlatList } from 'react-native'
import Api from '../../../api/api'
import Task from '../Task/Task'
import { KeyboardAwareFlatList } from 'react-native-keyboard-aware-scroll-view'
import styles from './TaskListStyles'
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
        return (
            <KeyboardAwareFlatList
                data={list}
                renderItem={
                    ({ item, index }) => 
                        <Task 
                            item={item} 
                            key={item.created} 
                            index={index}
                        />
                }
                style={styles.scrollView}
                extraScrollHeight={-80}
                enableOnAndroid={true}
            />
        )
    }
}

export default TaskList


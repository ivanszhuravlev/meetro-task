import React, { Component } from 'react'
import { Text, View, FlatList } from 'react-native'
import Task from '../Task/Task'
import { KeyboardAwareFlatList } from 'react-native-keyboard-aware-scroll-view'
import styles from './TaskListStyles'
import {observer} from 'mobx-react'

@observer
class TaskList extends Component {
    render() {
        return this.props.store && (
            <KeyboardAwareFlatList
                data={this.props.store.get()}
                keyExtractor={item => item.created}
                renderItem={
                    ({ item, index }) => 
                        <Task 
                            item={item} 
                            index={index}
                            store={this.props.store}
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


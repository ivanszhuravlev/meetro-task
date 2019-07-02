import React, { Component } from 'react'
import { View, Text } from 'react-native'
import styles from './TaskListScreenStyles'
import TaskList from '../../ui/TaskList/TaskList'
import AddButton from '../../ui/AddButton/AddButton';
import {observer} from 'mobx-react'

@observer
class TaskListScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	}

	render() {
		return (
			<View style={styles.activity}>
				<Text> TaskListScreen </Text>
				<TaskList store={this.props.store}/>
				<AddButton store={this.props.store} />
			</View>
		);
	}
}

export default TaskListScreen;

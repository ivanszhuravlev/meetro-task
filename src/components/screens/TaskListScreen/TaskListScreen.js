import React, { Component } from 'react'
import { View, Text } from 'react-native'
import styles from './TaskListScreenStyles'
import TaskList from '../../ui/TaskList/TaskList'

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
				<TaskList />
			</View>
		);
	}
}

export default TaskListScreen;

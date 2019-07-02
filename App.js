import React, { Component } from 'react'
import { View } from 'react-native'
// import StatusBar from './src/components/StatusBar/StatusBar'
// import UserSettings from './src/pages/UserSettings/UserSettings';
import TaskListScreen from './src/components/screens/TaskListScreen/TaskListScreen'

export default class App extends Component {
	render() {
		return (
			<View>
				<TaskListScreen />
			</View>
    	)
	}
}
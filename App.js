import React, { Component } from 'react'
import { View } from 'react-native'
import TaskListScreen from './src/components/screens/TaskListScreen/TaskListScreen'
import api from './src/api/api'

export default class App extends Component {
	constructor(props) {
		super(props)

		this.state = {
			store: null
		};
	};


	componentDidMount() {
		this.getApi()
			.then((api) => {
				this.setState({
					...this.state,
					store: api
				})
			})
	}

	getApi = async() => {
		return api
	}

	render() {
		return (
			<View>
				<TaskListScreen store={this.state.store} />
			</View>
		)
	}
}
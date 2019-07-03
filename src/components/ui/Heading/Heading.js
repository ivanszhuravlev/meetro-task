import React, { Component } from 'react'
import { TextInput } from 'react-native'
import styles from './HeadingStyles'

class Heading extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.item.name
        };
    }

    blurCallback = () => {
        this.props.store.put('name', this.state.value, this.props.item.created)
    }

    editCallback = (text) => {
        this.setState({
            ...this.state,
            value: text
        })
    }

    render() {
        const { value } = this.state
        return (
            <TextInput
                value={value}
                style={styles.heading}
                onBlur={this.blurCallback}
                onChangeText={this.editCallback}
            />
        );
    }
}

export default Heading;

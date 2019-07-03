import React, { Component } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import styles from './DescriptionStyles'
import Icon from 'react-native-vector-icons/AntDesign'
import DescModal from '../DescModal/DescModal';

export class Description extends Component {

    constructor(props) {
        super(props)

        this.state = {
            modalVisible: false
        };
    };


    renderDesc = (item) => {
        let component = null

        component = item.description ?
            <Text style={styles.text}>{item.description}</Text> 
        : (
            <View style={styles.addWrapper}>
                <Text style={styles.addText}>Описание</Text>
                <Icon name="plus" style={styles.addIcon} />
            </View>
        )

        return component
    }

    toggleModal = () => {
        this.setState({
            ...this.state,
            modalVisible: !this.state.modalVisible
        })
    }

    render() {
        const { item, store } = this.props
        return (
            <React.Fragment>
                <TouchableOpacity style={styles.button} onPress={this.toggleModal}>
                    {this.renderDesc(item)}
                </TouchableOpacity>
                <DescModal 
                    isVisible={this.state.modalVisible} 
                    item={item} 
                    handleClose={this.toggleModal}    
                    store={store}
                />
            </React.Fragment>
        )
    }
}

export default Description

import React, { Component } from 'react'
import { Text, View, TextInput } from 'react-native'
import Modal from "react-native-modal";
import CloseButton from '../CloseButton/CloseButton';
import styles from './DescModalStyles'
import SubmitButton from '../SubmitButton/SubmitButton';

export class DescModal extends Component {
    constructor(props) {
        super(props)

        this.state = {
            value: props.item.description
        };
    };

    closeModal = () => {
        this.props.handleClose()
    }

    submitCallback = async() => {
        console.log('description', this.state.value, this.props.item.created)
        this.props.store.put('description', this.state.value, this.props.item.created)
        this.closeModal()
    }

    editCallback = (text) => {
        this.setState({
            ...this.state,
            value: text
        })
    }

    render() {
        const { item, isVisible } = this.props
        const { value } = this.state
        return (
            <Modal 
                isVisible={isVisible}
                transparent={true}
                onBackdropPress={this.closeModal}
                animationIn="slideInDown"
                animationOut="slideOutUp"
                style={styles.modalWrap}
                avoidKeyboard={true}
            >
                <View style={styles.modal}>
                    <CloseButton handleClosePress={this.closeModal} />
                    <Text style={styles.heading}>{item.name}</Text>
                    <TextInput
                        value={value}
                        style={styles.textField}
                        // onBlur={this.blurCallback}
                        onChangeText={this.editCallback}
                        multiline={true}
                        numberOfLines={7}
                        placeholder="Напишите описание"
                        placeholderTextColor="#d0d4de"
                    />
                    <SubmitButton 
                        label="ГОТОВО"
                        style={styles.submitButton}
                        onPress={this.submitCallback}
                    />
                </View>
            </Modal>
        )
    }
}

export default DescModal

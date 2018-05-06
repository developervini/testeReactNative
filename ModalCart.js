import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Modal } from 'react-native'

export default class ModalCart extends React.Component {

    render() {
        return (
            <Modal animationType="fade" transparent={true} visible={this.props.visible} onRequestClose={() => { }}>
                <View style={styles.modalContainer}>
                    <View style={styles.boxContainer}>

                        {this.props.products.map((product, key) => {
                            return (
                                <Text style={styles.product} key={key}>{product.name}</Text>
                            )
                        })}

                        <View style={styles.buttonContainer}>
                            <TouchableOpacity
                                style={[styles.button, styles.cancelButton]}
                                onPress={() => { this.props.closeModal() }}
                            >
                                <Text style={styles.buttonText}>Fechar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        )
    }
}

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.7)',
        justifyContent: 'center',
        alignItems: 'center'
    },

    boxContainer: {
        padding: 20,
        backgroundColor: '#FFF',
        borderRadius: 10,
        alignItems: 'center',
        width: 280
    },

    buttonContainer: {
        marginTop: 10,
        height: 40,
        flexDirection: 'row'
    },

    button: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 3
    },

    cancelButton: {
        backgroundColor: '#E25F5F',
        marginRight: 5
    },

    buttonText: {
        fontWeight: 'bold',
        color: '#FFF'
    },

    product: {
        flexDirection: 'row',
        justifyContent: 'flex-start'
    }
})
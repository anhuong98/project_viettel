import * as React from 'react'
import {Modal, Portal, Text, Button, Provider} from 'react-native-paper'
const MyPaper = () => {
    const [visible, setVisible] = React.useState(false)
    const showModal = () => setVisible(true)
    const hideModal = () => setVisible(false)
    const containerStyle = {backgroundColor: 'white', padding: 20}
    return (
        <Provider>
            <Portal>
                <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}
                 animationType={'slide'}
                 transparent={true}
                 style = {{justifyContent:'flex-end'}}
                 >
                    <Text style = {{position:'absolute'}}> Example Modal</Text>
                    </Modal>
            </Portal>
            <Button style = {{marginTop:30}} onPress = {showModal}>Show</Button>
        </Provider>
    )
}
export default MyPaper
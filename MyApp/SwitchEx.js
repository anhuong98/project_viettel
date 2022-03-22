import React, { useState } from 'react'
import { Switch, View, Text, StyleSheet, SafeAreaView } from 'react-native'
const SwitchExample = () => {
    const [switchValue, setSwitchValue] = useState(false)
    const toggleSwitch = (value) => {
        setSwitchValue(value)
    }
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <Text style = {{marginTop:9,marginLeft:20, fontSize:20}}>
                    {switchValue ? 'Switch is ON' : 'Switch is OFF'}
                </Text>
                <Switch style={{ marginTop:9, marginLeft:200, transform: [{scale:1.5}]}}
                    onValueChange={toggleSwitch}
                    value={switchValue} />
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap:'wrap',
        // justifyContent: 'center',
        // alignItems: 'center',
    }
})
export default SwitchExample
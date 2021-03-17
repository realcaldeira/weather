import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { DrawerItemList } from '@react-navigation/drawer';

export default function CustomDrawer(props){
    return(
        <View style={styles.container}>
            <View style={styles.textContainer} {...props} >
                <Text style={styles.text}>Weather</Text>
            </View>

            <DrawerItemList {...props}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        paddingBottom: 30
    },
    textContainer:{
        alignItems: 'center',
        justifyContent:'center',
        paddingTop: 15,
    },
    text:{
        fontSize: 25

    }
})
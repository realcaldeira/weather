import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { Container } from '../../styles/components/Menu'

export default function Menu(){
   const navigation = useNavigation();

    return(
        <Container onPress={() => navigation.openDrawer() }>
            <Feather 
                name="menu"
                size={36}
                color="#373737"
            />
        </Container>
    )
}

import React from 'react';
import { Text } from 'react-native';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';

import { Container, Condition } from '../../styles/components/Conditions';

export default function Conditions({ weather }){
    return(
        <Container>
            <Condition>
                <Feather name='wind' size={23} color="#1ed6ff"/>
                <Text>{weather.results.wind_speedy}</Text>
            </Condition>

            <Condition>
                <MaterialCommunityIcons name='weather-sunset-up' size={23} color="#1ed6ff"/>
                <Text>{weather.results.sunrise}</Text>
            </Condition>

            <Condition>
                <MaterialCommunityIcons name='weather-sunset-down' size={23} color="#1ed6ff"/>
                <Text>{weather.results.sunset}</Text>
            </Condition>

            <Condition>
                <Feather name='droplet' size={23} color="#1ed6ff"/>
                <Text>{weather.results.humidity}</Text>
            </Condition>
        </Container>
    )
}

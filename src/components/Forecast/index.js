import React from 'react';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { condition } from '../../utils/condition';

import { Container, Date, Max, Temp } from '../../styles/components/Forecast';

export default function Forecast({ data }){
   let icon = condition(data.condition)

    return(
        <Container>
            <Date> {data.date}</Date>
            
            <Ionicons name={icon.name} color={icon.color} size={25} />
            
            <Temp>
                <Text>{data.min}º</Text>
                <Max>{data.max}º</Max>
            </Temp>
        </Container>
    )
}
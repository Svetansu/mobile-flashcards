import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { white } from '../utils/colors';

export default function Info({ onPress, style, text }) {
    return (
    	<View style={{margin: 30}}>
    		<TouchableOpacity onPress={onPress}>
		        <Text style={{fontSize: 15, color: white}}>{text}</Text>
		    </TouchableOpacity>
    	</View>
    )
}
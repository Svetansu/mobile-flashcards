import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

export default function ActionButton({ onPress, styles, text, color }) {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.iosBtn, { backgroundColor: color }]}>
      <Text style={styles.submitBtnText}>{text}</Text>
    </TouchableOpacity>
  )
}
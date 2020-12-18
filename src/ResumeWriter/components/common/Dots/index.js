import React from 'react';
import { Text, View } from '@react-pdf/renderer';
import styles from '../../../assets/styles';

const Dots = ({ title, point }) => {
  const dots = [1, 2, 3, 4, 5];

  return (
    <View style={{ ...styles.row, ...styles.pd_tb_5 }}>
      <View style={styles.col_50}>
        <Text>{title}</Text>
      </View>
      <View style={styles.col_50}>
        <View style={styles.dots}>
          {dots.map((dot) => <Text style={{ ...styles.dot, ...(dot > point && styles.dot_empty) }} />)}
        </View>
      </View>
    </View>
  );
};

export default Dots;
import React from 'react';
import { Text, View } from '@react-pdf/renderer';

import { list as styles } from '../../../assets/styles';

const List = ({ children }) => children;

export const Item = ({ children }) => (
  <View style={styles.item}>
    <Text style={styles.bulletPoint}>•</Text>
    <Text style={styles.itemContent}>{children}</Text>
  </View>
);

export default List;

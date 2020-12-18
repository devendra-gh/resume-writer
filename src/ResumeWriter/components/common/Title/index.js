import React from 'react';
import { Text } from '@react-pdf/renderer';
import styles from '../../../assets/styles';

const Title = ({ title, children }) => <Text style={styles[title]}>{children}</Text>;

export default Title;

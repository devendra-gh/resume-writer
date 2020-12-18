import React from 'react';
import { View } from '@react-pdf/renderer';
import Title from '../common/Title';
import Dots from '../common/Dots';
import styles from '../../assets/styles';

const Language = ({ data: { title, list } }) => (
    <View style={styles.section}>
        <View>
            <Title title="heading">{title}</Title>
        </View>
        <View style={styles.col}>
            {list.map(({ title, point }) => (
                <Dots key={title}
                    title={title}
                    point={point} />
            ))}
        </View>
    </View>
);

export default Language;

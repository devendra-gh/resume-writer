import React from 'react';
import { View, Text } from '@react-pdf/renderer';
import Title from '../common/Title';
import styles from '../../assets/styles';

const InterestList = ({ item }) => {
    return (
        <Text>{item}</Text>
    );
};

const Interest = ({ data: { title, list } }) => (
    <View style={styles.section}>
        <View>
            <Title title="heading">{title}</Title>
        </View>
        <View>
            <View style={styles.grey_border}>
                {list.map((item) => (
                    <InterestList
                        key={title}
                        item={item}
                    />
                ))}
            </View>
        </View>
    </View>
);

export default Interest;

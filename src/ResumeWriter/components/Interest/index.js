import React from 'react';
import { View, Text } from '@react-pdf/renderer';

import Title from '../common/Title';
import { common } from '../../assets/styles';

const InterestList = ({ item }) => {
    return (
        <View>
            <Text style={common.text}>{item}</Text>
        </View>
    );
};

const Interest = ({ data: { title, list } }) => (
    <>
        <View style={common.row}>
            <Title title="heading">{title}</Title>
        </View>
        <View style={common.row}>
            <View style={common.interestBorder}>
                {list.map((item) => (
                    <InterestList
                        key={title}
                        item={item}
                    />
                ))}
            </View>
        </View>
    </>
);

export default Interest;

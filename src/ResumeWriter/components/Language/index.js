import React from 'react';
import { View, Text } from '@react-pdf/renderer';

import Title from '../common/Title';
import { common, language as styles } from '../../assets/styles';

// const Circle = ({ counts }) => {
//     for (let count = 1; count <= counts; count++) {
//         return <Text style={common.circlePoint}>{count}</Text>;
//     }
// };

const LanguageList = ({ title, rate }) => {
    return (
        <View style={common.row}>
            <Text style={common.text}>
                {title}
                <View style={common.row}>
                    <Text style={common.circlePoint}>1</Text>
                    <Text style={common.circlePoint}>2</Text>
                    <Text style={common.circlePoint}>3</Text>
                    <Text style={common.circlePoint}>4</Text>
                </View>
            </Text>
        </View>
    );
};

const Language = ({ data: { title, list } }) => (
    <>
        <View style={common.row}>
            <Title title="heading">{title}</Title>
        </View>
        <View style={common.col}>
            {list.map(({ title, rate }) => (
                <LanguageList
                    key={title}
                    title={title}
                    rate={rate}
                />
            ))}
        </View>
    </>
);

export default Language;

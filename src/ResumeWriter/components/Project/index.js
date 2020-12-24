import React from 'react';
import { Text, View } from '@react-pdf/renderer';

import Title from '../common/Title';
import styles from '../../assets/styles';

const ProjectEntry = ({ project, details, technologies, responsibility, location, dateFrom, dateTo }) => {
    return (
        <>
            <View style={styles.section4}>
                <Title title="primary_heading">{project}</Title>
                <View style={{ ...styles.section2, ...styles.blue }}>
                    <Text>{`${location} - `}</Text>
                    <Text>{`(${dateFrom} - ${dateTo})`}</Text>
                </View>
            </View>

            <View style={styles.section2}>
                <Text>{details}</Text>
            </View>

            <View style={styles.pd_t_5}>
                <Title title="primary_title">Technologies:</Title>
                <Text>{technologies}</Text>
            </View>

            <View style={styles.pd_t_5}>
                <Title title="primary_title">Responsibility:</Title>
                <Text>{responsibility}</Text>
            </View>
        </>
    );
};

const Project = ({ data: { title, list } }) => (
    <View style={styles.section}>
        <View>
            <Title title="heading">{title}</Title>
        </View>

        <View style={styles.col}>
            {list.map((props, index) => (
                <View style={index > 0 && styles.pd_t_20}>
                    <ProjectEntry
                        key={`${props.project}`}
                        {...props}
                    />
                </View>
            ))}
        </View>
    </View>
);

export default Project;

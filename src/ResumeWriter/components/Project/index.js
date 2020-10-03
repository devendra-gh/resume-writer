import React from 'react';
import { Text, View } from '@react-pdf/renderer';

import Title from '../common/Title';
import List, { Item } from '../common/List';
import { project as styles } from '../../assets/styles';

const ProjectEntry = ({ project, details, technologies, responsibility, dateFrom, dateTo }) => {
    return (
        <View style={styles.lists}>
            <Title title="primary">{project}</Title>
            <Text>{`${dateFrom} - ${dateTo}`}</Text>
            <Text style={styles.details}>{details}</Text>
            <Text style={styles.list}>{`Technologies: ${technologies}`}</Text>
            <Text style={styles.list}>{`Responsibility: ${responsibility}`}</Text>
        </View>
    );
};

const Project = ({ data: { title, list } }) => (
    <View style={styles.container}>
        <Title title="heading">{title}</Title>
        {list.map(({ project, details, technologies, responsibility, dateFrom, dateTo }) => (
            <ProjectEntry
                key={project + dateFrom}
                project={project}
                details={details}
                technologies={technologies}
                responsibility={responsibility}
                dateFrom={dateFrom}
                dateTo={dateTo}
            />
        ))}
    </View>
);

export default Project;

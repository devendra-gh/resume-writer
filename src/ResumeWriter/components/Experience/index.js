import React from 'react';
import { Text, View } from '@react-pdf/renderer';

import Title from '../common/Title';
import List, { Item } from '../common/List';
import { experience as styles } from '../../assets/styles';

const ExperienceList = ({ position, company, location, dateFrom, dateTo, description, achievements }) => {
  return (
    <View style={styles.lists}>
      <Title title="primary">{position}</Title>
      <Title title="secondary">{company}</Title>
      <Text>{`${dateFrom} - ${dateTo}`}</Text>
      <Text style={styles.location}>{location}</Text>
      <Text style={styles.list}>{description}</Text>
      {achievements && achievements.map(item => <Text style={styles.list}>{item}</Text>)}
    </View>
  );
};

const Experience = ({ data: { title, list } }) => (
  <View style={styles.container}>
    <Title title="heading">{title}</Title>
    {list.map(({ position, company, location, dateFrom, dateTo, description, achievements }) => (
      <ExperienceList
        key={position}
        position={position}
        company={company}
        location={location}
        dateFrom={dateFrom}
        dateTo={dateTo}
        description={description}
        achievements={achievements}
      />
    ))}
  </View>
);

export default Experience;

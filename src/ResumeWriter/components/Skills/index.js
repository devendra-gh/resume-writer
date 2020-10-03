import React from 'react';
import { Text, View } from '@react-pdf/renderer';

import Title from '../common/Title';
import List, { Item } from '../common/List';
import { skills as styles } from '../../assets/styles';

const SkillsList = ({ title, rate }) => {
  return (
    <View style={styles.lists}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.rate}>{rate}</Text>
    </View>
  );
};

const Skills = ({ data: { title, list } }) => (
  <View style={styles.container}>
    <Title title="heading">{title}</Title>
    {list.map(({ title, rate }) => (
      <SkillsList
        key={title}
        title={title}
        rate={rate}
      />
    ))}
  </View>
);


export default Skills;

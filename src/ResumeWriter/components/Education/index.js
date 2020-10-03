import React from 'react';

import { Text, View } from '@react-pdf/renderer';
import Title from '../common/Title';

import { education as styles } from '../../assets/styles';


export default ({ data: { title, list } }) => (
  <>
    <View style={styles.container}>
      <Title title="heading">{title}</Title>
    </View>
    <View style={styles.container}>
      <View style={styles.list}>
        {list && list.map(item => {
          return (
            <>
              <Text style={styles.school}>{item.degree}</Text>
              <Text style={styles.school}>{item.college}</Text>
              <Text style={styles.degree}>{item.locaion}</Text>
              <Text style={styles.candidate}>{`${item.dateFrom} - ${item.dateTo}`}</Text>
            </>
          )
        })}
      </View>
    </View>
  </>
);

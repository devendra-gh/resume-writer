import React from 'react';
import { Text, View } from '@react-pdf/renderer';
import Title from '../common/Title';
import styles from '../../assets/styles';

export default ({ data: { title, list } }) => (
  <View style={styles.section}>
    <View>
      <Text style={{ ...styles.squareDot, ...styles.square }} />
    </View>
    <View>
      <View>
        <Title title="heading">{title}</Title>
      </View>
      <View style={styles.col}>
        {list && list.map(item => {
          return (
            <>
              <Title title="primary_heading">{item.degree}</Title>
              <Title title="secondary_heading">{item.college}</Title>
              <View style={{ ...styles.section2, ...styles.blue }}>
                <Text>{`${item.dateFrom} - ${item.dateTo}`}</Text>
                <Text>{item.locaion}</Text>
              </View>
            </>
          )
        })}
      </View>
    </View>
  </View>
);

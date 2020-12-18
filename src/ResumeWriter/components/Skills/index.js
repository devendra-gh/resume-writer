import React from 'react';
import { Text, View } from '@react-pdf/renderer';

import Title from '../common/Title';
import Dots from '../common/Dots';
import styles from '../../assets/styles';

const Skills = ({ data: { title, list } }) => (
  <View style={styles.section}>
    <View>
      <Text style={{ ...styles.squareDot, ...styles.square }} />
    </View>
    <View>
      <View>
        <Title title="heading">{title}</Title>
      </View>
      <View>
        {list.map(({ title, point }, index) => (
          <View style={styles.row}>
            <Dots key={title}
              title={title}
              point={point} />
          </View>
        ))}
      </View>
    </View>
  </View >
);


export default Skills;

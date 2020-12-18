import React from 'react';
import { Text, View } from '@react-pdf/renderer';
import Title from '../common/Title';
import styles from '../../assets/styles';

const ExperienceList = ({ position, company, location, dateFrom, dateTo, description, achievementTitle, achievements }) => {
  return (
    <View style={styles.row}>
      <View>
        <Text style={{ ...styles.squareDot, ...styles.square }} />
      </View>

      <View>
        <Title title="primary_heading">{position}</Title>
        <Title title="secondary_heading">{company}</Title>

        <View style={{ ...styles.section2, ...styles.blue }}>
          <Text>{`${dateFrom} - ${dateTo}`}</Text>
          <Text>{location}</Text>
        </View>

        <View style={{ ...styles.section2, ...styles.grey }}>
          <Text>{description}</Text>
        </View>

        <View style={styles.pd_tb}>
        <View style={{ ...styles.section2, ...styles.blue }}>
            <Text>{achievementTitle}</Text>
          </View>

          {achievements && achievements.map(item => {
            return (
              <View style={styles.section3}>
                <Text style={styles.list_dot} />
                <Text style={styles.list}>{item}</Text>
              </View>
            )
          })}
        </View>
      </View>
    </View>
  );
};

const Experience = ({ data: { title, list } }) => (
  <View style={styles.section}>
    <View>
      <Title title="heading">{title}</Title>
    </View>
    <View style={styles.col}>
      {list.map((props) => (
        <ExperienceList
          key={props.position}
          {...props}
        />
      ))}
    </View>
  </View>
);

export default Experience;

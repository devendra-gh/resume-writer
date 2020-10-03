import React from 'react';
import { Link, Text, View, Image } from '@react-pdf/renderer';

import { profile as styles, common } from '../../assets/styles';
import logo from '../../assets/images/logo.png';

export default ({ data: { name, position, about, email, location, phones, skype } }) => (
  <View style={styles.container}>
    <View style={styles.user}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.position}>{position}</Text>
      <Text style={styles.about}>{about}</Text>
    </View>
    <Image
      src={logo}
      style={common.image}
      style={{
        width: '100px'
      }}
    />
    <View style={styles.contacts}>
      <Link style={styles.text}>{email}</Link>
      <Text style={styles.text}>{location}</Text>
      {phones && phones.map(phone => <Text style={styles.text}>{phone}</Text>)}
      <Text style={styles.text}>{skype}</Text>
    </View>
  </View>
);

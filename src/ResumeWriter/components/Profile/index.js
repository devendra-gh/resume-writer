import React from 'react';
import { Link, Text, View, Image } from '@react-pdf/renderer';
import Title from '../common/Title';
import {
  userImg,
  emailIcon,
  mobileIcon,
  locationIcon,
  skypeIcon
} from '../../assets/images';
import styles from '../../assets/styles';

export default ({ data: { name, position, about, email, location, phones, skype } }) => {
  const getUserInfo = () => {
    return (
      <View style={styles.profile_user}>
        <View>
          <Text style={{ ...styles.squareDot, ...styles.square2 }} />
        </View>
        <View>
          <View>
            <Title title="title">{name}</Title>
          </View>
          <View style={styles.col}>
            <Text style={styles.secondary_title}>{position}</Text>
            <Text>{about}</Text>
          </View>
        </View>
      </View>
    )
  }

  const getUserImg = () => {
    return (
      <Image
        src={userImg}
        style={styles.profile_image}
      />
    )
  }

  const getUserContacts = () => {
    return (
      <View style={styles.profile_contacts}>

        <View style={styles.row}>
          <Link style={styles.pd_tb_5}>{email}</Link>
          <Image
            src={emailIcon}
            style={styles.contacts_image}
          />
        </View>

        <View style={styles.row}>
          <Text style={styles.pd_tb_5}>{location}</Text>
          <Image
            src={locationIcon}
            style={styles.contacts_image}
          />
        </View>

        <View style={styles.row}>
          {phones && phones.map((phone, index) => {
            return (
              <Text style={styles.pd_tb_5}>
                {`${index > 0 ? '/' : ''} ${phone}`}
              </Text>
            )
          })}
          <Image
            src={mobileIcon}
            style={styles.contacts_image}
          />
        </View>

        <View style={styles.row}>
          <Text style={styles.pd_tb_5}>{skype}</Text>
          <Image
            src={skypeIcon}
            style={styles.contacts_image}
          />
        </View>

      </View>
    )
  }

  return (
    <View style={styles.profile_container}>
      {getUserInfo()}
      {getUserImg()}
      {getUserContacts()}
    </View>
  )
}

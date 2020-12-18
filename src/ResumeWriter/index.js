import React from 'react';
import { Document, Page, View } from '@react-pdf/renderer';

import './assets/fonts';
import styles from './assets/styles';
import user from './assets/user';

import {
    Profile,
    Experience,
    Education,
    Skills,
    Project,
    Language,
    Interest
} from './components';

const Resume = (props) => {
    const { profile, experience, education, skills, project, language, interest } = user;

    return (
        <Page {...props} style={styles.page}>
            <Profile data={profile} />
            <View style={styles.container}>
                <View style={styles.col_50}>
                    <View style={styles.pd_l_35}>
                        <Experience data={experience} />
                        <Education data={education} />
                        <Skills data={skills} />
                    </View>
                </View>
                <View style={styles.col_50}>
                    <View style={styles.col}>
                        <Project data={project} />
                        <Language data={language} />
                        <Interest data={interest} />
                    </View>
                </View>
            </View>
        </Page >
    )
}

const ResumeWriter = () => (
    <Document
        author="Devendra Madheshiya"
        keywords="Resume writing"
        subject="Resume writing"
        title="Resume"
    >
        <Resume size={[892, 1263]} />
    </Document>
);

export default ResumeWriter;
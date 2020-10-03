import React from 'react';
import { Document, Page, View } from '@react-pdf/renderer';

import './assets/fonts';
import { common } from './assets/styles';
import user from './assets/user';

import Profile from './components/Profile';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';

import Project from './components/Project';
import Language from './components/Language';
import Interest from './components/Interest';

const Resume = (props) => {
    const { profile, experience, education, skills, project, language, interest } = user;

    return (
        <Page {...props} style={common.page}>
            <Profile data={profile} />
            <View style={common.container}>
                <View style={common.colWidth}>
                    <Experience data={experience} />
                    <Education data={education} />
                    <Skills data={skills} />
                </View>
                <View style={common.colWidth}>
                    <Project data={project} />
                    <Language data={language} />
                    <Interest data={interest} />
                </View>
            </View>
        </Page>
    )
}

const ResumeWriter = () => (
    <Document
        author="Luke Skywalker"
        keywords="awesome, resume, start wars"
        subject="The resume of Luke Skywalker"
        title="Resume"
    >
        <Resume size={[892, 1263]} />
    </Document>
);

export default ResumeWriter;
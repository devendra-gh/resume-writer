import React from 'react';
import { PDFViewer } from '@react-pdf/renderer';
import ResumeWriter from './ResumeWriter';

const App = () => (
  <PDFViewer width="100%" height="100%" style={{ border: 'none' }}>
    <ResumeWriter />
  </PDFViewer>
);

export default App;

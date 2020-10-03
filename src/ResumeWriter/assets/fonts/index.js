import { Font } from '@react-pdf/renderer';

import LatoRegular from './Lato/Lato-Regular.ttf';
// import LatoRegular from './Open_Sans/OpenSans-Regular.ttf';
import LatoItalic from './Lato/Lato-Italic.ttf';
import LatoBold from './Lato/Lato-Bold.ttf';
import LatoBlack from './Lato/Lato-Black.ttf'

// import LatoRegular from './fonts/Lato/Lato-Regular.ttf';
// import Lato from './fonts/Lato/Lato-Light.ttf';
// import LatoRegular from './fonts/Lato/Lato-BoldItalic.ttf';
// import LatoRegular from './fonts/Lato/Lato-BlackItalic.ttf'

// Font.register({
//     family: 'Lato',
//     format: "truetype",
//     src: LatoRegular,
// });

Font.register({
    family: 'Lato',
    fonts: [
        { src: LatoRegular, fontStyle: 'normal', fontWeight: 400 },
        { src: LatoItalic, fontStyle: 'italic', fontWeight: 400 },
        { src: LatoBold, fontStyle: 'normal', fontWeight: 700 },
        { src: LatoBlack, fontStyle: 'normal', fontWeight: 800 },
    ]
});
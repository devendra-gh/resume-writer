import { Font } from '@react-pdf/renderer';

import LatoRegular from "../fonts/Lato/Lato-Regular.ttf"
import LatoItalic from "../fonts/Lato/Lato-Italic.ttf"
import LatoBold from "../fonts/Lato/Lato-Bold.ttf"
import LatoBlack from "../fonts/Lato/Lato-Black.ttf"

Font.register({
    family: 'Lato', format: "truetype", fonts: [
        { src: LatoRegular, fontStyle: 'normal', fontWeight: 400 },
        { src: LatoItalic, fontStyle: 'italic', fontWeight: 400, },
        { src: LatoBold, fontStyle: 'normal', fontWeight: 700 },
        { src: LatoBlack, fontStyle: 'normal', fontWeight: 800 },
    ]
});
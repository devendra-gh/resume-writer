import { StyleSheet } from '@react-pdf/renderer';

const CONSTANT = {
    WHITE: '#FFFFFF',
    BLACK: '#000000',
    GREY: '#222222',
    FONT_FAMILY: 'Lato',
    REGULAR: 400,
    BOLD: 700,
    EXTRA_BOLD: 800,
}

export const common = StyleSheet.create({
    // CSS for Layout
    page: {
        backgroundColor: CONSTANT.WHITE,
    },
    container: {
        padding: 20,
        display: 'flex',
        flexDirection: 'row',
        flex: 1,
    },
    row: {
        flexDirection: 'row',
    },
    col: {
        flexDirection: 'column',
    },
    colWidth: {
        width: '50%',
    },


    // CSS for Title
    heading: {
        marginBottom: 10,
        flexDirection: 'row',
        fontFamily: CONSTANT.FONT_FAMILY,
        fontWeight: CONSTANT.EXTRA_BOLD,
        fontSize: 24,
        textTransform: 'uppercase',
    },
    primary: {
        marginBottom: 5,
        fontFamily: CONSTANT.FONT_FAMILY,
        fontWeight: CONSTANT.EXTRA_BOLD,
        fontSize: 20,
    },
    secondary: {
        fontFamily: 'Lato',
        fontWeight: 700,
        fontSize: 18,
    },

    // CSS for Text
    text: {
        paddingBottom: 10,
        fontFamily: 'Lato',
        fontWeight: 400,
        fontSize: 13,
        color: '#000000'
    },


    // CSS for Design
    interestBorder: {
        padding: '10 10 0 10',
        borderWidth: 2,
        borderColor: 'black',
        borderStyle: 'solid',
    },
    circlePoint: {
        margin: 5,
        width: '20px',
        height: '20px',
        backgroundColor: 'red',
        borderRadius: '50%',
        justifyContent: 'space-around'
    },





    title: {
        margin: 20,
        fontSize: 25,
        textAlign: 'center',
        backgroundColor: '#e4e4e4',
        textTransform: 'uppercase',
        fontFamily: 'Roboto',
    },
    body: {
        flexGrow: 1,
    },

    block: {
        flexGrow: 1,
    },

    textItalic: {
        width: '60%',
        margin: 10,
        fontFamily: 'Roboto',
        fontStyle: 'italic',
        textAlign: 'justify',
    },






});

export const profile = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderBottomWidth: 2,
        borderBottomColor: 'blue',
        borderBottomStyle: 'solid',
        alignItems: 'stretch',
    },
    user: {
        width: '60%',
        flexDirection: 'column',
    },
    photo: {
        width: '50px',
        flexDirection: 'column',
    },
    contacts: {
        flexDirection: 'column',
        alignItems: 'flex-end',
        justifySelf: 'flex-end',
    },
    name: {
        fontSize: 34,
    },
    position: {
        fontSize: 24,
    },
    about: {
        fontSize: 12,
    },
    text: {
        fontSize: 12,
    },
});

export const project = StyleSheet.create({
    container: {
        padding: 20,
    },
    title: {
        fontSize: 34,
    },
    lists: {
        marginBottom: 30,
    },
    project: {
        fontSize: 24,
    },
    details: {
        fontSize: 12,
    },
    list: {
        fontSize: 12,
    },
});

export const education = StyleSheet.create({
    container: {
        marginBottom: 10,
        padding: 20,
        flexDirection: 'row',
    },
    school: {
        fontSize: 10,
    },
    degree: {
        fontSize: 10,
    },
    candidate: {
        fontSize: 10,
    },
});

// export const experience = StyleSheet.create({
//     container: {
//         flex: 1,
//         paddingTop: 30,
//         paddingLeft: 15,
//     },
//     entryContainer: {
//         marginBottom: 10,
//     },
//     date: {
//         fontSize: 11,
//         // fontFamily: 'Lato Italic',
//     },
//     detailContainer: {
//         flexDirection: 'row',
//     },
//     detailLeftColumn: {
//         flexDirection: 'column',
//         marginLeft: 10,
//         marginRight: 10,
//     },
//     detailRightColumn: {
//         flexDirection: 'column',
//         flexGrow: 9,
//     },
//     bulletPoint: {
//         fontSize: 10,
//     },
//     details: {
//         fontSize: 10,
//         // fontFamily: 'Lato',
//     },
//     headerContainer: {
//         flexDirection: 'row',
//         marginBottom: 10,
//     },
//     leftColumn: {
//         flexDirection: 'column',
//         flexGrow: 9,
//     },
//     rightColumn: {
//         flexDirection: 'column',
//         flexGrow: 1,
//         alignItems: 'flex-end',
//         justifySelf: 'flex-end',
//     },
//     title: {
//         fontSize: 11,
//         color: 'black',
//         textDecoration: 'none',
//         // fontFamily: 'Lato Bold',
//     },
// });

export const experience = StyleSheet.create({
    container: {
        padding: 20,
    },
    title: {
        fontSize: 34,
    },
    lists: {
        marginBottom: 30,
    },
    project: {
        fontSize: 24,
    },
    details: {
        fontSize: 12,
    },
    list: {
        fontSize: 12,
    },
});

export const language = StyleSheet.create({
    container: {
        padding: 20,
    },
    title: {
        // flexDirection: 'row',
        // marginBottom: 5,
    },
    list: {
        // width: 10,
        fontSize: 10,
    },
    rate: {
        // flex: 1,
        fontSize: 10,
        // fontFamily: 'Lato',
    },
});

export const skills = StyleSheet.create({
    container: {
        padding: 20,
    },
    title: {
        // flexDirection: 'row',
        // marginBottom: 5,
    },
    list: {
        // width: 10,
        fontSize: 10,
    },
    rate: {
        // flex: 1,
        fontSize: 10,
        // fontFamily: 'Lato',
    },
});




export const list = StyleSheet.create({
    item: {
        flexDirection: 'row',
        marginBottom: 5,
    },
    bulletPoint: {
        width: 10,
        fontSize: 10,
    },
    itemContent: {
        flex: 1,
        fontSize: 10,
        // fontFamily: 'Lato',
    },
});

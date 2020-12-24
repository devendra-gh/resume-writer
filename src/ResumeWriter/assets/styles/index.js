import { StyleSheet } from '@react-pdf/renderer';

const CONSTANT = {
    FONT_FAMILY_LATO: 'Lato',
    FONT_STYLE_ITALIC: 'italic',
    REGULAR: 400,
    BOLD: 700,
    EXTRA_BOLD: 800,

    FONT_SIZE: 12,
    FONT_SIZE_SMALL: 16,
    FONT_SIZE_MEDIUM: 18,
    FONT_SIZE_LARGE: 20,
    FONT_SIZE_XLARGE: 28,

    WHITE: '#FFFFFF',
    BLACK: '#000000',
    GREY: '#7c7c7c',
    BROWN: '#374458',
    BLUE: '#4f90cd',
}

const FLEX = {
    flexRow: {
        display: 'flex',
        flexDirection: 'row',
    },
    flexCol: {
        display: 'flex',
        flexDirection: 'column',
    },
    justifyContentSB: {
        justifyContent: 'space-between',
    },
    alignItemsC: {
        alignItems: 'center',
    },
    alignItemsFE: {
        alignItems: 'flex-end',
    },
}

const gridStyle = {
    row: {
        ...FLEX.flexRow,
    },
    col: {
        ...FLEX.flexCol,
    },
    col_50: {
        width: '50%',
    },
};

const spaceStyle = {
    pd_l_35: {
        paddingLeft: '35',
    },
    pd_tb: {
        padding: '5 0 25',
    },
    pd_t_5: {
        paddingTop: '5',
    },
    pd_tb_5: {
        padding: '5 0',
    },
    pd_t_20: {
        paddingTop: '20',
    },
};

const commonStyle = {
    list_dot: {
        width: 7,
        height: 7,
        margin: '4 8 0 0',
        borderWidth: 2,
        borderStyle: 'solid',
        borderRadius: '100',
        borderColor: CONSTANT.BLUE,
        backgroundColor: CONSTANT.BLUE,
    },
    profile_container: {
        ...FLEX.flexRow,
        ...FLEX.alignItemsC,
        borderBottomWidth: 2,
        borderBottomColor: CONSTANT.BLUE,
        borderBottomStyle: 'solid',
        marginTop: -50,
    },
    profile_user: {
        ...FLEX.flexRow,
        width: '58%',
        paddingRight: 70,
    },
    profile_image: {
        margin: '10 0',
        width: 120,
        height: 120,
        borderWidth: 3,
        borderRadius: '100',
        borderStyle: 'solid',
        borderColor: CONSTANT.BLUE,
    },
    profile_contacts: {
        ...FLEX.flexCol,
        ...FLEX.alignItemsFE,
        paddingLeft: '10',
    },
    contacts_image: {
        width: 35,
        height: 25,
    },
}

const headingStyle = {
    heading: {
        marginBottom: 10,
        fontWeight: CONSTANT.EXTRA_BOLD,
        fontSize: CONSTANT.FONT_SIZE_LARGE,
        textTransform: 'uppercase',
    },
    primary_heading: {
        fontWeight: CONSTANT.EXTRA_BOLD,
        fontSize: CONSTANT.FONT_SIZE_MEDIUM,
    },
    secondary_heading: {
        fontWeight: CONSTANT.BOLD,
        fontSize: CONSTANT.FONT_SIZE_SMALL,
        paddingTop: '3',
    },
    title: {
        color: CONSTANT.BROWN,
        fontSize: CONSTANT.FONT_SIZE_XLARGE,
        marginLeft: -3,
    },
    primary_title: {
        fontWeight: CONSTANT.BOLD,
    },
    secondary_title: {
        fontWeight: CONSTANT.BOLD,
        color: CONSTANT.BLUE,
        fontSize: CONSTANT.FONT_SIZE_MEDIUM,
        marginBottom: 5,
    }
}

const borderStyle = {
    grey_border: {
        padding: 5,
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: CONSTANT.GREY,
    },
}

const dotsStyle = {
    dots: {
        ...FLEX.flexRow,
        ...FLEX.justifyContentSB,
    },
    dot: {
        width: 16,
        height: 16,
        borderWidth: 2,
        borderStyle: 'solid',
        borderRadius: '100',
        borderColor: CONSTANT.BLUE,
        backgroundColor: CONSTANT.BLUE,
    },
    dot_empty: {
        backgroundColor: CONSTANT.WHITE,
    },
    squareDot: {
        width: 35,
        height: 50,
        backgroundColor: CONSTANT.BLUE,
    },
    square: {
        position: 'absolute',
        left: 0,
        top: 5,
        marginLeft: -55,
    },
    square2: {
        margin: '8 20 0 0',
        backgroundColor: CONSTANT.BROWN,
    },
}

const colorStyle = {
    blue: {
        color: CONSTANT.BLUE,
    },
    grey: {
        color: CONSTANT.GREY,
    },
}

const layoutStyle = {
    page: {
        backgroundColor: CONSTANT.WHITE,
        fontFamily: CONSTANT.FONT_FAMILY_LATO,
        fontWeight: CONSTANT.REGULAR,
        fontSize: CONSTANT.FONT_SIZE,
        color: CONSTANT.BLACK,
        padding: '50 0 80',
    },
    container: {
        ...FLEX.flexRow
    },
    section: {
        padding: 20
    },
    section2: {
        ...FLEX.flexRow,
        ...FLEX.justifyContentSB,
        fontStyle: CONSTANT.FONT_STYLE_ITALIC,
        paddingTop: 5,
    },
    section3: {
        ...FLEX.flexRow,
        padding: '5 0',
    },
    section4: {
        ...FLEX.flexRow,
        ...FLEX.justifyContentSB,
        ...FLEX.alignItemsC,
    },
}

const styles = StyleSheet.create({
    ...gridStyle,
    ...spaceStyle,
    ...commonStyle,
    ...borderStyle,
    ...headingStyle,
    ...colorStyle,
    ...dotsStyle,
    ...layoutStyle,
});

export default styles;


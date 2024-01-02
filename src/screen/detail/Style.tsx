import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
    icon: {
        width: 24,
        height: 24,
    },
    toolbarContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    ml16: {
        marginLeft: 16,
    },
    mr16: {
        marginRight: 16,
    },
    mt16: {
        marginTop: 16,
    },
    mb16: {
        marginBottom: 16,
    },
    p16:{
        padding:16
    }
    ,
    btn: {
        padding: 8,
        borderRadius: 12,
        backgroundColor: '#ebebf2',
    },
    logoCompany: {
        width: 100,
        height: 100,
    },
    titleJob: {
        fontSize: 24,
        fontWeight: '600',
    },
    fontBold: {
        fontWeight: '500',
    }
    ,
    secondaryColor: {
        color: '#2a204a',
    },
    containerHeader: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerLocationCompany: {
        flexDirection: 'row'
    },
    icon12: {
        width: 20,
        height: 20,
    },
    containerContent: {
        flexDirection: 'row',
        justifyContent:'space-evenly'
    },
    btnSelected:{
        backgroundColor: '#2f2650',
    },
    textSelected:{
        color: 'white'
    },
    containerItemContent: {
        backgroundColor: 'white',
        borderRadius:16,
        padding:16
    }
});

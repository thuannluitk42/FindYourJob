import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
    containerToolBar :{
        padding: 16,
    },
    toolbar:{
        marginTop: 24,
        flexDirection: 'row',
        justifyContent : 'space-between',
    },
    icon:{
        width: 24,
        height: 24,
    },
    avatar:{
        width: 32,
        height: 32,
        borderRadius: 8,
    },
    title : {
        fontSize: 24,
        fontWeight: '500',
    },
    subTitle : {
        marginTop: 16,
        fontSize: 20,
    },
    // Search
    containerSearch:{
        flexDirection:'row',
    },
    ml8:{
        marginLeft: 8,
    },
    mr8:{
        marginRight: 8,
    },
    mt16:{
        marginTop: 16,
    },
    mt24:{
        marginTop: 24,
    },
    mt8:{
        marginTop: 8,
    },
    ml30:{
        marginLeft: 30,
    },
    inputSearch : {
        flexGrow:1,
        flexShrink: 1,
        borderRadius: 8,
        backgroundColor: '#f0eff6',
        padding: 8,
    },
    btn:{
        width: 42,
        height: 42,
        padding: 8,
        borderRadius: 12,
        backgroundColor: '#f07869',
    },
    //Filter
    containerFilter:{
        flexDirection:'row',
    },
    btnFilter:{
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 16,
        paddingLeft:8,
        paddingRight: 8,
        paddingBottom:4,
        paddingTop: 4,
        marginTop:8,
        marginLeft:8,
    },
    visible : {
        borderColor: '#ccc',
    },
    textVisible : {
        color: '#ccc',
    },
    // Popular Job
    containerPopular :{
        flexDirection:'row',
        justifyContent: 'space-between',
    },
    containerItemPopular :{
        width: 250
    },
    titlePopular : {
        fontSize: 20,
    },
    titleItemPopular : {
        fontSize: 16,
        color: '#ccc',
    },
    mainJobTitle:{
        fontSize: 24,
    },
    colorGray:{
        color: '#ccc',
    },
    bgLightGray:{
        backgroundColor: '#f0eff6',
    },
    // NearBy Job
    containerNearBy :{
        flexDirection:'row',
        justifyContent: 'space-between',
    },
    titleNearBy : {
        fontSize: 20,
    },
    containerItem :{
        flexDirection: 'row',
        alignItems: 'center',
    },
    titleItemNearBy : {
        fontSize: 16,
        fontWeight: '500',
    },
    fl1:{
        flex:1,
    },
    heightNearByJob: {
        height: 300,
    },

});

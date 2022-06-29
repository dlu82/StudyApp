import {StyleSheet, Dimensions} from 'react-native' 

const window = Dimensions.get("window").width;

const style = StyleSheet.create({
    intrestPart: item =>({
        width: window/2.23,
        height: 45,
        borderWidth: 2,
        borderColor: item.borderColr,
        backgroundColor: item.backgrndColor,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 15,
        marginTop: 10,
        borderRadius: 3

    }),
    interstText: item =>({
        color: item.textColor,
        fontSize: 15,

    }),
})
export default style
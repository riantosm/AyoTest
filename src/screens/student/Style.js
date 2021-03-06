const React = require('react-native');

const {StyleSheet} = React;

export default {
  containerView: {
    flex: 1,
    backgroundColor: '#CBDBEC',
  },

  MainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Platform.OS === 'ios' ? 20 : 0,
  },

  bottomView: {
    width: '100%',
    height: 40,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  bottomViewSm: {
    width: '100%',
    height: 'auto',
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  btnCircle: {
    position: 'absolute',
    backgroundColor: 'green',
    height: 60,
    width: 60,
    borderRadius: 100,
    alignSelf: 'center',
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  circleIcon: {
    flexGrow: 1,
    height: null,
    width: null,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icoMenu:{
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1,
  },
  textStyle: {
    textAlign: 'center',
    color: 'green',
  },
  bgGreen: {
    backgroundColor: '#0FB63F',
  },
  bgPurle: {
    backgroundColor: '#985bff',
  },
  bgBlack: {
    backgroundColor: '#060709',
  },
  bgWhite: {
    backgroundColor: '#fff',
  },
  bgGrey: {
    backgroundColor: '#CBDBEC',
  },
  textGreen: {
    color: '#0FB63F',
  },
  textWhite: {
    color: '#fff',
  },
  textPurle: {
    color: '#985bff',
  },
  textBlack: {
    color: '#060709',
  },
  submit: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  wrapp: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  boxWrapp: {
    margin: 20,
    marginBottom: 20,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  boxWrappSearch: {
    margin: 20,
    marginTop: 20,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  listMinMargin:{
    marginVertical:5
  },
  boxWrappSm: {
    borderRadius: 5,
    width: '20%',
    alignItems: 'center',
    padding: 5,
  },
  boxWrappSmQu: {
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 5,
    width:'100%',
    alignItems: 'center',
  },
  box: {
    marginBottom: 20,
    padding: 20,
    height: 200,
    borderRadius: 5,
    alignItems: 'center',
  },
  boxSm: {
    padding: 10,
    borderRadius: 5,
  },
  inputText: {
    borderWidth: 1,
    borderColor: 'transparent',
    borderBottomColor: 'gray',
    width: '100%',
    paddingHorizontal: 20,
  },
  shadow: {
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 100,
    alignSelf: 'center',
  },
  inputText: {
    borderRadius: 5,
    backgroundColor: 'rgba(255,255,255,1)',
    width: '100%',
    marginVertical: 10,
    paddingHorizontal: 20,
    fontSize: 16,
  },
};

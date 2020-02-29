import React, {useState} from 'react';
import {
  View,
  Text,
  Button,
  KeyboardAvoidingView,
  ScrollView,
  TouchableOpacity,
  Modal,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {StackActions} from '@react-navigation/native';
import {assessment} from '../../redux/actions/assessment';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome5';

import font from '../Fonts';
import styles from './Style';
import {TextInput} from 'react-native-gesture-handler';

const StudentTestScreen = props => {
  const [modalDelete, modal] = useState(false);
  const [code, inputCode] = useState('');
  return (
    <KeyboardAvoidingView style={styles.containerView}>
      <View style={[styles.MainContainer]}>
        <ScrollView style={{width: '100%', paddingBottom:200}}>
          <View>
            <Text
              style={[
                font.Aquawax,
                {
                  fontSize: 45,
                  padding: 20,
                  paddingBottom: 10,
                  textAlign: 'center',
                },
              ]}>
              ayo<Text style={styles.textGreen}>Test</Text>.
            </Text>
            <View
              style={{
                width: 50,
                marginHorizontal: 20,
                borderColor: '#0FB63F',
                borderWidth: 1,
                alignSelf: 'center',
              }}></View>
            <View style={{margin: 10}}>
              <Text style={{textAlign: 'center'}}>Bahasa indonesia</Text>
            </View>
          </View>
          <View style={{alignItems: 'center'}}>
            <View
              style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                margin: 20,
                width: '90%',
                paddingBottom:150
              }}>
              {/* loop */}
              <TouchableOpacity style={[styles.boxWrappSm]}>
                <View style={styles.boxWrappSmQu}>
                  <Text>1</Text>
                </View>
              </TouchableOpacity>
              {/* loop */}

              {/* udah diisi */}
              <TouchableOpacity style={[styles.boxWrappSm]}>
                <View style={[styles.boxWrappSmQu, styles.bgGreen]}>
                  <Text style={styles.textWhite}>2</Text>
                </View>
              </TouchableOpacity>
              {/* udah diisi */}

              {/* ragu */}
              <TouchableOpacity style={[styles.boxWrappSm]}>
                <View style={[styles.boxWrappSmQu, styles.bgPurle]}>
                  <Text style={styles.textWhite}>3</Text>
                </View>
              </TouchableOpacity>
              {/* ragu */}

              <View style={[styles.boxWrappSm]}>
                <View style={styles.boxWrappSmQu}>
                  <Text>1</Text>
                </View>
              </View>
              <View style={[styles.boxWrappSm]}>
                <View style={styles.boxWrappSmQu}>
                  <Text>99</Text>
                </View>
              </View>
              <View style={[styles.boxWrappSm]}>
                <View style={styles.boxWrappSmQu}>
                  <Text>1</Text>
                </View>
              </View>
              <View style={[styles.boxWrappSm]}>
                <View style={styles.boxWrappSmQu}>
                  <Text>1</Text>
                </View>
              </View>
              <View style={[styles.boxWrappSm]}>
                <View style={styles.boxWrappSmQu}>
                  <Text>11</Text>
                </View>
              </View>
              <View style={[styles.boxWrappSm]}>
                <View style={styles.boxWrappSmQu}>
                  <Text>16</Text>
                </View>
              </View>
            </View>
          </View>

          {/*  */}
        </ScrollView>
        <View style={styles.bottomViewSm}>
          <View
            style={{
              flexWrap: 'wrap',
              flexDirection: 'row',
              padding: 25,
            }}>
            <View
              style={{
                width: '100%',
                padding: 0,
                margin: 0,
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                }}>
                <View
                  style={[
                    styles.bgWhite,
                    styles.shadow,
                    {padding: 10, borderRadius: 4},
                  ]}></View>
                <Text> Belum diisi </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                }}>
                <View
                  style={[
                    styles.bgGreen,
                    styles.shadow,
                    {padding: 10, borderRadius: 4},
                  ]}></View>
                <Text> Sudah diisi </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                }}>
                <View
                  style={[
                    styles.bgPurle,
                    styles.shadow,
                    {padding: 10, borderRadius: 4},
                  ]}></View>
                <Text> Masih ragu </Text>
              </View>
            </View>
            <View style={{width: '100%',padding: 0}}>
              <TouchableOpacity style={{marginTop: 0}}>
                <View
                  style={[
                    styles.boxSm,
                    styles.bgGreen,
                    styles.shadow,
                    {
                      width: '100%',
                      marginTop: 20,
                    },
                  ]}>
                  <Text
                    style={[
                      font.Aquawax,
                      {
                        color: '#fff',
                        textAlign: 'center',
                        textAlignVertical: 'center',
                        fontSize: 14,
                      },
                    ]}>
                    Selesai !
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>

      <Modal
        animationType="slide"
        transparent={false}
        visible={modalDelete}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View style={styles.wrapp}>
          <ScrollView style={{height: '85%'}}>
            <View>
              <View>
                <Text style={{textAlign: 'center', fontSize: 18}}>
                  <Text style={{}}>Kode : </Text>
                  <Text style={[styles.textGreen, {fontWeight: 'bold'}]}>
                    1425-MATDAS
                  </Text>
                  <Text style={{}}>{'\n'}Jumlah soal : </Text>
                  <Text style={[styles.textGreen, {fontWeight: 'bold'}]}>
                    40
                  </Text>
                  <Text style={{}}>{'\n'}Waktu : </Text>
                  <Text style={[styles.textGreen, {fontWeight: 'bold'}]}>
                    10 menit
                  </Text>
                </Text>
                <Text
                  style={[
                    font.Aquawax,
                    {textAlign: 'center', paddingVertical: 200, fontSize: 30},
                  ]}>
                  Apakah anda siap untuk mengikuti ujian ini?
                </Text>
              </View>
            </View>
          </ScrollView>
          <TouchableOpacity
            onPress={() => {
              modal(false);
              props.navigation.navigate('student-test-nya');
              // AsyncStorage.setItem('code', code);
              // props.dispatch(assessment());
              // props.navigation.dispatch(
              //   StackActions.replace('student-test-nya', {code: code}),
              // );
            }}>
            <View style={[styles.boxSm, styles.bgGreen, styles.shadow]}>
              <Text
                style={[
                  font.Aquawax,
                  {
                    color: '#fff',
                    textAlign: 'center',
                    textAlignVertical: 'center',
                    fontSize: 14,
                  },
                ]}>
                Siap !
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => modal(false)}>
            <View
              style={[
                styles.boxSm,
                styles.bgPurle,
                styles.shadow,
                {marginTop: 20},
              ]}>
              <Text
                style={[
                  font.Aquawax,
                  {
                    color: '#fff',
                    textAlign: 'center',
                    textAlignVertical: 'center',
                    fontSize: 14,
                  },
                ]}>
                Kembali
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </Modal>
    </KeyboardAvoidingView>
  );
};

const mapStateToProps = state => {
  return {
    assessment: state.assessment,
  };
};
export default connect(mapStateToProps)(StudentTestScreen);

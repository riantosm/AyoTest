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
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from 'react-native-simple-radio-button';
import AsyncStorage from '@react-native-community/async-storage';
import {StackActions} from '@react-navigation/native';
import {assessment} from '../../redux/actions/assessment';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome5';

import font from '../Fonts';
import styles from './Style';
import {TextInput} from 'react-native-gesture-handler';

const radio_props = [
  {label: 'Itu adalah', value: 0},
  {label: 'Adalah itu', value: 1},
  {label: 'Semua benar', value: 2},
  {label: 'Semua salah', value: 3},
  {label: 'Gatau', value: 4},
];
const StudentTestScreen = props => {
  const [modalQuestion, modal] = useState(false);
  const [answer, setAnswer] = useState(null);
  return (
    <KeyboardAvoidingView style={styles.containerView}>
      <View style={[styles.MainContainer]}>
        <ScrollView style={{width: '100%', paddingBottom: 200}}>
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
                paddingBottom: 150,
              }}>
              {/* belum diisi */}
              <TouchableOpacity
                style={[styles.boxWrappSm]}
                onPress={() => modal(true)}>
                <View style={styles.boxWrappSmQu}>
                  <Text>1</Text>
                </View>
              </TouchableOpacity>
              {/* belum diisi */}

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
                  <Text>4</Text>
                </View>
              </View>
              <View style={[styles.boxWrappSm]}>
                <View style={styles.boxWrappSmQu}>
                  <Text>5</Text>
                </View>
              </View>
              <View style={[styles.boxWrappSm]}>
                <View style={styles.boxWrappSmQu}>
                  <Text>6</Text>
                </View>
              </View>
              <View style={[styles.boxWrappSm]}>
                <View style={styles.boxWrappSmQu}>
                  <Text>7</Text>
                </View>
              </View>
              <View style={[styles.boxWrappSm]}>
                <View style={styles.boxWrappSmQu}>
                  <Text>8</Text>
                </View>
              </View>
              <View style={[styles.boxWrappSm]}>
                <View style={styles.boxWrappSmQu}>
                  <Text>9</Text>
                </View>
              </View>
              <View style={[styles.boxWrappSm]}>
                <View style={styles.boxWrappSmQu}>
                  <Text>10</Text>
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
            <View style={{width: '100%', padding: 0}}>
              <TouchableOpacity style={{marginTop: 0}} onPress={() => props.navigation.navigate('student-finish')}>
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
        visible={modalQuestion}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View style={[styles.MainContainer]}>
          <ScrollView style={{width: '100%', marginBottom: 100}}>
            <Text
              style={[
                font.Aquawax,
                {
                  fontSize: 45,
                  padding: 20,
                  paddingBottom: 0,
                  textAlign: 'center',
                },
              ]}>
              soalNo
              <Text style={styles.textGreen}>
                <Text style={font.Questriasl}>1</Text>
              </Text>
              .
            </Text>
            <View
              style={{
                width: 50,
                marginVertical: 10,
                marginBottom: 20,
                borderColor: '#0FB63F',
                borderWidth: 1,
                alignSelf: 'center',
              }}></View>
            <View style={{padding: 20}}>
              <Text style={{fontSize: 20}}>Apa yang dimaksud dengan itu?</Text>
            </View>
            <View style={{paddingHorizontal: 20}}>
              <RadioForm
                radio_props={radio_props}
                initial={0}
                onPress={value => setAnswer(value)} 
                buttonColor={'#0FB63F'}
                borderColor={'#0FB63F'}
                innerColor={'#0FB63F'}
              />
            </View>
          </ScrollView>
          <View style={styles.bottomViewSm}>
            <View
              style={{
                width: '100%',
                padding: 25,
                margin: 0,
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
              }}>
              <TouchableOpacity onPress={() => modal(false)}>
                <View
                  style={[
                    styles.boxSm,
                    styles.bgPurle,
                    styles.shadow,
                    {width: 100},
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
                    <Icon
                      name="angle-left"
                      size={25}
                      style={styles.textWhite}
                    />
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => modal(false)}>
                <View
                  style={[
                    styles.boxSm,
                    styles.bgGreen,
                    styles.shadow,
                    {width: 70, marginHorizontal: 10},
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
                    <Icon
                      name="grip-horizontal"
                      size={25}
                      style={styles.textWhite}
                    />
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => modal(false)}>
                <View
                  style={[
                    styles.boxSm,
                    styles.bgPurle,
                    styles.shadow,
                    {width: 100},
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
                    <Icon
                      name="angle-right"
                      size={25}
                      style={styles.textWhite}
                    />
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
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

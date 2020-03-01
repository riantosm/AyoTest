import React, {useState} from 'react';
import {
  View,
  Text,
  Button,
  KeyboardAvoidingView,
  ScrollView,
  TouchableOpacity,
  Modal,
  Image,
} from 'react-native';

import font from '../Fonts';
import styles from './Style';
import {TextInput} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from 'react-native-simple-radio-button';

const radio_props = [
  {label: 'Laki - laki', value: 0},
  {label: 'Perempuan', value: 1},
];
const studentHome = props => {
  const [modalDelete, modal] = useState(false);
  const [answer, setAnswer] = useState(null);
  return (
    <KeyboardAvoidingView style={styles.containerView}>
      <View style={[styles.MainContainer]}>
        <ScrollView style={{width: '100%'}}>
          <View>
            <Text
              style={[
                font.Aquawax,
                {fontSize: 40, padding: 20, paddingBottom: 10},
              ]}>
              Profile <Text style={styles.textGreen}>Rian</Text>.
            </Text>
            <View
              style={{
                width: 50,
                marginHorizontal: 20,
                borderColor: '#0FB63F',
                borderWidth: 1,
              }}></View>
          </View>
          <View style={[styles.boxWrapp, styles.shadow]}>
            {/* <Text style={{fontWeight:'700'}}>Data</Text> */}
            <Image
              style={styles.profileImage}
              source={require('../../../assets/img/profile.jpg')}
            />
            <Text style={{textAlign: 'center', marginTop: 20}}>Rian Tosm</Text>
            <Text style={{textAlign: 'center'}}>rian.tosm@gmail.com</Text>
            <TouchableOpacity onPress={() => modal(true)}>
              <View
                style={[
                  styles.submit,
                  styles.bgGreen,
                  styles.shadow,
                  {marginTop: 20, width: '100%', alignSelf: 'center'},
                ]}>
                <Text style={{color: '#fff', textAlign: 'center'}}>
                  Edit Profile
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{padding: 20}}>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('login-student')}>
              <View
                style={[
                  styles.submit,
                  styles.bgPurle,
                  styles.shadow,
                  {marginTop: 0, width: '100%', alignSelf: 'center'},
                ]}>
                <Text style={{color: '#fff', textAlign: 'center'}}>Logout</Text>
              </View>
            </TouchableOpacity>
          </View>
          {/* <TouchableOpacity>
            <View
              style={[
                styles.submit,
                styles.bgWhite,
                {
                  marginVertical: 100,
                  width: 200,
                  height: 200,
                  alignSelf: 'center',
                  borderRadius: 20,
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center'
                },
              ]}>
              <Text
                style={[
                  {
                    color: 'red',
                    lineHeight: 90,
                    textAlign: 'center',
                    fontSize: 90,
                  },
                  font.Aquawax,
                ]}>
                <Text style={styles.textGreen}>ayo</Text>{' '}
                <Text style={styles.textPurle}>Test</Text>
              </Text>
            </View>
          </TouchableOpacity> */}
        </ScrollView>

        <View style={styles.bottomView}>
          <TouchableOpacity
            style={{
              width: '40%',
              height: '100%',
            }}
            onPress={() => props.navigation.navigate('student-home')}>
            <View>
              <Text style={styles.textStyle}>
                <Icon name="award" size={25} style={styles.textGreen} />
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.btnCircle, styles.bgGreen, styles.shadow]}>
            <View style={styles.circleIcon}>
              <Text style={{color: '#fff'}}>
                <Icon name="plus" size={30} style={styles.textWhite} />
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: '20%',
              height: '100%',
            }}
            onPress={() => props.navigation.navigate('student-test')}>
            {/* hanya sepasi */}
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: '40%',
              height: '100%',
            }}
            onPress={() => props.navigation.navigate('student-detail')}>
            <View>
              <Text style={styles.textStyle}>
                <Icon name="child" size={25} style={styles.textGreen} />
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalDelete}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View style={[styles.wrapp, styles.containerView]}>
          <ScrollView style={{height: '85%'}}>
            <TouchableOpacity style={{margin:20}}>
              <Image
                style={styles.profileImage}
                source={require('../../../assets/img/profile.jpg')}
              />
            </TouchableOpacity>
            <Text style={{fontSize: 18}}>Nama Lengkap</Text>
            <TextInput
              style={[styles.inputText]}
              placeholder="Masukan nama lengkap"
            />
            <Text style={{fontSize: 18}}>Email</Text>
            <TextInput style={[styles.inputText]} placeholder="Masukan email" />
            <Text style={{fontSize: 18}}>Alamat</Text>
            <TextInput
              style={[styles.inputText]}
              placeholder="Masukan alamat"
            />
            <Text style={{fontSize: 18, paddingBottom:20}}>Jenis Kelamin</Text>
              <RadioForm
                radio_props={radio_props}
                initial={0}
                onPress={value => setAnswer(value)} 
                buttonColor={'#0FB63F'}
                borderColor={'#0FB63F'}
                innerColor={'#0FB63F'}
              />
          </ScrollView>
          <TouchableOpacity
            onPress={() => {
              modal(false);
            }}>
            <View style={[styles.boxSm, styles.bgGreen, styles.shadow, {marginTop:20}]}>
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
                Simpan
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

export default studentHome;

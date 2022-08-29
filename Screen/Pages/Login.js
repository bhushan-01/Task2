import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import Signup from './Signup';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Login = ({navigation}) => {
  const [username, setusername] = useState('');
  const [Nameerror, setNameerror] = useState(null);

  const [Password, setPassword] = useState('');
  const [PassError, setPassError] = useState(null);
//username
  function validateusername(username) {
    const reg =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%_*?&])[A-Za-z\d@_^$!%*?&]{2,15}$/;
    if (username.length < 3 || !reg.test(username)) {
      setNameerror('* Name is not valid\n* Must contain Special character \n* Must contain Numeric character');
      return false;
    } else {
      setNameerror(null);
      return true;
    }
  }
//password

  function validatepassword(password) {
    const reg1 =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{2,15}$/;
    if(password.length <3 || !reg1.test(password))
    {
      setPassError('* Password is invalid\n* First character must be uppercase \n* Must contain Special Characters\n* Must contain Numeric characters')
      return false;
    } else {
      setPassError(null)
      return true;
    }
  }
  function validateall() {
    if (validateusername(username) && validatepassword(Password)) {
      console.log('Navigate')
      navigation.navigate('Signup')
      
    } else {
      validatepassword(Password);
  }
}

  return (
    <View>
      <ScrollView>
        <View style={styles.v1}>
          <Text style={styles.t1}>Login</Text>
        </View>
        <View style={styles.v2}>
          <Text style={styles.t2}>Don't have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate(Signup)}>
            <Text style={styles.t3}>SignUp</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.v3}>
          <FontAwesome name="user-secret" size={30} style={styles.icon1} />
          <TextInput
            value={username}
            onChangeText={text => {
              validateusername(text.trim());
              setusername(text.trim());
            }}
            maxLength={25}
            placeholder={'Username'}
            placeholderTextColor={'gray'}
            style={styles.ti1}
          />
        </View>
        {setNameerror && <Text style={{color: 'red',paddingLeft:10}}>{Nameerror}</Text>}

        <View style={styles.v5}>
          <FontAwesome5 name="key" size={25} style={styles.icon1} />
          <TextInput
            maxLength={18}
            value={Password.trim()}
            onChangeText={pass => {
              validatepassword(pass);
              setPassword(pass);
}}
            placeholder={'Password'}
            placeholderTextColor={'gray'}
            style={styles.ti2}
            secureTextEntry={true}
          />
        </View>
        <Text style={{color:'red',paddingLeft:10}}>{PassError }</Text>

        <TouchableOpacity style={styles.button} onPress={() => {
          validateall()
        }}>
          <Text style={styles.t4} >Login</Text>
        </TouchableOpacity>
        <View style={styles.line}>
          <View style={styles.l1}></View>
          <Text style={styles.t5}> OR </Text>
          <View style={styles.l2}></View>
        </View>
        {/*style=
        {{
          backgroundColor: 'white',
          elevation: 20,
          shadowColor: 'rgba(0,0,0,0.5)',
          borderRadius: 5,
        }}*/}
        <View style={styles.ani}>
          <View
            style={{
              padding: 10,
              elevation: 10,
              borderRadius: 5,
              backgroundColor: 'white',
            }}>
            <Image
              source={require('../Images/google-1762248__340.webp')}
              style={styles.imgstyle}
            />
          </View>
          <View
            style={{
              padding: 15,
              elevation: 10,
              borderRadius: 5,
              backgroundColor: 'white',
            }}>
            <Image
              source={require('../Images/facebook-770688__340.webp')}
              style={styles.img2}
            />
          </View>

          <View
            style={{
              padding: 10,
              borderRadius: 5,
              elevation: 10,
              backgroundColor: 'white',
            }}>
            <Image
              source={require('../Images/logo-3491390__340.webp')}
              style={styles.img3}
            />
          </View>
          <View
            style={{
              padding: 10,
              borderRadius: 5,
              elevation: 10,
              backgroundColor: 'white',
            }}>
            <AntDesign name="apple1" size={50} style={styles.iconn} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  v1: {
    marginTop: 50,
    alignSelf: 'center',
  },
  t1: {
    color: 'black',
    fontSize: 50,
    fontWeight: 'bold',
  },
  v2: {
    marginTop: 10,
    alignSelf: 'center',
    flexDirection: 'row',
  },
  t2: {
    fontSize: 18,
    color: 'black',
  },
  t3: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  v3: {
    flexDirection: 'row',
    marginTop: 40,
    borderWidth: 1,
    borderRadius: 5,
    margin: 10,

    color: 'black',
  },
  icon1: {
    paddingLeft: 10,
    color: 'black',
    marginTop: 10,
  },
  ti1: {
    paddingLeft: 17,
    fontSize: 20,
  },

  v5: {
    flexDirection: 'row',
    marginTop: 15,
    borderWidth: 1,
    borderRadius: 5,
    margin: 10,

    color: 'black',
  },
  ti2: {
    paddingLeft: 18,
    fontSize: 20,
  },
  button: {
    backgroundColor: '#007AFF',
    margin: 10,
    marginTop: 20,
    padding: 10,
    borderRadius: 8,
  },
  t4: {
    textAlign: 'center',
    color: 'white',
    fontSize: 18,
  },

  l1: {
    borderBottomWidth: 2,
    marginLeft: 10,
    width: '42%',
    marginBottom: 10,
  },
  l2: {
    borderBottomWidth: 2,
    marginBottom: 10,
    width: '42%',
    marginRight: 10,
  },
  line: {
    flexDirection: 'row',

    alignSelf: 'center',
  },
  t5: {
    marginTop: 10,
    fontSize: 20,
  },
  icon2: {
    color: 'orange',
  },
  imgstyle: {
    height: 50,
    width: 50,
  },
  img2: {
    height: 43,
    width: 43,
    borderRadius: 40,
  },
  img3: {
    height: 50,
    width: 50,
  },
  ani: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 20,
  },
  iconn: {
    color: 'black',
  },
});
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
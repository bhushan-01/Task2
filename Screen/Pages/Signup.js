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
import Login from './Login';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Signup = ({navigation}) => {
  //username
  const [username, setusername] = useState('');
  const [Nameerror, setNameerror] = useState(null);
  function validateusername(username) {
    const re =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%_*?&])[A-Za-z\d@_^$!%*?&]{2,15}$/;
    if (username.length < 3 || !re.test(username)) {
      setNameerror(
        '* Name is not valid\n* Must contain Special character \n* Must contain Numeric character',
      );
    } else {
      setNameerror(null);
    }
  }

  //Email
  const [email, setemail] = useState('');
  const [emailerror, setemailerror] = useState(null);
  function validateemail(email) {
    const re =
      /^\w+([\.-]?\w+)*@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.){1,2}[a-zA-Z]{2,3}))$/;
    if (email.length < 3 || !re.test(email)) {
      setemailerror('* Email is not valid \n* Email must contain @,. \n* For ex:-"John@example.com " ');
    } else {
      setemailerror(null);
    }
  }
  //Password
  const [password, setpassword] = useState('');
  const [passerror, setpasserror] = useState(null);
  function validatepassword(password) {
    const re =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{2,15}$/;
    if (password.length < 8 || !re.test(password)) {
      setpasserror(
        '* Password is invalid\n* First character must be uppercase \n* Must contain Special Characters\n* Must contain Numeric characters',
      );
    } else {
      setpasserror(null);
    }
  }
  //confirm password

  const [cnpassword, setcnpassword] = useState('');
  const [cnpasserror, setcnpasserror] = useState(null);
  function validatecnpassword(cnpass) {
   
    if (password!=cnpass) {
      setcnpasserror(
       ' * Password did not match \n * Re-type Your Password'
      );
    } else {
      setcnpasserror(null);
    }
  }
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.v1}>
          <Text style={styles.t1}>Signup</Text>
        </View>

        <View style={styles.v2}>
          <Text style={styles.t2}>Already have account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate(Login)}>
            <Text style={styles.t3}> Login</Text>
          </TouchableOpacity>
        </View>
        {/* Username */}
        <View style={styles.v3}>
          <FontAwesome name="user-secret" size={30} style={styles.icon1} />
          <TextInput
            value={username.trim()}
            onChangeText={text => {
              validateusername(text);
              setusername(text);
            }}
            maxLength={25}
            placeholder={'Username'}
            placeholderTextColor={'gray'}
            style={styles.ti1}
          />
        </View>
        {setNameerror && (
          <Text style={{color: 'red', paddingLeft: 10}}>{Nameerror}</Text>
        )}
        {/* Email */}
        <View style={styles.v4}>
          <MaterialCommunityIcons name="email" size={30} style={styles.icon1} />
          <TextInput
            value={email.trim()}
            onChangeText={email => {
              validateemail(email);
              setemail(email);
            }}
            maxLength={30}
            placeholder={'Email'}
            placeholderTextColor={'gray'}
            style={styles.ti4}
          />
        </View>
        {setemailerror && (
          <Text style={{color: 'red', paddingLeft: 10}}>{emailerror}</Text>
        )}
        {/* Password */}
        <View style={styles.v5}>
          <FontAwesome5 name="key" size={25} style={styles.icon1} />
          <TextInput
            value={password.trim()}
            onChangeText={pass => {
              validatepassword(pass);
              setpassword(pass);
            }}
            maxLength={16}
            placeholder={'Password'}
            placeholderTextColor={'gray'}
            style={styles.ti2}
            secureTextEntry={true}
          />
        </View>
        {setpasserror && (
          <Text style={{color: 'red', paddingLeft: 10}}>{passerror}</Text>
        )}
        {/* confirm password*/}
        <View style={styles.v6}>
          <FontAwesome5 name="key" size={25} style={styles.icon1} />
          <TextInput
            value={cnpassword.trim()}
            onChangeText={cnp => {
              validatecnpassword(cnp);
              setcnpassword(cnp);
            }}
            maxLength={16}
            placeholder={'Confirm Password'}
            placeholderTextColor={'gray'}
            style={styles.ti3}
            secureTextEntry={true}
          />
        </View>
        {setcnpasserror && (
          <Text style={{color: 'red', paddingLeft: 10}}>{cnpasserror}</Text>
        )}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.t4}>REGISTER NOW</Text>
        </TouchableOpacity>

        <View style={styles.line}>
          <View style={styles.l1}></View>
          <Text style={styles.t5}> OR </Text>
          <View style={styles.l2}></View>
        </View>

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

export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  v1: {
    marginTop: 20,
    alignSelf: 'center',
  },
  t1: {
    color: 'black',
    fontSize: 45,
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
    borderWidth: 0.5,
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
  ti2: {
    paddingLeft: 18,
    fontSize: 20,
  },
  ti3: {
    paddingLeft: 18,
    fontSize: 20,
  },
  ti4: {
    paddingLeft: 13,
    fontSize: 20,
  },
  v4: {
    flexDirection: 'row',
    marginTop: 15,
    borderWidth: 0.5,
    borderRadius: 5,
    margin: 10,

    color: 'black',
  },

  v5: {
    flexDirection: 'row',
    marginTop: 15,
    borderWidth: 0.5,
    borderRadius: 5,
    margin: 10,

    color: 'black',
  },
  v6: {
    flexDirection: 'row',
    marginTop: 15,
    borderWidth: 0.5,
    borderRadius: 5,
    margin: 10,

    color: 'black',
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
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
import React, {useContext} from 'react';
import {StyleSheet, SafeAreaView, Text, Button} from 'react-native';
import {MainContext} from '../contexts/MainContext';
import PropTypes from 'prop-types';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Profile = ({navigation}) => {
  const {isLoggedIn, setIsLoggedIn, user} = useContext(MainContext);
  console.log('profile isLoggedIn?', isLoggedIn);
  console.log('profile user data', user);
  const logout = async () => {
    setIsLoggedIn(false);
    await AsyncStorage.clear();
    if (!isLoggedIn) {
      // this is to make sure isLoggedIn has changed, will be removed later
      navigation.navigate('Login');
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.profileHeader}>Profile</Text>
      <Text style={styles.profileInformation}>Name: {user.username}</Text>
      <Text style={styles.profileInformation}>Email: {user.email}</Text>
      {/* <Text>id: {user.user_id}</Text> */}
      <Button title={'Logout'} onPress={logout} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,
  },
  profileHeader: {
    fontSize: 40,
    margin: 30,
  },
  profileInformation: {
    fontSize: 20,
    margin: 20,
  },
});

Profile.propTypes = {
  navigation: PropTypes.object,
};

export default Profile;

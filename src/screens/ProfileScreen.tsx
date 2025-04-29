import React, { useState } from 'react';
import { View, TextInput, Button, Alert, Text } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/RootStackParamList'; // Import RootStackParamList

const ProfileScreen: React.FC = () => {
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [profilePic, setProfilePic] = useState('');

  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>(); // Correctly type navigation

  const handleSave = async () => {
    const userId = 'user-id'; // Use authenticated user ID
    try {
      await firestore().collection('users').doc(userId).set({
        name,
        dob,
        height,
        weight,
        profilePic,
      });
      Alert.alert('Profil Güncellendi');
      navigation.navigate('Home'); // Correct navigation
    } catch (error) {
      Alert.alert('Error', 'Profil güncellenemedi');
    }
  };

  return (
    <View>
      <Text>Profil Bilgileri</Text>
      <TextInput
        placeholder="Ad Soyad"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        placeholder="Doğum Tarihi"
        value={dob}
        onChangeText={setDob}
      />
      <TextInput
        placeholder="Boy"
        value={height}
        onChangeText={setHeight}
      />
      <TextInput
        placeholder="Kilo"
        value={weight}
        onChangeText={setWeight}
      />
      {/* Add an option to upload profile pic here */}
      <Button title="Profil Kaydet" onPress={handleSave} />
    </View>
  );
};

export default ProfileScreen;

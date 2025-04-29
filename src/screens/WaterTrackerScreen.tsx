import React, { useState } from 'react';
import { View, Button, Text, TextInput, Alert } from 'react-native';
import firestore from '@react-native-firebase/firestore';

const WaterTrackerScreen = () => {
  const [currentWater, setCurrentWater] = useState(0);
  const [targetWater, setTargetWater] = useState(2500);

  const handleAddWater = (amount: number) => {
    setCurrentWater(prev => prev + amount);
  };

  const handleSetTarget = () => {
    setTargetWater(Number(targetWater));
  };

  const saveWaterData = async () => {
    const userId = 'user-id'; // Use authenticated user ID
    try {
      await firestore().collection('waterTracking').doc(userId).set({
        currentWater,
        targetWater,
      });
      Alert.alert('Su Takibi Güncellendi');
    } catch (error) {
      Alert.alert('Hata', 'Su verisi kaydedilemedi');
    }
  };

  return (
    <View>
      <Text>Günlük Su Takibi</Text>
      <Text>{currentWater} ml / {targetWater} ml</Text>
      <Button title="200 ML Su Ekle" onPress={() => handleAddWater(200)} />
      <TextInput
        value={targetWater.toString()}
        onChangeText={(text) => setTargetWater(Number(text))}
        keyboardType="numeric"
        placeholder="Yeni Hedef (ml)"
      />
      <Button title="Hedefi Ayarla" onPress={handleSetTarget} />
      <Button title="Kaydet" onPress={saveWaterData} />
    </View>
  );
};

export default WaterTrackerScreen;

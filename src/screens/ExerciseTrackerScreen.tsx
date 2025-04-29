import React, { useState } from 'react';
import { View, Button, Text, TextInput } from 'react-native';

const ExerciseTrackerScreen = () => {
  const [minutes, setMinutes] = useState(0);
  const [targetMinutes, setTargetMinutes] = useState(30);

  const handleAddMinutes = (amount: number) => {
    setMinutes(prev => prev + amount);
  };

  const handleSetTarget = () => {
    setTargetMinutes(Number(targetMinutes));
  };

  return (
    <View>
      <Text>Günlük Koşu Takibi</Text>
      <Text>{minutes} dakika / {targetMinutes} dakika</Text>
      <Button title="10 Dakika Ekle" onPress={() => handleAddMinutes(10)} />
      <TextInput
        value={targetMinutes.toString()}
        onChangeText={(text) => setTargetMinutes(Number(text))}
        keyboardType="numeric"
        placeholder="Yeni Hedef (dakika)"
      />
      <Button title="Hedefi Ayarla" onPress={handleSetTarget} />
    </View>
  );
};

export default ExerciseTrackerScreen;

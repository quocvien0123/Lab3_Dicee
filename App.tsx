
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  Platform,
  StatusBar as RNStatusBar,
  ImageSourcePropType,
} from 'react-native';

const DICE_IMAGES: Record<number, ImageSourcePropType> = {
  1: require('./assets/dice1.png'),
  2: require('./assets/dice2.png'),
  3: require('./assets/dice3.png'),
  4: require('./assets/dice4.png'),
  5: require('./assets/dice5.png'),
  6: require('./assets/dice6.png'),
};

const getRandomDiceValue = (): number => {
  return Math.floor(Math.random() * 6) + 1;
};

export default function App() {
  const [leftDice, setLeftDice] = useState<number>(1);
  const [rightDice, setRightDice] = useState<number>(2);

  const rollDice = () => {
    setLeftDice(getRandomDiceValue());
    setRightDice(getRandomDiceValue());
  };

  const total = leftDice + rightDice;

  return (
    <View style={styles.container}>
      <RNStatusBar barStyle="light-content" />

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Dicee</Text>
        <Text style={styles.subtitle}>Tap the button or dice to roll</Text>
      </View>

      {/* Dice Section */}
      <View style={styles.centerSection}>
        <View style={styles.diceRow}>
          {/* Left Dice */}
          <Pressable
            onPress={rollDice}
            style={({ pressed }) => [
              styles.diceWrapper,
              pressed && styles.dicePressed,
            ]}
          >
            <Image
              source={DICE_IMAGES[leftDice]}
              style={styles.diceImage}
              resizeMode="contain"
            />
          </Pressable>

          {/* Right Dice */}
          <Pressable
            onPress={rollDice}
            style={({ pressed }) => [
              styles.diceWrapper,
              pressed && styles.dicePressed,
            ]}
          >
            <Image
              source={DICE_IMAGES[rightDice]}
              style={styles.diceImage}
              resizeMode="contain"
            />
          </Pressable>
        </View>

        {/* Total Score Badge */}
        <View style={styles.totalBadge}>
          <Text style={styles.totalLabel}>TOTAL</Text>
          <Text style={styles.totalValue}>{total}</Text>
        </View>

        {/* Roll Button */}
        <Pressable
          onPress={rollDice}
          style={({ pressed }) => [
            styles.rollButton,
            pressed && styles.rollButtonPressed,
          ]}
        >
          <Text style={styles.rollButtonText}>ROLL</Text>
        </Pressable>
      </View>

      {/* Footer with Student Info */}
      <View style={styles.footer}>
        <Text style={styles.studentName}>Nguyễn Anh Tuấn - 23IT297</Text>
        <Text style={styles.studentClass}>Lớp: 23SE2 • Lab 03 - Dicee</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7F1D1D', // Deep rich casino crimson
    paddingTop: Platform.OS === 'android' ? (RNStatusBar.currentHeight ?? 0) : 0,
    justifyContent: 'space-between',
  },
  header: {
    alignItems: 'center',
    paddingTop: 36,
  },
  title: {
    fontSize: 40,
    fontWeight: '900',
    color: '#FEF2F2',
    letterSpacing: 2,
    textTransform: 'uppercase',
  },
  subtitle: {
    fontSize: 13,
    fontWeight: '500',
    color: '#FECACA',
    marginTop: 4,
    letterSpacing: 0.5,
  },
  centerSection: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  diceRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 24,
    marginBottom: 28,
  },
  diceWrapper: {
    padding: 6,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.35,
    shadowRadius: 8,
    elevation: 8,
  },
  dicePressed: {
    transform: [{ scale: 0.93 }],
    opacity: 0.85,
  },
  diceImage: {
    width: 135,
    height: 135,
  },
  totalBadge: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderRadius: 16,
    paddingVertical: 10,
    paddingHorizontal: 28,
    alignItems: 'center',
    marginBottom: 28,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  totalLabel: {
    fontSize: 12,
    fontWeight: '700',
    color: '#FCA5A5',
    letterSpacing: 1.5,
    marginBottom: 2,
  },
  totalValue: {
    fontSize: 32,
    fontWeight: '900',
    color: '#FFFFFF',
    letterSpacing: 1,
  },
  rollButton: {
    backgroundColor: '#DC2626',
    paddingVertical: 14,
    paddingHorizontal: 56,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#FECACA',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 6,
  },
  rollButtonPressed: {
    transform: [{ scale: 0.96 }],
    backgroundColor: '#B91C1C',
  },
  rollButtonText: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: '800',
    letterSpacing: 3,
  },
  footer: {
    alignItems: 'center',
    paddingBottom: 24,
    paddingTop: 12,
  },
  studentName: {
    fontSize: 14,
    fontWeight: '700',
    color: '#FEE2E2',
    letterSpacing: 0.5,
  },
  studentClass: {
    fontSize: 12,
    fontWeight: '500',
    color: '#FCA5A5',
    marginTop: 2,
  },
});

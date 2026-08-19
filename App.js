import { useState } from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.counter}>{count}</Text>
      <View style={styles.buttons}>
        <Pressable
          style={({ pressed }) => [styles.button, styles.increment, pressed && styles.pressed]}
          onPress={() => setCount((c) => c + 1)}
        >
          <Text style={styles.buttonText}>+</Text>
        </Pressable>
        <Pressable
          style={({ pressed }) => [styles.button, styles.reset, pressed && styles.pressed]}
          onPress={() => setCount(0)}
        >
          <Text style={styles.buttonText}>Сброс</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  counter: {
    fontSize: 96,
    fontWeight: '300',
    color: '#1a1a1a',
    marginBottom: 48,
  },
  buttons: {
    flexDirection: 'row',
    gap: 16,
    alignItems: 'center',
  },
  button: {
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 12,
    minWidth: 80,
    alignItems: 'center',
  },
  increment: {
    backgroundColor: '#2563eb',
  },
  reset: {
    backgroundColor: '#64748b',
  },
  pressed: {
    opacity: 0.75,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: '600',
  },
});

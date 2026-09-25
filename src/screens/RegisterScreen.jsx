import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';

const API_URL = 'http://localhost:5000';

function RegisterScreen({onLogin}) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const register = async () => {
    if (!name.trim() || !email.trim() || !password) {
      Alert.alert('Missing information', 'Please fill in all fields.');
      return;
    }

    if (password.length < 6) {
      Alert.alert(
        'Invalid password',
        'Password must be at least 6 characters.',
      );
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(`${API_URL}/api/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        Alert.alert('Registration failed', data.message || 'Something went wrong.');
        return;
      }

      Alert.alert(
        'Registration successful 🎉',
        'Your account has been created.',
        [
          {
            text: 'Login',
            onPress: onLogin,
          },
        ],
      );

      setName('');
      setEmail('');
      setPassword('');
    } catch (error) {
      console.error('Register error:', error);

      Alert.alert(
        'Connection error',
        'Could not connect to the server.',
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>

      <ScrollView
        contentContainerStyle={styles.content}
        keyboardShouldPersistTaps="handled">

        <View style={styles.logoCircle}>
          <Text style={styles.logo}>🌱</Text>
        </View>

        <Text style={styles.title}>
          Join GoodDeeds
        </Text>

        <Text style={styles.subtitle}>
          Start making a difference today.
        </Text>

        <Text style={styles.label}>
          Name
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          placeholderTextColor="#AAAAAA"
          value={name}
          onChangeText={setName}
          autoCapitalize="words"
        />

        <Text style={styles.label}>
          Email
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          placeholderTextColor="#AAAAAA"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
        />

        <Text style={styles.label}>
          Password
        </Text>

        <TextInput
          style={styles.input}
          placeholder="At least 6 characters"
          placeholderTextColor="#AAAAAA"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <TouchableOpacity
          style={styles.registerButton}
          activeOpacity={0.8}
          onPress={register}
          disabled={loading}>

          <Text style={styles.registerButtonText}>
            {loading ? 'Creating account...' : 'Create Account'}
          </Text>

        </TouchableOpacity>

        <TouchableOpacity
          style={styles.loginButton}
          onPress={onLogin}
          activeOpacity={0.7}>

          <Text style={styles.loginText}>
            Already have an account?{' '}
            <Text style={styles.loginBold}>
              Login
            </Text>
          </Text>

        </TouchableOpacity>

      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF9EC',
  },

  content: {
    flexGrow: 1,
    padding: 24,
    justifyContent: 'center',
  },

  logoCircle: {
    width: 76,
    height: 76,
    borderRadius: 38,
    backgroundColor: '#FFF1CC',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },

  logo: {
    fontSize: 38,
  },

  title: {
    marginTop: 20,
    fontSize: 30,
    fontWeight: '800',
    textAlign: 'center',
    color: '#222222',
  },

  subtitle: {
    marginTop: 7,
    marginBottom: 28,
    fontSize: 14,
    textAlign: 'center',
    color: '#777777',
  },

  label: {
    marginBottom: 7,
    fontSize: 14,
    fontWeight: '700',
    color: '#333333',
  },

  input: {
    height: 54,
    marginBottom: 17,
    paddingHorizontal: 16,
    borderRadius: 15,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#EEEEEE',
    fontSize: 15,
    color: '#222222',
  },

  registerButton: {
    height: 56,
    marginTop: 5,
    borderRadius: 17,
    backgroundColor: '#F59E0B',
    alignItems: 'center',
    justifyContent: 'center',
  },

  registerButtonText: {
    fontSize: 16,
    fontWeight: '800',
    color: '#FFFFFF',
  },

  loginButton: {
    marginTop: 20,
    alignItems: 'center',
  },

  loginText: {
    fontSize: 13,
    color: '#777777',
  },

  loginBold: {
    fontWeight: '800',
    color: '#F59E0B',
  },
});

export default RegisterScreen;
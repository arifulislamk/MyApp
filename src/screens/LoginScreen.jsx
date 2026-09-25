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

function LoginScreen({onLogin, onRegister}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const login = async () => {
    if (!email.trim() || !password) {
      Alert.alert(
        'Missing information',
        'Please enter your email and password.',
      );
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(`${API_URL}/api/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email.trim(),
          password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        Alert.alert(
          'Login failed',
          data.message || 'Invalid email or password.',
        );
        return;
      }

      // Pass logged-in user and token to App
      onLogin(data.user, data.token);

      setEmail('');
      setPassword('');
    } catch (error) {
      console.error('Login error:', error);

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

        {/* Logo */}
        <View style={styles.logoCircle}>
          <Text style={styles.logo}>
            🌱
          </Text>
        </View>

        {/* Header */}
        <Text style={styles.title}>
          Welcome Back
        </Text>

        <Text style={styles.subtitle}>
          Continue your good deed journey.
        </Text>

        {/* Email */}
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

        {/* Password */}
        <Text style={styles.label}>
          Password
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          placeholderTextColor="#AAAAAA"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        {/* Login */}
        <TouchableOpacity
          style={styles.loginButton}
          activeOpacity={0.8}
          onPress={login}
          disabled={loading}>

          <Text style={styles.loginButtonText}>
            {loading ? 'Logging in...' : 'Login'}
          </Text>

        </TouchableOpacity>

        {/* Register */}
        <TouchableOpacity
          style={styles.registerButton}
          onPress={onRegister}
          activeOpacity={0.7}>

          <Text style={styles.registerText}>
            Don't have an account?{' '}
            <Text style={styles.registerBold}>
              Register
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

  loginButton: {
    height: 56,
    marginTop: 5,
    borderRadius: 17,
    backgroundColor: '#F59E0B',
    alignItems: 'center',
    justifyContent: 'center',
  },

  loginButtonText: {
    fontSize: 16,
    fontWeight: '800',
    color: '#FFFFFF',
  },

  registerButton: {
    marginTop: 20,
    alignItems: 'center',
  },

  registerText: {
    fontSize: 13,
    color: '#777777',
  },

  registerBold: {
    fontWeight: '800',
    color: '#F59E0B',
  },
});

export default LoginScreen;
import React from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Alert,
  Vibration,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { TextInput, Button } from "react-native";
import { Link } from "expo-router";

const Signup = () => {
  return (
    <>
      {/* <TouchableOpacity style={styles.header}>
        <Icon name="chevron-left" size={25} />
      </TouchableOpacity> */}
      <ScrollView>
        <Text style={styles.title}>Sign Up</Text>
        <View style={styles.signupContainer}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Full Name</Text>
            <View style={styles.inputWrapper}>
              <Icon name="email-outline" size={20} style={styles.icon} />
              <TextInput
                style={styles.input}
                placeholder="Enter your full name"
              />
            </View>
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Account No</Text>
            <View style={styles.inputWrapper}>
              <Icon name="fingerprint" size={20} style={styles.icon} />
              <TextInput
                keyboardType="numeric"
                style={styles.input}
                placeholder="Enter your account number"
              />
            </View>
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Phone No</Text>
            <View style={styles.inputWrapper}>
              <Icon name="phone-outline" size={20} style={styles.icon} />
              <TextInput style={styles.input} placeholder="+91 1234567890" />
            </View>
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>OTP (Auto Detected)</Text>
            <View style={styles.inputWrapper}>
              <Icon name="lock-outline" size={20} style={styles.icon} />
              <TextInput
                keyboardType="numeric"
                style={styles.input}
                placeholder="Enter OTP"
              />
            </View>
          </View>
          <Button
            title="Sign Up"
            onPress={() => {
              Vibration.vibrate();
              Alert.alert("Sign Up", "Sign Up button clicked", [
                { text: "OK" },
              ]);
            }}
          />
        </View>
      </ScrollView>
      <Link style={{ color: "blue", margin: 20 }} href="/home">
        Go to Home
      </Link>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: 15,
  },
  title: {
    marginTop: 40,
    fontSize: 30,
    marginVertical: 12,
    padding: 10,
  },
  signupContainer: {
    padding: 20,
  },
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 14,
    color: "gray",
    marginBottom: 5,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    flex: 1,
    borderColor: "gray",
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    height: 40,
    flex: 1,
    borderWidth: 0, // Disable default border
    outline: "none", // Disable outline
  },
});

export default Signup;

import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

const home = () => {
  return (
    <View>
      <Text>home</Text>
      <Link style={{ color: "blue" }} href="/signup">
        go to signup
      </Link>
    </View>
  );
};

export default home;

const styles = StyleSheet.create({});

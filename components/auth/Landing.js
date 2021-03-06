import React from "react";
import { Text, View, Button } from "react-native";

export default function Landing({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Text>Landing Page</Text>
      <Button
        title="register"
        onPress={() => navigation.navigate("Register")}
      />
      <Button title="login" onPress={() => navigation.navigate("Login")} />
    </View>
  );
}

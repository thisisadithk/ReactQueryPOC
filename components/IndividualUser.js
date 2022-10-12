import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { getSpecificUser } from "../Service/APIList";
import { useQuery } from "@tanstack/react-query";

const IndividualUser = ({ route }) => {
  const id = route.params;
  const { isLoading, isError, data, error } = useQuery(["user", id], () =>
    getSpecificUser(id)
  );
  return (
    <View>
      {isLoading && <Text>Loading.....</Text>}
      <View style={{ padding: 10 }}>
        <Text style={styles.addressDetails}>Residential Details</Text>
        <Text>{"Suite : " + data?.address?.suite}</Text>
        <Text>{"Street : " + data?.address?.street}</Text>
        <Text>{"City : " + data?.address?.city}</Text>
        <Text>{"Zipcode : " + data?.address?.zipcode}</Text>
      </View>
      <View style={{ padding: 10 }}>
        <Text style={styles.addressDetails}>Company Details</Text>
        <Text>{"Name : " + data?.company?.name}</Text>
        <Text>{"Description : " + data?.company?.catchPhrase}</Text>
      </View>
    </View>
  );
};

export default IndividualUser;

const styles = StyleSheet.create({
  addressDetails: {
    fontSize: 25,
    fontWeight: "bold",
  },
});

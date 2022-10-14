import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { getSpecificUser } from "../Service/APIList";
import { useQuery } from "@tanstack/react-query";
import { getUserTodos } from "../Service/APIList";

const IndividualUser = ({ route }) => {
  const id = route.params;

  /* QUERY KEYS EXAMPLE */
  const { isLoading, isError, data, error } = useQuery(["user", id], () =>
    getSpecificUser(id)
  );

  /* DEPENDENT QUERIES EXAMPLE */

  // const {
  //   status,
  //   fetchStatus,
  //   data: todos,
  // } = useQuery(["userTodos", id], () => getUserTodos(id), {
  //   enabled: data ? true : false,
  // });

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
      {/* <View>{todos && console.log(todos)}</View> */}
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

import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getTodos } from "../Service/APIList";
import { SafeAreaView } from "react-native";

const DisplayTodos = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  async function fetchTodos() {
    const result = await getTodos();
    if (result) {
      setIsLoading(false);
      setData(result);
    }
  }

  useEffect(() => {
    console.log("component mounted");
    fetchTodos();
  }, []);

  //   const { isLoading, isError, data, error } = useQuery(["todos"], getTodos);

  return (
    <SafeAreaView>
      {/* <Text style={styles.todoHeading}>My Todos</Text> */}
      {isLoading && <Text>Loading...</Text>}
      {data && (
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.todoView} key={item.id}>
              <View style={styles.todoSingleView}>
                <Text style={styles.todoTitle}>{item.title}</Text>
                {item.completed ? (
                  <Text
                    style={{
                      color: "darkgreen",
                      fontSize: 12,
                      fontWeight: "500",
                    }}
                  >
                    Complete
                  </Text>
                ) : (
                  <Text
                    style={{ color: "orange", fontSize: 12, fontWeight: "500" }}
                  >
                    Pending
                  </Text>
                )}
                {/* <Text style={styles.todoDesc}>{item.completed ? "Complete" : "Not Complete"}</Text> */}
              </View>
            </View>
          )}
        />
      )}
    </SafeAreaView>
  );
};

export default DisplayTodos;

const styles = StyleSheet.create({
  todoView: {
    flexDirection: "row",
    alignItems: "center",
    padding: 5,
  },
  todoSingleView: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 10,
    flexGrow: true,
  },
  todoTitle: {
    fontSize: 15,
    fontWeight: "700",
  },
  todoDesc: {
    fontSize: 9,
  },
});

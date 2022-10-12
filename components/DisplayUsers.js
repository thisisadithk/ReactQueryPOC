import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getTodos, getUsers } from '../Service/APIList';
import { SafeAreaView } from 'react-native';


const DisplayUsers = () => {
    const { isLoading, isError, data, error } = useQuery(['users'], getUsers);

    return (
        <SafeAreaView>
            <Text>My Users</Text>
            {isLoading && <Text>Loading...</Text>}
            {data && <FlatList
                data={data}
                keyExtractor={item => item.id}
                renderItem={({item}) => (
                    <View style={styles.todoView} key={item.id}>
                        <View style={styles.todoSingleView}>
                            <Text style={styles.todoTitle}>{item.name}</Text>
                            <Text style={styles.todoDesc}>{item.email}</Text>
                        </View>
                    </View>
                )}
            />}
        </SafeAreaView>
    )
}

export default DisplayUsers

const styles = StyleSheet.create({
    todoHeading : {
        fontSize : 35,
        fontWeight : "bold",
        color : "#e3bb1e",
        textAlign : "center"
    },
    todoView : {
        flexDirection : "row",
        alignItems : "center",
        padding : 5,
    },
    todoSingleView : {
        backgroundColor : "#f0f2eb",
        borderRadius : 12,
        padding : 10,
        flexGrow : true,
    },
    todoTitle : {
        fontSize : 15,
        fontWeight : "700",
    },
    todoDesc : {
        fontSize : 9,
    }
})
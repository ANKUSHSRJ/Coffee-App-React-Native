import { View, Text, Button, TouchableOpacity, Image, Pressable, StyleSheet } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { ScrollView } from 'react-native-gesture-handler';

const HomeScreen = ({ route }) => {
    const navigation = useNavigation();
    const { itemId, otherParam } = route.params;



    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <View>
                <TouchableOpacity
                    onPress={() => console.log("dudee")}
                ><Text></Text><Image source={require('../../../assets/search.png')} style={{ height: 30, width: 30, right: 20 }} /></TouchableOpacity></View>
            ),
        });
    }, [navigation]);

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        const resp = await fetch("https://api.sampleapis.com/coffee/hot");
        const data = await resp.json();
        setData(data);
        setLoading(false);
    };

    useEffect(() => {
    }, []);


    const list = () => {
        if (Array.isArray(data)) {

            return data.map((element, index) => {
                return (
                    <View style={{ margin: 10, padding: 6, marginTop: 20, }}>
                        <Text style={{ fontWeight: "500" }}>{element.title}</Text>
                        <Text>{element.ingredients}</Text>
                        <Image
                            style={{ width: 300, height: 200,borderRadius:5,}}
                            source={{ uri: element.image }}
                        />
                        <Pressable style={styles.button} onPress={() => navigation.navigate('ProductPage')}>
                            <Text style={styles.text}>Read More</Text>
                        </Pressable>
                    </View>
                )
            })
        }

    }

    return (
        <ScrollView>
            <View style={{ alignSelf: "center" }}>
                {list()}
                <Button title="Go to Sign In" onPress={() => navigation.navigate('SignIn')} />

                <Button title="Fetch Api data" onPress={() => fetchData()} />

            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
    marginTop: 1
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
   letterSpacing: 0.25,
    color: 'white',
  },

})

export default HomeScreen

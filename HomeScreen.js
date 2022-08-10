import { View, Text, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
 
const HomeScreen = ({ route }) => {
    const navigation = useNavigation();
    const { itemId, otherParam } = route.params;
 

 
    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                 <TouchableOpacity
                onPress={() => console.log("dudee")} 
                ><Text>Search </Text></TouchableOpacity>
            ),
        });
    }, [navigation]);

    return (
        <View style={{ margin: 10, padding: 10, marginTop: 200 }}>
            
            <Button title="Go to Sign In" onPress={() => navigation.navigate('SignIn')} />
             
<Text>{itemId}</Text>
 
        </View>
    )
}

export default HomeScreen
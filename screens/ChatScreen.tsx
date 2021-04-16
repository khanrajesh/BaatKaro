import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';
import ChatListItem from '../components/ChatListItem';
import ChatRooms from '../data/ChatRooms';
import { FlatList } from 'react-native-gesture-handler';
import ChatListItems from '../components/ChatListItem';



export default function ChatScreen() {
  return (
    <View style={styles.container}>
      <FlatList
      style={{width: '100%'}}
        data={ChatRooms}
        renderItem={({item})=><ChatListItems chatRoom={item}/>}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
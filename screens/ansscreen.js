import React from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView,TextInput, ToastAndroid, ScrollView,TouchableOpacity } from 'react-native';
import {Header, SearchBar} from 'react-native-elements';
import { FlatList } from 'react-native-gesture-handler';
import db from '../config'
import firebase from 'firebase'

export default class ansscreen extends React.Component {
    constructor(){
      super();
      this.state ={
        questionlist:[],
        initialdata:[],
        search : '',
       
      }
    }
    componentDidMount(){
      this.recieve()
    }
 
  
    updateSearch = search => {
      this.setState({ search });
    };
  
  
    recieve=()=>{
      
        var questionlist= []
        var stories = db.collection("ans")
          .get().then((querySnapshot)=> {
            querySnapshot.forEach((doc)=> {
                questionlist.push(doc.data())
                console.log('ans',questionlist)
            })
            this.setState({questionlist})
          })
      
     
    };
  
   

   
    
      render(){
        return(
          <View style ={styles.container}>
           
                <Header 
                    backgroundColor = {'white'}
                    centerComponent = {{
                        text : 'The Helping Hand',
                        style : { color: 'green', fontSize: 20}
                    }}
                   
                />
                <View styles ={{height:20,width:'100%'}}>
              <SearchBar
              placeholder="Search Here"
              
              value={this.state.search}
            />
          </View>
          
          <ScrollView>
             
              <FlatList
                data={this.state.search === "" ?  this.state.questionlist: this.state.data}
                renderItem={({ item }) => (
                  <View style={styles.itemContainer}>
                    <Text> Student Name:{item.studentname} </Text>
                    <Text>  Title: {item.no}</Text>
                    <Text>   Answer: {item.q}</Text>
                    
                   
                    <Text></Text>
                  </View>
                )}
                keyExtractor={(item, index) => index.toString()}
                /> 
          </ScrollView> 

               
              
          
         
        </View>  
      );      
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  item: {
    backgroundColor: 'green',
    padding:10,
    marginVertical: 8,
   
  },
  title: {
    fontSize: 32,
  },
  button:{
    backgroundColor:'#f6416c',
    width:200,
    height:50,
   
},
buttonText:{
    fontSize:16,
    fontWeight:"bold"
},
  itemContainer: {
    height: 80,
    width:'100%',
    borderWidth: 2,
    borderColor: 'green',
    justifyContent:'center',
    alignSelf: 'center',
  }

});
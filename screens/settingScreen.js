import React,{Component} from 'react'
import {View,Text,TextInput,StyleSheet,
  TouchableOpacity,Alert,KeyboardAvoidingView,ScrollView,Modal} from 'react-native'
import firebase from 'firebase'
import db from '../config'
  export default class SettingScreen extends Component{
      constructor(){
          super()
          this.state={
              emailID:"",
              firstname:"",
              lastname:"",
              address:"",
              contact:"",
              docID:"",

          }
      }
      getdetails = ()=>{
          var user = firebase.auth().currentUser
          var email = user.email
          db.collection("users").where("emailID","==",email).get().then(snapshot=>{snapshot.forEach(doc=>{
              var data = doc.data()
              this.setState({emailID:data.emailID,firstname:data.firstname,lastname:data.lastname,address:data.address,contact:data.contact,docID:doc.id})
          })})
          

      }
      updatedetails = ()=>{
          db.collection("").doc(this.state.docID).update({
              firstname:this.state.firstname,
              lastname:this.state.lastname,
              address:this.state.address,
              contact:this.state.contact,
              emailID:this.state.emailID
              
          })
          Alert.alert("file updated sucessfully")
      }
      componentDidMount(){
          this.getdetails()
      }
      render(){
          return(
          <View style ={styles.container} >
            
              <View style = {styles.formContainer}>
              <TextInput style = {styles.formTextInput}
                  placeholder = {"first name"}
                  maxLength = {9}
                  onChangeText = {(text)=>{this.setState({firstname:text})}}
                  value = {this.state.firstname}
                  />
                  <TextInput style = {styles.formTextInput}
                  placeholder = {"last name"}
                  maxLength = {9}
                  onChangeText = {(text)=>{this.setState({lastname:text})}}
                  value = {this.state.lastname}
                  />
                 <TextInput style = {styles.formTextInput}
                  placeholder = {"contact"}
                  maxLength = {10}
                  keyboardType = {"numeric"}
                  onChangeText = {(text)=>{this.setState({contact:text})}}
                  value = {this.state.contact}
                  />
             <TextInput style = {styles.formTextInput}
                  placeholder = {"address"}
                multiline = {true}
                  onChangeText = {(text)=>{this.setState({address:text})}}
                  value = {this.state.address}
                  />

                  
              <TouchableOpacity style = {styles.button} onPress={()=>{this.updatedetails()}}>
                  <Text>save</Text>
              </TouchableOpacity>
              </View>
          </View>

          )
      }
  }
  const styles = StyleSheet.create({ container : { flex:1, alignItems: 'center', justifyContent: 'center' }, formContainer:{ flex:1, width:'100%', alignItems: 'center' }, formTextInput:{ width:"75%", height:35, alignSelf:'center', borderColor:'#ffab91', borderRadius:10, borderWidth:1, marginTop:20, padding:10, }, button:{ width:"75%", height:50, justifyContent:'center', alignItems:'center', borderRadius:10, backgroundColor:"#ff5722", shadowColor: "#000", shadowOffset: { width: 0, height: 8, }, shadowOpacity: 0.44, shadowRadius: 10.32, elevation: 16, marginTop:20 }, buttonText:{ fontSize:25, fontWeight:"bold", color:"#fff" } })
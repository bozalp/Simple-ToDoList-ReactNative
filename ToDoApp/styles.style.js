import { useState } from "react";
import { StyleSheet } from "react-native";

export default StyleSheet.create(
    {
        container:
        {
            margin:10,
        },
        header_area:
        {
            flexDirection:'row',
            justifyContent:'space-between'
        },
        header_text:
        {
            fontWeight:'bold',
            color:'#fff',
            fontSize:25,
            textAlign:'center',
            margin:20
        },
        item:
        {
            width:'100%',
            height:50,
            backgroundColor:'#fff',
            justifyContent:'center',
            marginBottom:5,
            borderRadius:5,
            padding:10
        },
        item_completed:
        {
            width:'100%',
            height:50,
            backgroundColor:'#999',
            justifyContent:'center',
            marginBottom:5,
            borderRadius:5,
            padding:10,
        },
        item_text:
        {
            color:'black',
        },
        item_text_completed:
        {
            color:'#ccc',
            textDecorationLine:'line-through'
        },
        textbox_area:
        {
            width:'100%',
            backgroundColor:'#ddd',
            height:40,
            marginBottom:10,
            borderRadius:5
        },
        footer:
        {
            paddingBottom:200,
        }
    }
);
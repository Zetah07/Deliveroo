
import {View, Text, SafeAreaView, Image, TextInput, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'

import * as Icon from 'react-native-feather'

import { StatusBar } from 'expo-status-bar';
import { themeColors } from '../theme';
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';

import { getFeaturedResturants } from '../api';


const HomeScreen = () => {

    const [featuredRestaurants, setFeaturedRestaurants] = useState([]);

    useEffect(()=>{
        getFeaturedResturants().then(data=>{
            setFeaturedRestaurants(data)
        })
    }, [])

  return (
    <SafeAreaView className="bg-white pt-9" >
    <StatusBar
        barStyle="dark-content" 
    />
    {/* search bar */}
        <View className="flex-row items-center space-x-2 px-4 pb-2 ">
            <View className="flex-row flex-1 items-center p-3 rounded-full border border-gray-300">
                <Icon.Search height="25" width="25" stroke="gray" />
                <TextInput placeholder='Resturants' className="ml-2 flex-1" keyboardType='default' />
                <View className="flex-row items-center space-x-1 border-0 border-l-2 pl-2 border-l-gray-300">
                    <Icon.MapPin height="20" width="20" stroke="gray" />
                    <Text className="text-gray-600">Medellin, ANT</Text>
                </View>
            </View>
            <View style={{backgroundColor: themeColors.bgColor(1)}} className="p-3 rounded-full">
                <Icon.Sliders height={20} width={20} strokeWidth="2.5" stroke="white" />
            </View>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}
        contentContainerStyle={{
            paddingBottom: 20,
        }}>

            <Categories />
            <View className ='mt-5'>
                {
                    featuredRestaurants.map ((item, index)=>{
                        return (
                            <FeaturedRow
                                key={index}
                                title={item.name}
                                restaurants={item?.restaurants}
                                description={item.description}
                                />
                        )
                    })
                }
            </View>

        </ScrollView>
    </SafeAreaView>
  )
}


export default HomeScreen
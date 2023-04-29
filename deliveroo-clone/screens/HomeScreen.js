import {View, Text, SafeAreaView, Image, TextInput, ScrollView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { AdjustmentsVerticalIcon, ChevronDownIcon, MagnifyingGlassIcon, UserIcon } from 'react-native-heroicons/outline'
import Categories from '../components/Categories'
import FeaturedRow from '../components/FeaturedRow'


const HomeScreen = () => {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false, 
        });
    }, []);

  return (
    <SafeAreaView className='bg-white pt-8'>
        <View className='flex-row pb-3 items-center space-x-2 mx-4'>
            <Image 
                source={{
                    uri: 'https://links.papareact.com/wru'
                }}
                className='h-7 w-7 bg-gray-300 p-4 rounded-full'
            />
        <View className='flex-1'>
            <Text className='font-bold text-gray-400 text-xs'>Deliver Now!</Text>
            <Text className='font-bold text-xl'>Current Location
                <ChevronDownIcon size={20} color='#00CCBB' />
            </Text>
        </View>

        <UserIcon size={35} color='#00CCBB' />
        </View>
            {/* SEARCH */}
        <View className='flex-row items-center space-x-2 pb-2 mx-4' >
            <View className='flex-row space-x-2 flex-1 bg-gray-200 p-3'>
                <MagnifyingGlassIcon color='#00CCBB' size={20} />
                <TextInput 
                placeholder='Restaurant and cuisines'
                keyboardType='default'
                />
            </View>
                <AdjustmentsVerticalIcon  color='#00CCBB'/>
        </View>
                {/* BODY */}
        <ScrollView
        className='bg-gray-100'
        contentContainerStyle={{
            paddingBottom:100,
        }}
        >
            {/* categories */}
            <Categories />

            {/* featured Rows*/}
            <FeaturedRow 
            id='1'
                title='Featured'
                description='Paid placements from our partners'
            />
            <FeaturedRow
                id='2'
                title='tasty Discounts'
                description="Everyone's been enjoying these juicy discounts!"
            />
            <FeaturedRow 
                id='3'
                title='Offers near you!'
                description='Why not support your local restaurant tonight!'
            />

        </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen
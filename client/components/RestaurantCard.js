import { View, Text, TouchableWithoutFeedback, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

import * as Icon from 'react-native-feather'
import { themeColors } from '../theme'
import { urlFor } from '../sanity'

export default function RestaurantCard({item}) {
    const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback
        onPress={()=>navigation.navigate('Restaurant', {...item})}
    >
        <View
            style={{
                shadowColor: "#f97316",
                shadowOffset: {
                width: 0,
                height: 9,
                },
                shadowOpacity:  0.22,
                shadowRadius: 9.22,
                elevation: 12
            }}
            className='mr-6 bg-white rounded-3xl shadow-lg mb-3'>
                <Image className='h-36 w-64 rounded-t-3xl' source={{uri: item.image ? urlFor(item.image).url() : undefined}} />
                <View className='px-3 pb-4 space-y-2'>
                    <Text className='text-lg font-bold pt-2'>
                        {item.name}
                    </Text>
                    <View className='flex-row items-center space-x-1'>
                        <Image source={require('../assets/images/fullStar.png')} className='h-4 w-4' />
                        <Text className='text-green-700'>{item.stars}</Text>
                        <Text className='text-gray-700'>
                            ({item.reviews} review) - <Text className='font-semibold'>{item?.type?.name}</Text>
                        </Text>
                    </View>
                    <View className='flex-row items-center space-x-1'>
                        <Icon.MapPin color='gray' width='15' height='15' />
                        <Text className='text-gray-700 text-xs'>Nearby {item.address}</Text>
                    </View>
                </View>
        </View>
    </TouchableWithoutFeedback>
  )
}
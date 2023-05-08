import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'

import * as Icon from 'react-native-feather'
import { themeColors } from '../theme'

const RestaurantScreen = () => {
  const {params} = useRoute();
  let item =params;
  console.log('👀 ~ item:', item);

  
  return (
    <View>
     <ScrollView>
      <View className='relative'>
        <Image className='w-full h-72' source={item.image} />
        <TouchableOpacity
          onPress={()=>navigation.goBack()}
          className='absolute top-14 left-4 bg-gray-50 p-2 rounded-full shadow'>
            <Icon.ArrowLeft strokeWidth={3} stroke={themeColors.bgColor(1)} />
        </TouchableOpacity>
      </View>
      <View
        style={{ borderTopLeftRadius: 40 , borderTopRightRadius:40}}
        className='bg-white -mt-12 pt6'>
          <View className='px-5'>
            <Text className='text-3xl font-bold'>{item.name}</Text>
              <View className='flex-row space-x-2 my-1'>
              <View className='flex-row items-center space-x-1'>
                    <Image source={require('../assets/images/fullStar.png')} className='h-4 w-4' />
                    <Text className='text-green-700'>{item.stars}</Text>
                    <Text className='text-gray-700'>
                        ({item.reviews} review) - <Text className='font-semibold'>{item.catogory}</Text>
                    </Text>
                </View>
                <View className='flex-row items-center space-x-1'>
                    <Icon.MapPin color='gray' width='15' height='15' />
                    <Text className='text-gray-700 text-xs'>Nearby {item.address}</Text>
                </View>
            </View>
          </View>
      </View>
     </ScrollView>
    </View>
  )
}

export default RestaurantScreen
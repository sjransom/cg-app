import React, { useEffect, useState } from 'react'
import {
  FlatList,
  ListRenderItem,
  SafeAreaView,
  StyleSheet,
  View
} from 'react-native'
import Config from 'react-native-config'
import { fetchData } from '../api/fetchData'
import NewsItem from '../components/NewsItem'
import { Post, Posts } from '../types'

const News = () => {
  const [data, setData] = useState<Post[] | null>(null)

  const getData = async () => {
    try {
      const fetchedData: Posts = await fetchData(`${Config.API_URL}/newsfeed`)
      setData(fetchedData.posts)
    } catch (e) {
      console.log(e, 'unable to fetch data')
    }
  }

  useEffect(() => {
    getData()
  }, [])

  const renderItem: ListRenderItem<Post> = ({ item }) => {
    return <NewsItem post={item} />
  }

  return (
    <SafeAreaView style={styles.container}>
      <View>
        {data && (
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={post => post.id}
          />
        )}
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default News

import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { Post } from '../types'
import { COLORS } from '../utils/colors'
import { SPACING } from '../utils/spacing'

interface NewsItemProps {
  post: Post
}

const NewsItem: React.FC<NewsItemProps> = ({ post }) => {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Image source={{ uri: post.avatar }} style={styles.avatar} />
        <View>
          <Text style={styles.name}>{post.name}</Text>
          <Text style={styles.date}>{post.createdDate}</Text>
        </View>
      </View>
      <View style={styles.body}>
        <Text style={styles.heading}>{post.heading}</Text>
        <Image source={{ uri: post.image }} style={styles.image} />
        <Text style={styles.bodyText}>{post.body}</Text>
        {post.motm && (
          <Text>
            Man of the match: <Text style={styles.motm}>{post.motm}</Text>
          </Text>
        )}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    marginTop: SPACING.s12,
    padding: SPACING.s12,
    backgroundColor: COLORS.white
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  avatar: {
    width: 40,
    height: 40,
    marginRight: SPACING.s12
  },
  name: {
    fontSize: 14
  },
  date: {
    fontSize: 10
  },
  body: {
    marginTop: SPACING.s12
  },
  heading: {
    marginBottom: SPACING.s12,
    fontWeight: 'bold'
  },
  image: {
    height: 200,
    flex: 1
  },
  bodyText: {
    marginTop: SPACING.s12,
    marginBottom: SPACING.s12
  },
  motm: {
    fontWeight: 'bold'
  }
})

export default NewsItem

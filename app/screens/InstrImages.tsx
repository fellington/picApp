import React from 'react';
import { View, Image, Dimensions, StyleSheet, FlatList, TouchableOpacity, Text, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window'); // Get the window dimensions

// Define the image data type
type ImageData = {
  id: number;
  source: any; // For local images, `source` should use `require()`
};

// Define the images array
const images: ImageData[] = [
  { id: 1, source: require('./images/image1.png') },
  { id: 2, source: require('./images/image2.png') },
  { id: 3, source: require('./images/image3.png') },
  { id: 4, source: require('./images/image4.png') },
  { id: 5, source: require('./images/image5.png') },
  { id: 6, source: require('./images/image6.png') },
  { id: 7, source: require('./images/image7.png') },
  { id: 8, source: require('./images/image8.png') },
  { id: 9, source: require('./images/image9.png') },
  { id: 10, source: require('./images/image10.png') },
  { id: 11, source: require('./images/image11.png') },
  { id: 12, source: require('./images/image12.png') },
  { id: 13, source: require('./images/image13.png') },
];

const InstrImages = () => {
  const navigation = useNavigation(); // Access navigation object

  // Define the renderItem function to display local images
  const renderItem = ({ item }: { item: ImageData }) => (
    <View style={styles.imageContainer}>
      <Image source={item.source} style={styles.image} />
    </View>
  );

  return (
    <View style={{ flex: 1 }}>
      {/* Vertical scrollable image list */}
      <FlatList
        data={images}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ paddingBottom: 100 }} // Add padding to prevent images from getting hidden under the button
      />

      {/* Custom back button that overlays the FlatList */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default InstrImages;

const styles = StyleSheet.create({
  // Use a flexbox container to ensure centering
  imageContainer: {
    width: '100%', // Full width for both platforms
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: Platform.OS === 'web' ? '100%' : width, // Full width on web, match device width on mobile
    height: Platform.OS === 'web' ? height : (width * 3) / 4, // Maintain aspect ratio for mobile
    resizeMode: 'contain', // Ensure the entire image is visible without being cropped
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.4)', // Semi-transparent background
    padding: 10,
    borderRadius: 5,
  },
  backButtonText: {
    color: 'white',
    fontSize: Platform.OS === 'web' ? 10 : 5,
  },
});

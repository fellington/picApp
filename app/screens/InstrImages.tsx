import React, { useState } from 'react';
import { View, Image, Dimensions, StyleSheet, FlatList, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

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
  const [showOverlay, setShowOverlay] = useState(true); // State to control instruction overlay

  // Define the renderItem function to display local images
  const renderItem = ({ item }: { item: ImageData }) => (
    <View style={styles.imageContainer}>
      <Image source={item.source} style={styles.image} />
    </View>
  );

  return (
    <View style={{ flex: 1 }}>
      {/* Custom back button at the top of the screen */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>

      {/* Instruction overlay */}
      {showOverlay && (
        <View style={styles.overlay}>
          <Text style={styles.overlayText}>Swipe left (back) or right (forward) to navigate images.</Text>
          <TouchableOpacity onPress={() => setShowOverlay(false)}>
            <Text style={styles.dismissText}>Got it!</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Swipable image list */}
      <FlatList
        data={images}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default InstrImages;

const styles = StyleSheet.create({
  imageContainer: {
    width, // Full screen width for swiping
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.6)', // Semi-transparent background
    padding: 10,
    borderRadius: 5,
  },
  backButtonText: {
    color: 'white',
    fontSize: 10,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    zIndex: 2, // Make sure the overlay is on top
  },
  overlayText: {
    color: 'white',
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center',
  },
  dismissText: {
    color: '#00aced',
    fontSize: 18,
    padding: 10,
    borderColor: '#00aced',
    borderWidth: 1,
    borderRadius: 5,
  },
});
import React, { useState } from 'react';
import { FlatList, View, StyleSheet, Text, TouchableOpacity } from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';

const LawsCardsFlatList = ({ lawsData }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleDescription = () => {
    setExpanded(!expanded);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={lawsData}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            {/* Additional Information */}
            <Text style={styles.sectionText}>section: "{item.section}"</Text>
            <Text style={styles.lawNameText}>Law Name: "{item.lawName}"</Text>
            <Text style={[styles.sectionText, { color: 'red', fontSize: 22 }]}>Law Description</Text>

            {/* Main Text */}
            <Text style={styles.descriptionText}>
              {expanded ? item.description : `${item.description.substring(0, 300)}...`}
            </Text>

            {/* See more details */}
            <TouchableOpacity onPress={toggleDescription}>
              <Text style={styles.seeMoreText}>
                {expanded ? 'See less details' : 'See more details'}
              </Text>
            </TouchableOpacity>
          </View>
        )}
        showsVerticalScrollIndicator={true}
        style={{ scrollbarColor: '#000000 #743089' }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#FFFFFF',
    // marginTop : 10
  },
  itemContainer: {
    marginBottom: 16,
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 8,
    borderColor: '#743089',
    borderWidth: 1,
    shadowColor: '#743089',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.6,
    shadowRadius: 6,
    elevation: 5,
  },
  sectionText: {
    fontSize: 24,
    fontWeight: '900',
    textAlign: 'center',
    color: '#9A4EAE',
    marginVertical: 5,
  },
  lawNameText: {
    color: 'green',
    fontSize: 21,
    fontWeight: '800',
    textAlign: 'center',
  },
  descriptionText: {
    color: '#585858',
    fontSize: 17,
    fontStyle: 'italic',
    fontWeight: '500',
    textAlign: 'justify',
    marginLeft: 2,
    marginRight: 2,
    lineHeight: 25,
  },
  seeMoreText: {
    color: 'blue',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
  },
});

export default LawsCardsFlatList;

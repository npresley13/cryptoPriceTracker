import { StatusBar } from 'expo-status-bar';
import React, { useRef, useMemo } from 'react';
import { FlatList, StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { ListItem } from './components/ListItem';
import { SAMPLE_DATA } from './assets/data/sampleData';

import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';

const ListHeader = () => (
  <>
    <View style={styles.titleWrapper}>
      <Text style={styles.largeTitle}>Markets</Text>
      <StatusBar style="auto" />
    </View>
    <View style={styles.divider}/>
  </>
)



export default function App() {

  const bottomSheetModalRef = useRef(null);

  const snapPoints = useMemo(() => ["50%"], []);

  const openModal = () => {
    bottomSheetModalRef.current.present();
  }
  
  return (
    <BottomSheetModalProvider>
      <SafeAreaView style={styles.container}>
        <FlatList 
          keyExtractor={(item) => item.id}
          data={SAMPLE_DATA}
          renderItem={({ item }) => (
            <ListItem 
              name={item.name}
              symbol={item.symbol}
              currentPrice={item.current_price}
              priceChangePercentage7d={item.price_change_percentage_7d_in_currency}
              logoUrl={item.image}
              onPress={() => openModal()}
            />
          )}
          ListHeaderComponent={<ListHeader />}
        />
      </SafeAreaView>
      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={0}
        snapPoints={snapPoints}
        style={styles.bottomSheet}
      >
        <View>
          <Text>Awesome 🎉</Text>
        </View>
      </BottomSheetModal>

    </BottomSheetModalProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  titleWrapper: {
    marginTop: 80,
    paddingHorizontal: 16,
  },
  largeTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  divider: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#A9ABB1',
    marginHorizontal: 16,
    marginTop: 16,
  },
  bottomSheet: {
    shadowColor: "#000"
  }
});

import React from 'react';
import { View, Text } from 'react-native';

const Chart = ({ currentPrice, logoUrl, name, priceChangePercentage7d, sparkline }) => {
    
    consoleLog(currentPrice);
    return (
        <View>
            <Text>Chart</Text>
        </View>
    );
}

export default Chart
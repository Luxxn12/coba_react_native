import {
  Box,
  Button,
  ButtonText,
  GluestackUIProvider,
  View,
} from '@gluestack-ui/themed';
import {config} from '@gluestack-ui/config'; // Optional if you want to use default theme
import React from 'react';

export default function App() {
  return (
    <GluestackUIProvider config={config}>
      <View bgColor="pink" h="$full">
        <Box p="$1.5">
          <Button
            size="md"
            variant="solid"
            action="primary"
            isDisabled={false}
            isFocusVisible={false}
            borderRadius={20}>
            <ButtonText>Coba Lagi</ButtonText>
          </Button>
        </Box>
      </View>
    </GluestackUIProvider>
  );
}

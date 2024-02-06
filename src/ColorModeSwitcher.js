import React from 'react';
import { useColorMode, useColorModeValue, IconButton } from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';

export const ColorModeSwitcher = props => {
  const { toggleColorMode } = useColorMode();
  
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  return (
    <IconButton
      
     
     
      variant="ghost"
      bg={'whiteAlpha.900'}
      color={'blackAlpha.900'}
      position={"fixed"}
      // here 1 unit is 4px
      top={"4"}
      right={"4"}
      zIndex={'overlay'}
      onClick={toggleColorMode}
      icon={<SwitchIcon />}
      {...props}
    />
  );
};
export default ColorModeSwitcher;

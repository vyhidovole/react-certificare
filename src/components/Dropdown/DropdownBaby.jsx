import React, { Children, useState } from "react";
import { ThemeProvider, ColorModeProvider } from "@chakra-ui/react"
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
} from '@chakra-ui/react'
import { Button } from "@chakra-ui/react"
import { IoChevronDown } from "react-icons/io5";



export const App = ({ children }) => (
  <ThemeProvider>
    <ColorModeProvider>{children}</ColorModeProvider>
  </ThemeProvider>
)

const DropdownBaby = () => {

     return (
        <Menu>
        <MenuButton as={Button} rightIcon={''}>
       ДЕТСКИЕ
        </MenuButton>
        <MenuList className="bg-white p-5 font-light rounded-sm">
            <MenuItem>Кровати</MenuItem>
            <MenuItem >Полки</MenuItem>
            <MenuItem >Столы</MenuItem>
            <MenuItem>Шкафы</MenuItem>
            <MenuItem>Комоды</MenuItem>
        </MenuList>
    </Menu>

    )
}

export default DropdownBaby 
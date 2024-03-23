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

const DropdownBedroom = () => {

     return (
        <Menu>
        <MenuButton as={Button} rightIcon={''}>
        СПАЛЬНИ
        </MenuButton>
        <MenuList className="bg-white p-5 font-light rounded-sm">
            <MenuItem>Кровати</MenuItem>
            <MenuItem >Матрацы</MenuItem>
            <MenuItem >Шкафы</MenuItem>
            <MenuItem>Комоды</MenuItem>
            <MenuItem>Зеркала</MenuItem>
        </MenuList>
    </Menu>

    )
}

export default DropdownBedroom 
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

const DropdownLiving = () => {

     return (
        <Menu>
        <MenuButton as={Button} rightIcon={''}>
       ГОСТИННЫЕ
        </MenuButton>
        <MenuList className="bg-white p-5 font-light rounded-sm">
            <MenuItem>Модульные</MenuItem>
            <MenuItem >Готовые комплекты</MenuItem>
            <MenuItem >Журнальные столы</MenuItem>
            <MenuItem>Полки</MenuItem>
            <MenuItem>Тумбы под ТВ</MenuItem>
        </MenuList>
    </Menu>

    )
}

export default DropdownLiving 
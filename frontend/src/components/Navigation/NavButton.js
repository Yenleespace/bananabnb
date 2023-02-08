import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuGroup,
    MenuDivider,
    Button,
} from '@chakra-ui/react'

export const NavButton = () => {
    const dispatch = useDispatch()

    return (
        <Menu>
            <MenuButton as={Button} colorScheme='pink'>
                Profile
            </MenuButton>
            <MenuList>
                <MenuGroup>
                    <MenuItem>Log in</MenuItem>
                    <MenuItem>Sign up</MenuItem>
                </MenuGroup>
                <MenuDivider />
                <MenuGroup>
                    <MenuItem>LinkedIn</MenuItem>
                    <MenuItem>Github</MenuItem>
                </MenuGroup>
            </MenuList>
        </Menu>
    )
}

export default NavButton;
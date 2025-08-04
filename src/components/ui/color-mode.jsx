'use client'

import { IconButton, Skeleton, Box } from '@chakra-ui/react'
import * as React from 'react'
import { LuMoon, LuSun } from 'react-icons/lu'

export function ColorModeProvider(props) {
  return props.children
}

export function useColorMode() {
  // ใช้ค่าเริ่มต้นเป็น light mode
  const colorMode = 'light'
  const toggleColorMode = () => {
    // ไม่มีการเปลี่ยนแปลง color mode ในตัวอย่างนี้
  }
  return {
    colorMode: colorMode,
    setColorMode: () => { },
    toggleColorMode,
  }
}

export function useColorModeValue(light, dark) {
  const { colorMode } = useColorMode()
  return colorMode === 'dark' ? dark : light
}

export function ColorModeIcon() {
  const { colorMode } = useColorMode()
  return colorMode === 'dark' ? <LuMoon /> : <LuSun />
}

export const ColorModeButton = React.forwardRef(
  function ColorModeButton(props, ref) {
    const { toggleColorMode } = useColorMode()
    return (
      <IconButton
        onClick={toggleColorMode}
        variant='ghost'
        aria-label='Toggle color mode'
        size='sm'
        ref={ref}
        {...props}
      >
        <ColorModeIcon />
      </IconButton>
    )
  },
)

export const LightMode = React.forwardRef(function LightMode(props, ref) {
  return (
    <Box
      color='gray.800'
      display='contents'
      ref={ref}
      {...props}
    />
  )
})

export const DarkMode = React.forwardRef(function DarkMode(props, ref) {
  return (
    <Box
      color='white'
      display='contents'
      ref={ref}
      {...props}
    />
  )
})

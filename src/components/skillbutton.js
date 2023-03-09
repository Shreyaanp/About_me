import React from 'react'
import { Button, useColorMode } from '@chakra-ui/react'
const SkillButton = (props) => {
    const { colorMode } = useColorMode()
    return (
        <Button
            border="1px"
            borderRadius="10px"
            borderColor={colorMode === "dark" ? "#3f444e" : "#CACBCD"}
            size="sm"
            bg="none"
            _hover={{
                textDecoration: "none",
                bg: colorMode === "dark" ? "#3f444e" : "#e2e8f0"
            }}
            leftIcon={props.icon}>
            {props.text}
        </Button>
    )
}

export default SkillButton
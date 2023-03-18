import React from 'react'
import { Button, useColorMode } from '@chakra-ui/react'
import { motion } from 'framer-motion';
const SkillButton = (props) => {
    const { colorMode } = useColorMode()
    return (
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }

      }

      >
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
  </motion.div>
    )
}

export default SkillButton
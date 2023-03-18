import React, { useEffect } from 'react'
import { VStack, Text, Heading, Wrap, useColorMode } from '@chakra-ui/react'
import { programming_languages, technologies_frameworks, developer_tools, soft_skills, platforms } from "../data/skills";
import SkillButton from "./skillbutton";
import { motion } from 'framer-motion';
const Skills = () => {
    const { colorMode } = useColorMode()
    useEffect(() => {
        document.title = "Skills"
    }, [])
    return (
        <div>

<motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }

      }

      >
                <VStack align="stretch" spacing={4} p={4}>
                    <Heading w="full">Skills</Heading>
                    <VStack align="stretch" spacing={4}>
                        <VStack
                            alignItems="start"
                            border="1px"
                            borderRadius="10px"
                            borderColor={colorMode === "dark" ? "#3f444e" : "#CACBCD"}
                            p={4}>
                            <Text fontWeight="bold">Programming Languages</Text>
                            <Wrap>
                                {programming_languages.map((el) => (
                                    <SkillButton key={el.id} text={el.text} icon={el.icon} />
                                ))}
                            </Wrap>
                        </VStack>

                        <VStack
                            alignItems="start"
                            border="1px"
                            borderRadius="10px"
                            borderColor={colorMode === "dark" ? "#3f444e" : "#CACBCD"}
                            p={4}>
                            <Text fontWeight="bold">Technologies/Frameworks</Text>
                            <Wrap>
                                {technologies_frameworks.map((el) => (
                                    <SkillButton key={el.id} text={el.text} icon={el.icon} />
                                ))}
                            </Wrap>
                        </VStack>

                        <VStack
                            alignItems="start"
                            border="1px"
                            borderRadius="10px"
                            borderColor={colorMode === "dark" ? "#3f444e" : "#CACBCD"}
                            p={4}>
                            <Text fontWeight="bold">Developer Tools</Text>
                            <Wrap>
                                {developer_tools.map((el) => (
                                    <SkillButton key={el.id} text={el.text} icon={el.icon} />
                                ))}
                            </Wrap>
                        </VStack>

                        <VStack
                            alignItems="start"
                            border="1px"
                            borderRadius="10px"
                            borderColor={colorMode === "dark" ? "#3f444e" : "#CACBCD"}
                            p={4}>
                            <Text fontWeight="bold">Platforms</Text>
                            <Wrap>
                                {platforms.map((el) => (
                                    <SkillButton key={el.id} text={el.text} icon={el.icon} />
                                ))}
                            </Wrap>
                        </VStack>

                        <VStack
                            alignItems="start"
                            border="1px"
                            borderRadius="10px"
                            borderColor={colorMode === "dark" ? "#3f444e" : "#CACBCD"}
                            p={4}>
                            <Text fontWeight="bold">Soft Skills</Text>
                            <Wrap>
                                {soft_skills.map((el) => (
                                    <SkillButton key={el.id} text={el.text} icon={el.icon} />
                                ))}
                            </Wrap>
                        </VStack>
                    </VStack>
                </VStack>
            </motion.div>
        </div >
    )
}

export default Skills
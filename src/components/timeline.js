import React from 'react';
import {
  Box,
  chakra,
  Container,
  Link,
  Text,
  HStack,
  VStack,
  Stack,
  Flex,
  Icon,
  useColorModeValue
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
// Here we have used react-icons package for the icons
import { FaRegNewspaper } from 'react-icons/fa';
import { BsGithub } from 'react-icons/bs';
import { IconType } from 'react-icons';
import { useEffect } from 'react';
const milestones = [
  {
    id: 1,
    categories: ['Internship'],
    title: 'REACT front-end Developer',
    icon: FaRegNewspaper,
    current : "Ongoing",
    description: `Joined POWSTIK, VIT-TBI as front-end developer. Responsible for creating frontend design using Material-UI and REACT.js Framework.`,
    date: 'MARCH , 2023'
  },

  {
    id: 2,
    categories: ['Research Paper'],
    title: 'Automated Test Case Generation Using T5 and GPT-3',
    icon: FaRegNewspaper,
    current : "Ongoing",
    description: `Published a research paper titled : "Automated  Case Generation Using T5 and GPT-3". ICACCS, IEEE 2023 `,
    date: 'February , 2023'
  },
  {
    id: 3,
    categories: ['Freelance'],
    title: 'News portal for Redfm Nepal',
    icon: BsGithub,
    current : "Done",
    description: `Made a news portal using Wordpress CMS for RedFm Nepal, Biratnagar. It is a local Radio FM station,  `,
    date: 'July 30, 2020'
  }
];

const Milestones = () => {
  useEffect(() => {
    document.title = "Experience"
}, [])
  return (
    <Container maxWidth="4xl" >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }
      }>

      <chakra.h3 fontSize="4xl" fontWeight="bold" mb={18} textAlign="center">
        Experience
      </chakra.h3>
      {milestones.map((milestone, index) => (
        <Flex key={index} mb="10px">
          <LineWithDot

          />
          <Card {...milestone} />
        </Flex>
      ))}
      </motion.div>
    </Container>
  );
};

interface CardProps {
  title: string;
  categories: string[];
  description: string;
  icon: IconType;
  date: string;
}

const Card = ({ title, categories, description, icon, date, current }: CardProps) => {
  return (
    <Stack
      direction={{ base: 'column', sm: 'row' }}
      p={{ base: 3, sm: 6 }}
      bg={useColorModeValue('gray.100', 'gray.800')}
      spacing={5}
      rounded="lg"
      alignItems="center"
      pos="relative"
      _before={{
        content: `""`,
        w: '0',
        h: '0',
        borderColor: `transparent ${useColorModeValue('#edf2f6', '#1a202c')} transparent`,
        borderStyle: 'solid',
        borderWidth: '15px 15px 15px 0',
        position: 'absolute',
        left: '-15px',
        display: 'block'
      }}
    >
      <Icon as={icon} w={12} h={12} color="teal.400" />
      <Box>
        <HStack spacing={2} mb={1}>
          {categories.map((cat) => (
            <Text fontSize="sm" key={cat}>
              {cat}
            </Text>
          ))}
        </HStack>
        <VStack spacing={2} mb={3} textAlign="left">
          <chakra.h1
            as={Link}
            _hover={{ color: 'teal.400' }}
            fontSize={{ base: 'md', sm: 'lg' }}
            lineHeight={1.2}
            fontWeight="bold"
            w="100%"
          >
            {title}
          </chakra.h1>
          <Text fontSize="md" noOfLines={2}>
            {description}
            <Text fontsize = "sm" noOfLines={1}>
          Status : {current}
          </Text>
          </Text>

        </VStack>
        <Text fontSize="sm">{date}</Text>
      </Box>
    </Stack>
  );
};

const LineWithDot = () => {
  return (
    <Flex pos="relative" alignItems="center" mr="40px"
    display={{ base: 'none', sm: 'flex' }}

    >
      <chakra.span
        position="absolute"
        left="50%"
        height="calc(100% + 10px)"
        border="1px solid"
        borderColor={useColorModeValue('gray.200', 'gray.700')}
        top="0px"
      ></chakra.span>
      <Box pos="relative" p="10px">
        <Box
          pos="absolute"
          width="100%"
          height="100%"
          bottom="0"
          right="0"
          top="0"
          left="0"
          backgroundSize="cover"
          backgroundRepeat="no-repeat"
          backgroundPosition="center center"
          backgroundColor="rgb(255, 255, 255)"
          borderRadius="100px"
          border="3px solid rgb(4, 180, 180)"
          backgroundImage="none"
          opacity={1}
        ></Box>
      </Box>
    </Flex>
  );
};

export default Milestones;
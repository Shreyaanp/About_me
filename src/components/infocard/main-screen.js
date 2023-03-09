import * as React from 'react';
import {
  Box,
  Text,
  Heading,
  Flex,
  Avatar,
  Link,
  VStack,
  IconButton,
  Divider,
  Fade
} from '@chakra-ui/react';
import { siteConfig } from './site-config';
// Here we have used framer-motion package for animations
import { motion } from 'framer-motion';
import iconimg from '../../images/podium-radius.webp'
const iconProps = {
  variant: 'ghost',
  size: 'lg',
  isRound: true
};

const MainScreen = () => {
  return (
    <VStack spacing={5}>
      <motion.div whileHover={{ y: 5, scale: 1.1 }}>
        <Box boxShadow="xl" _hover={{ boxShadow: 'lg' }} borderRadius="full">
          <Avatar
            _groupHover={{ width: '10rem', height: '10rem' }}
            width =  '9rem'
            height = '9rem'
            src= {iconimg}
          />
        </Box>
      </motion.div>
      <Heading fontSize="xl" fontFamily="body" textTransform="capitalize" noOfLines={2}>
       Shreyaan Pradhan
      </Heading>
      <Text
        color="gray.500"
        fontSize="lg"
        noOfLines={{ base: 3, md: 4 }}
        _groupHover={{ display: 'none' }}
        Transition={{ duration: 0.5 }}
        display="block"
      >
        Full-Stack Developer
      </Text>
      <Fade in>
        <Text
          color="gray.500"
          fontSize="lg"
          noOfLines={{ base: 3, md: 4 }}
          _groupHover={{ display: 'block' , transition: { duration: 0.6}  }}
          display="none"
          transition={{ duration: 0.5 }}
        >
          I'm a Full Stack Developer and an open source enthusiast. I love to learn new things and contribute to the community.
        </Text>
      </Fade>
      <Divider />
      <Flex alignItems="center" justify="center" w="100%">
        <Box textAlign="center"
        >
          {siteConfig.author.accounts.map((sc, index) => (
            <IconButton
              key={index}
              as={Link}
              isExternal
              href={sc.url}
              aria-label={sc.label}
              colorScheme={sc.type}
              icon={sc.icon}
              {...iconProps}

            />
          ))}
        </Box>
      </Flex>
    </VStack>
  );
};

export default MainScreen;
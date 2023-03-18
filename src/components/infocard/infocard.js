import * as React from 'react';
import { Container, Box, HStack, useColorModeValue, Center, Stack, Button } from '@chakra-ui/react';
import MainScreen from './main-screen';
import { useEffect } from 'react';
import { motion } from 'framer-motion';

const Card = () => {
  const bg = useColorModeValue('white', '#2f3244');
  useEffect(() => {
    document.title = "Home"
}, [])
  return (
    <Container maxW="7xl" p={{ base: 2, md: 3 }}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
      <Center>
        <Box
          maxH="850px"
          minH="350px"
          w="345px"
          boxShadow='dark-lg'
          rounded="md"
          p={6}
          overflow="hidden"
          cursor="pointer"
          _hover={{
            transform: 'translateY(-15px)',
            transition: 'all 0.5s ease-in-out',
            boxShadow:'dark-lg' }}
          bg={bg}
          role="group"
        >
          <MainScreen />
          <Stack direction={{ base: 'column', md: 'row' }} spacing={4} justify="center">
                  <Button

                    bg="blue.400"
                    color="white"
                    _hover={{
                      bg: 'blue.500'
                    }}
                    as = "a"
                    href='http://portfolio.shreyaan.codes/'
                    target={'_blank'}
                  >
                    <motion.div
                    whileHover={{ scale: 1.05}}
                    whileTap={{
                      scale: 0.8,
                      borderRadius: "100%"
                    }}
                  >
                    Portfolio page
                    </motion.div>
                  </Button>
                  <Button
                  border = "1px solid "
                  borderColor = "gray.300"
                  as = "a"
                  href='https://sl.shreyaan.codes/2mq3'
                  target={'_blank'}

                  >
                    <motion.div
                    whileHover={{ scale: 1.05}}
                    whileTap={{
                      scale: 0.8,
                      borderRadius: "100%"
                    }}


                  >

                    Resume
                    </motion.div>

                  </Button>
                </Stack>
        </Box>
      </Center>
      </motion.div>
    </Container>
  );
};

export default Card;
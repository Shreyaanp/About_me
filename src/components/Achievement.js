import React from 'react';
import {
  Box,
  chakra,
  Container,
  Text,
  HStack,
  VStack,
  Flex,
  useColorModeValue,
  useBreakpointValue
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import {useState, useEffect} from 'react';
import {Image, Modal, ModalContent, ModalOverlay, ModalBody, ModalCloseButton} from '@chakra-ui/react';
import cognition from '../images/Cognition.webp';
import wehack from '../images/wehack.webp';
import hacktoberfest from '../images/Hacktoberfest.png';
import machinelearning from '../images/machine-learning-udemy.webp';
import python from '../images/python.webp';
import Frontscholar from '../images/front scholarship.jpg';
import Kavach from '../images/kavach.jpg';
import Illumina from '../images/Yantra.jpg';
import Ms from '../images/ms.png';

const milestones = [
  {id: 0,
    date: 'June 05, 2023',
    title: 'Microsoft',
    description: `Microsoft Learn Student Ambassador`,
    image : Ms
  },
  {
    id: 1,
    date: 'June 03, 2023',
    title: 'ILLUMINA hackathon, 2023',
    description: `Won the 1st prize in the ILLUMINA hackathon organized by Institute of Engineers (India) VIT Vellore, with collaboration from OROM corp.`,
    image : Illumina
  },
  {
    id: 2,
    date: 'August 03, 2023',
    title: 'Kavach Cyber security Hackathon',
    description: `Won the 1st prize in the Kavach Cyber security Hackathon organized by VIT Vellore.`,
    image : Kavach
  },
  {
    id: 3,
    date: '2022-2023',
    title: 'Merit Scholarship',
    description: `Awarded by VIT Vellore for academic excellence.`,
    image : Frontscholar
  },
  {
    id: 4,
    date: 'October 10, 2022',
    title: 'Hacktoberfest 2022',
    description: `Open Source Contribution`,
    image : hacktoberfest
  },

  {
    id: 5,
    date: 'August 05, 2022',
    title: 'Cognition',
    description: `Cognition is a 24-hour hackathon organized by VITMAS, VIT Vellore.`
    ,image : cognition
  },
  {
    id: 6,
    date: 'April 07, 2022',
    title: 'We-hack',
    description:
      'Problem Statement : Testcase generation from text conversation.'
      ,image : wehack
  },
  {
    id: 7,
    date: 'MARCH 30, 2022',
    title: 'Machine Learning Practical Workout | 8 Real-World Projects',
    description: `Udemy Course `
    ,image : machinelearning


  },
  {
    id: 8,
    date: 'March 28, 2021',
    title: 'Programming for Everybody',
    description: `an online non-credit course authorized by University of Michigan and offered through Coursera.`
    ,image : python
  }
];

const Milestones = () => {
  useEffect(() => {
    document.title = "Achievements"
}, [])
  const isMobile = useBreakpointValue({ base: true, md: false });
  const isDesktop = useBreakpointValue({ base: false, md: true });

  return (
    <Container maxWidth="7xl" p={{ base: 2, sm: 10 }}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }

      }

      >
      <chakra.h3 fontSize="4xl" fontWeight="bold" mb={5} textAlign="center">
        Achievements
      </chakra.h3>
      {milestones.map((milestone) => (
        <Flex key={milestone.id} mb="10px">
          {/* Desktop view(left card) */}
          {isDesktop && milestone.id % 2 === 0 && (
            <>
              <EmptyCard />
              <LineWithDot />
              <Card {...milestone} />
            </>
          )}

          {/* Mobile view */}
          {isMobile && (
            <>
              <LineWithDot />
              <Card {...milestone} />
            </>
          )}

          {/* Desktop view(right card) */}
          {isDesktop && milestone.id % 2 !== 0 && (
            <>
              <Card {...milestone} />

              <LineWithDot />
              <EmptyCard />
            </>
          )}
        </Flex>
      ))}
      </motion.div>
    </Container>
  );
};

interface CardProps {
  id: number;
  title: string;
  description: string;
  date: string;
}

const Card = ({ id, title, description, date, image }: CardProps) => {
  // For even id show card on left side
  // For odd id show card on right side
  const isEvenId = id % 2 === 0;
  let borderWidthValue = isEvenId ? '15px 15px 15px 0' : '15px 0 15px 15px';
  let leftValue = isEvenId ? '-15px' : 'unset';
  let rightValue = isEvenId ? 'unset' : '-15px';

  const isMobile = useBreakpointValue({ base: true, md: false });
  if (isMobile) {
    leftValue = '-15px';
    rightValue = 'unset';
    borderWidthValue = '15px 15px 15px 0';
  }
  const [showImage, setShowImage] = useState(false);

  return (
    <HStack
      flex={1}
      p={{ base: 3, sm: 6 }}
      bg={useColorModeValue('gray.100', 'gray.800')}
      spacing={5}
      rounded="lg"
      alignItems="center"
      pos="relative"
      onClick={() => setShowImage(true)}
      onMouseLeave={() => setShowImage(false)}
      _hover={{
        cursor: 'pointer',
        bg: useColorModeValue('gray.300', 'gray.500'),
      }}

      _before={{
        content: `""`,
        w: '0',
        h: '0',
        borderColor: `transparent ${useColorModeValue('#edf2f6', '#1a202c')} transparent`,
        borderStyle: 'solid',
        borderWidth: '20px',
        position: 'absolute',
        left: '-10px',
        right: '-10px',
        display: 'block',
      }}
    >
      <Box w="100%" h="fit-content" pos="relative"
                    display={{
                        base: 'none',
                        sm: 'none',
                        md: 'block',
                        lg: 'block',
                      }} >
        <Image src={image} w="100%" h="100%" objectFit="cover"

        />
      </Box>

      {showImage && (
        <Modal isOpen onClose={() => setShowImage(false)} isCentered size = "50%" >
          <ModalOverlay />
          <ModalContent width = {{sm :"100%" , md :"60%",}} padding = {5} >
            <ModalCloseButton />
            <ModalBody>
              <Box>
                <Image src={image} w="100vw" h="fit-content" objectFit="contain" />
              </Box>
            </ModalBody>
          </ModalContent>
        </Modal>
      )}
      <Box>
        <Text fontSize= {{
        base: '16px',
        sm: '12px',
        md: '20px',
        lg: '24px',
        xl: '28px',
      }} color={isEvenId ? 'teal.400' : 'blue.400'}>
          {date}
        </Text>

        <VStack spacing={2} mb={3} textAlign="left">
          <chakra.h1 fontSize={{
        base: '16px',
        sm: '12px',
        md: '20px',
        lg: '24px',
        xl: '28px',
      }}lineHeight={1.2} fontWeight="bold" w="100%">
            {title}
          </chakra.h1>
          <Text fontSize="md">{description}</Text>
        </VStack>
      </Box>
    </HStack>
  );
};

const LineWithDot = () => {
  return (
    <Flex
      pos="relative"
      alignItems="center"
      mr={{ base: '40px', md: '40px' }}
      ml={{ base: '0', md: '40px' }}
    >
      <chakra.span
        position="absolute"
        left="50%"
        height="calc(100% + 10px)"
        border="1px solid"
        borderColor={useColorModeValue('gray.500', 'gray.200')}
        top="0px"
      ></chakra.span>
      <Box pos="relative" p="10px">
        <Box
          pos="absolute"
          top="0"
          left="0"
          bottom="0"
          right="0"
          width="100%"
          height="100%"
          backgroundSize="cover"
          backgroundRepeat="no-repeat"
          backgroundPosition="center center"
          bg={useColorModeValue('gray.600', 'gray.200')}
          borderRadius="100px"
          backgroundImage="none"
          opacity={1}
        ></Box>
      </Box>
    </Flex>
  );
};

const EmptyCard = () => {
  return <Box flex={{ base: 0, md: 1 }} p={{ base: 0, md: 6 }} bg="transparent"></Box>;
};

export default Milestones;
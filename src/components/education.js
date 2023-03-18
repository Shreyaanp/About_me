import {
    Stack,
    Card,
    CardBody,
    Image,
    Heading,
    Text,
    Container,
    useColorModeValue
  } from '@chakra-ui/react';
  // Here we have used react-icons package for the icons
  import dav from '../images/DAV-Public-School-Logo.jpg';
  import vit from '../images/Vellore_Institute_of_Technology_seal_2017.svg.png';
  import dps from '../images/download.jpeg';
  import { useEffect } from 'react';
  import { motion } from 'framer-motion';

  const UserCard = () => {
    const data = [
      {

        percent : "Current running  : 7.5 CGPA",
        avatar: vit,
        class: 'B.Tech in Computer Science and Engineering with specialization in Bioinformatics',
        School : 'Vellore Institute of Technology, Vellore, Tamil Nadu, India'

      },
        {
            percent : "75 % CBSE",
            avatar: dps,
            class: '12th grade',
            School : 'Delhi Public School , BPKIHS'

        },
        {
            percent : "8.8 CGPA CBSE",
            avatar: dav,
            class: '10th grade',
            School : 'Dayanand Anglo Vedic School(DAV), Biratnagar, Nepal'
        },
    ]

    const bgcolour =useColorModeValue(
        '0 4px 6px rgba(160, 174, 192, 0.6)',
        '0 4px 6px rgba(9, 17, 28, 0.4)'
      )
      useEffect(() => {
        document.title = "Education"
    }, [])

    return (

      <Container maxW="5xl">
          <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }

      }

      >
        <Stack
            direction={{ base: 'column', md: 'column' }}
            spacing={{ base: 0, md: 5 }}
            p={{ base: 0, md: 5 }}
            bg={useColorModeValue('white', 'gray.800')}
            rounded={'xl'}
            boxShadow={'lg'}
            overflow={'hidden'}
        >
            {data.map((item) => (
              <Card
              direction={{ base: 'column', sm: 'row' }}
              overflow='hidden'
              variant='outline'
            >
              <Image
                // objectFit='cover'
                h={{ base: '', sm: '40', md: '40' }}

                src={item.avatar}
                p={{ base: 2, md: 5}}
              />

              <Stack>
                <CardBody>
                  <Heading fontSize='xl' fontWeight='bold'>
                    {item.School}
                  </Heading>
                  <Heading fontSize='md' fontWeight='semibold'>
                    {item.class}
                  </Heading>

                  <Text py='2'>
                    {item.percent}
                  </Text>
                </CardBody>
              </Stack>
            </Card>
            )
            )}
        </Stack>
        </motion.div>
      </Container>
    );
  };

  export default UserCard;
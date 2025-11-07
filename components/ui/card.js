import { Box, Button, Text, IconButton, Image, Center } from '@chakra-ui/react'
import React from 'react'
import { RiArrowRightLine } from 'react-icons/ri'


function Card({ data }) {
    return (
        <Box bg='white' borderRadius='5px' padding='15px' h='280px' w='250px' _hover={{
            bg: '#e6e6e6',
            cursor: 'pointer',
        }}>
            <Box h='100%' w='100%' >
                <Box h='50%' w='100%'>
                    <Center> <Image
                        src={data.pathImage}
                        boxSize="100px"
                        fit="cover"
                        alt="paperlessIcon"
                    />
                    </Center>
                </Box>
                <Box h='50%' w='100%' display={'flex'} flexDir={'column'}>
                    <Text fontSize={'16px'} fontWeight={'bold'} color={'black'} mb='3px'>{data.pathName}</Text>
                    <Text fontSize={'12px'} color='#4c4c4c'>{data.pathDesc}</Text>
                    <Button asChild variant={'plain'} color={'black'} fontWeight={'semibold'} _hover={{
                        color: "#b50938"
                    }}> <a href={data.pathLink} target="_blank" rel="noopener noreferrer">Enter </a><RiArrowRightLine /></Button>
                </Box>
            </Box>

        </Box>
    )
}

export default Card
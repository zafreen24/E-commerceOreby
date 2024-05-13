import React from 'react'
import Container from './Container'
import Flex from './Flex'
import Arrivalsitem from './Arrivalsitem'
import { apiData } from './ContextApi'
import {useContext} from 'react'



const Newarrivals = () => {
  let data = useContext(apiData)
      
    
  return (
    <section>
        <Container>
            <h2 className="font-sans text-[36px] font-bold">New Arrivals</h2>
            <Flex className="flex-wrap justify-between">
              {data.map((item)=>(
                 <Arrivalsitem item={item}/>
              ))}
            </Flex>
        </Container>
    </section>
  )
}

export default Newarrivals
import React from 'react'
import { motion } from 'framer-motion'
import Card from '../components/PagesBlog/Card'

const Blog = () => {
   return (
      <motion.div
         className='mt-4 md:mt-12 pb-10'
         initial={{ opacity: 0, x: 100, scale: 0.8 }}
         animate={{ opacity: 1, x: 0, scale: 1 }}
         transition={{
            ease: 'easeInOut',
            scale: {
               type: 'spring',
               stiffness: 300,
               damping: 20,
            },
         }}
      >
         <Card />
      </motion.div>
   )
}

export default Blog
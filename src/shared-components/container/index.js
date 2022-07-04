import React from 'react'
import styles from './index.module.css'

function Container (props) {
  const { className, children } = props
  return (
    <div {...props} className={`${styles.container} ${className || ''}`}>
      {
        children
      }
    </div>
  )
}

export default Container

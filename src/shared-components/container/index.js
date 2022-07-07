import React from 'react'
import styles from './index.module.css'

function Container (props) {
  const { className, children, narrow } = props
  return (
    <div {...props} className={`${styles.container} ${narrow ? styles['container-narrow'] : ''} ${className || ''}`}>
      {
        children
      }
    </div>
  )
}

export default Container

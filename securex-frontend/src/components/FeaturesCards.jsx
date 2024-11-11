import React from 'react'

const FeaturesCards = (props) => {
  return (
    <>
    <a href={`#${props.id}`} className="feature-link" style={{ textDecoration: 'none' }}>
                <div className="feature-card">
                    <div className="icon">{props.icon}</div>
                    <h6>{props.title}</h6>
                    <p>{props.description}</p>
                </div>
    </a>

    
    </>
  )
}

export default FeaturesCards
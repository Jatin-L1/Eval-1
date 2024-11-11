import React from 'react'

const FeaturesContent = (props) => {
  return (
    <div id={props.div_id}>
        <div className="features_content">
            <div className="left_content">
                <h1>{props.h1}</h1>
                <p id="under_heading">{props.under_heading}</p>
            </div>
            <div className="right_content">
                <img src={props.right_img} alt="Image" />
            </div>
        </div>
            <div className="below_features_content">
                <div className="no_1">
                    <h5>{props.no_1_h5}</h5>
                    <p>{props.no_1_p}</p>
                </div>
                <div className="no_2">
                    <h5>{props.no_2_h5}</h5>
                    <p>{props.no_2_p}</p>
                </div>
                <div className="no_3">
                    <h5>{props.no_3_h5}</h5>
                    <p>{props.no_3_p}</p>
                </div>
            </div>
        
    </div>
  )
}

export default FeaturesContent
import React from 'react';
const content = (props) =>{
    return (
        <div className="feedback__content">
                                <blockquote>
                                    <span>{props.content}</span>
                                </blockquote>
                                <figcaption className="figcaption">
                                    <div className="figcaption__image">
                                    <picture>
                                        <source srcSet={props.src1}type="image/webp"/>
                                        <source srcSet={props.src2} type="image/jpeg"/>
                                        <img src={props.img} className="img" alt=""/>
                                    </picture>
                                    </div>
                                    <div className="figcaption__content">
                                        <div className="figcaption-name">{props.name}</div>
                                        <cite>{props.comment}</cite>
                                    </div>
                                </figcaption>
                            </div>
    )
}
export default content
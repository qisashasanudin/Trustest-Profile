import React from "react"
import { motion } from "framer-motion"

const containerStyle = {
    position: "relative",
    width: "3rem",
    height: "3rem",
};
const circleStyle = {
    display: "block",
    width: "3rem",
    height: "3rem",
    border: "0.5rem solid #e9e9e9",
    borderTop: "0.5rem solid #3498db",
    borderRadius: "50%",
    position: "absolute",
    boxSizing: "border-box",
    top: 0,
    left: 0
};

const spinTransition = {
    loop: Infinity,
    duration: 1,
    ease: "linear"
}

export default function CircleLoader() {
    return (
        <div style={containerStyle}>
            <motion.span style={circleStyle} animate={{rotate: 360}} transition={spinTransition }/>
        </div>
    )
}
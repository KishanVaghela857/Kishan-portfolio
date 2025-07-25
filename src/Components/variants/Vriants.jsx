const Variants = (direction, delay) => {
    return {
        hidden: {
            y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
            x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
            opacity: 0
        },
        show: {
            y: 0,
            x: 0,
            opacity: 1,
            transition: {
                type: "spring",
                duration: 1.0,
                delay: delay,
                ease: [0.25, 0.1, 0.25, 1],
                stiffness: 100,
                damping: 10
            }
        }
    };
};

export default Variants;
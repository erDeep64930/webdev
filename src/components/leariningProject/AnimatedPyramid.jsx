

const AnimatedPyramid = () => {

    return (
        <div className="mt-30 ">
            <h1 className="text-4xl bg-gradient-to-r from-rose-500 via-pink-500 via-blue-300 bg-clip-text text-transparent text-center mb-8 rotateX-[-20deg] relative">This is animated text with animated pyramid</h1>
            <div className="block relative mx-auto w-full h-full animate-pyramid">
                <div className="clip-path h-[200px] w-[200px] top-0 left-0 mx-auto bg-gradient-to-t from-pink-500 via-red-600 to-yellow-500 transform-origin-[center] rotateZ-[-30deg] rotateY-[90deg]"></div>
                <div className="clip-path h-[200px] w-[200px] top-0 left-0 mx-auto bg-gradient-to-t from-pink-500 via-red-600 to-yellow-500 transform-origin-[center] rotateZ-[30deg] rotateY-[90deg]"></div>
                <div className="clip-path h-[200px] w-[200px] top-0 left-0 mx-auto bg-gradient-to-t from-pink-500 via-red-600 to-yellow-500 transform-origin-[center] rotateX-[-30deg]"></div>
                <div className="clip-path h-[200px] w-[200px] top-0 left-0 mx-auto bg-gradient-to-t from-pink-500 via-red-600 to-yellow-500 transform-origin-[center] rotateX-[30deg]"></div>

            </div>
        </div>
    )
}

export default AnimatedPyramid
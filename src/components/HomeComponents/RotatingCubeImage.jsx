import "./RotatingCubeImage.css";

const RotatingCubeImage = () => {
    return (
        <div className="flex justify-center items-center top-[50%] left-[50%]">
            <div className="cube-wrap">
                <div className="box">
                    <div className="single-box side-back"></div>
                    <div className="single-box side-top"></div>
                    <div className="single-box side-bottom"></div>
                    <div className="single-box side-right"></div>
                    <div className="single-box side-left"></div>
                    <div className="single-box side-front"></div>
                </div>
            </div>

        </div>
    )
}

export default RotatingCubeImage
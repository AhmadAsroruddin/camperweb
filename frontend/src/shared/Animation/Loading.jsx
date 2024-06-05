import Lottie from "lottie-react";
import animation from '../../assets/animation/loading-animation.json';

function Loading() {
    return(
        <div className="flex items-center justify-center my-5">
            <span> {/* Adjust width and height */}
                <Lottie animationData={animation} />
            </span>
        </div>
    );
}

export default Loading;

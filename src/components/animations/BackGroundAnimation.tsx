import Lottie from "lottie-react";
import animationData from "../../assets/lotties/background-sparkles.json";
import whiteAnimationData from "../../assets/lotties/white-background-sparkles.json"

interface BackGroundAnimationProps{
  darkMode: boolean;
}
export default function BackGroundAnimation({darkMode}:BackGroundAnimationProps) {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-30">
    
      <div className="absolute top-[20%] left-[70%] w-[400px] h-[400px] -translate-x-1/2 -translate-y-1/2">
        <Lottie animationData={darkMode? whiteAnimationData : animationData} loop autoplay />
      </div>

    </div>
  );
}
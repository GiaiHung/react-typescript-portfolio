import Lottie, { LottieRefCurrentProps } from "lottie-react";
import { useEffect, useMemo, useRef } from "react";

interface IProps {
    animationPath: unknown,
    width?: string
}

const AnimationLottie = (props: IProps) => {
    const { animationPath, width = "95%" } = props;

    const lottieRef = useRef<LottieRefCurrentProps>(null);

    const defaultOptions = useMemo(
        () => {
            return {
                loop: true,
                autoplay: true,
                animationData: animationPath,
                style: {
                    width
                },
                lottieRef: lottieRef
            }
        },
        [animationPath, width]
    );

    useEffect(() => {
        return () => {
            if (lottieRef && lottieRef.current) {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                return lottieRef.current.destroy();
            }
        };
    }, [])

    return (
        <Lottie
            {...defaultOptions} />
    );
};

export default AnimationLottie;
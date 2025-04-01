import { useCallback, useEffect, useRef } from 'react';
import ReactCanvasConfetti from 'react-canvas-confetti';

export default function Confetti() {
  const refAnimationInstance = useRef(null);

  // Get the instance of the canvas confetti
  const getInstance = useCallback(instance => {
    refAnimationInstance.current = instance;
  }, []);

  // Function to make the confetti shoot
  const makeShot = useCallback((particleRatio, opts) => {
    refAnimationInstance.current &&
      refAnimationInstance.current({
        ...opts,
        origin: { y: 0.7 },
        particleCount: Math.floor(200 * particleRatio)
      });
  }, []);

  // Fire the confetti animation when component is mounted
  useEffect(() => {
    if (refAnimationInstance.current) {
      makeShot(0.25, {
        spread: 26,
        startVelocity: 55
      });

      makeShot(0.2, {
        spread: 60
      });

      makeShot(0.35, {
        spread: 100,
        decay: 0.91,
        scalar: 0.8
      });

      makeShot(0.1, {
        spread: 120,
        startVelocity: 25,
        decay: 0.92,
        scalar: 1.2
      });

      makeShot(0.1, {
        spread: 120,
        startVelocity: 45
      });
    }
  }, [makeShot]); // Run when Confetti component is rendered

  return (
    <ReactCanvasConfetti
      refConfetti={getInstance}
      style={{
        position: 'fixed',
        pointerEvents: 'none',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0
      }}
    />
  );
}

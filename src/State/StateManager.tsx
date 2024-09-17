import { SetStateAction, useState } from 'react';

const StateManager = (initialStep = 1) => {
  const [currentStep, setCurrentStep] = useState(initialStep);

  const handleNext = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const setStep = (step: SetStateAction<number>) => {
    setCurrentStep(step);
  };

  return {
    currentStep,
    handleNext,
    handleBack,
    setStep,
  };
};

export default StateManager;

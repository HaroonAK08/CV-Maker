import { useState } from 'react';

const StateManager = (initialStep = 1) => {
  const [currentStep, setCurrentStep] = useState(initialStep);

  const handleNext = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  return {
    currentStep,
    handleNext,
    handleBack,
  };
};

export default StateManager;

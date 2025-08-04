import { createContext, useState } from 'react';

export const StepperCheckoutContext = createContext();

export const StepperCheckoutProvider = ({ children }) => {
    const [currentStep, setCurrentStep] = useState(1);

    return (
        <StepperCheckoutContext.Provider value={{ currentStep, setCurrentStep }}>{children}</StepperCheckoutContext.Provider>
    );
};
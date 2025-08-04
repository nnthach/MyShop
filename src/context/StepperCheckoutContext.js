import { createContext, useState } from 'react';

export const StepperCheckoutContext = createContext();

export const StepperCheckoutProvider = ({ children }) => {
    const [currentStep, setCurrentStep] = useState(1);
    const [methodPayment, setMethodPayment] = useState('');

    return (
        <StepperCheckoutContext.Provider value={{ currentStep, setCurrentStep, methodPayment, setMethodPayment }}>
            {children}
        </StepperCheckoutContext.Provider>
    );
};

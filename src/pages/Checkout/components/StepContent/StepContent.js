import { useContext } from 'react';
import { StepperCheckoutContext } from '~/context/StepperCheckoutContext';
import StepOne from '~/pages/Checkout/components/StepContent/StepOne/StepOne';
import StepThree from '~/pages/Checkout/components/StepContent/StepThree/StepThree';
import StepTwo from '~/pages/Checkout/components/StepContent/StepTwo/StepTwo';

function StepContent() {
    const { currentStep } = useContext(StepperCheckoutContext);

    const handleRenderContent = () => {
        switch (currentStep) {
            case 1:
                return <StepOne />;
            case 2:
                return <StepTwo />;
            case 3:
                return <StepThree />;
            default:
                return null;
        }
    };

    return <>{handleRenderContent()}</>;
}

export default StepContent;

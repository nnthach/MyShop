import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FormInputCustom from '~/components/FormInputCustom/FormInputCustom';
import { StepperCheckoutContext } from '~/context/StepperCheckoutContext';
import { createOrderAPI } from '~/service/orderService';

function StepOne() {
    const ADDRESS_BASE_URL = 'https://countriesnow.space/api/v0.1';

    const navigate = useNavigate();

    const { setCurrentStep } = useContext(StepperCheckoutContext);

    const [selectedCountry, setSelectedCountry] = useState('');
    const [selectedState, setSelectedState] = useState('');
    const [countries, setCountries] = useState([]);
    const [cities, setCities] = useState([]);
    const [states, setStates] = useState([]);
    const [isLoadingCountry, setIsLoadingCountry] = useState(false);
    const [isLoadingState, setIsLoadingState] = useState(false);
    const [isLoadingCity, setIsLoadingCity] = useState(false);
    const [deliveryForm, setDeliveryForm] = useState({
        firstName: '',
        lastName: '',
        companyName: '',
        country: selectedCountry,
        state: selectedState,
        city: '',
        streetAddress: '',
        detailHome: '',
        zipCode: '',
        phone: '',
        email: '',
        note: '',
    });

    const detailHomeData = [
        {
            value: 'Home',
            label: 'Home',
        },
        {
            value: 'Apartment',
            label: 'Apartment',
        },
        {
            value: 'Tower',
            label: 'Tower',
        },
        {
            value: 'Other',
            label: 'Other',
        },
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDeliveryForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            //create order
            console.log('data delivery', deliveryForm);
            const res = await createOrderAPI(deliveryForm);
            console.log('create order res', res.data);
            setCurrentStep(2);
            navigate(`/checkout?id=${res?.data?.data._id}&total=${res.data.data.totalAmount}`);
        } catch (error) {
            console.log('create order err', error);
        }
    };

    // fetch country
    useEffect(() => {
        const handleGetAllCountry = async () => {
            setIsLoadingCountry(true);
            try {
                const res = await axios.get(`${ADDRESS_BASE_URL}/countries/iso`);
                setCountries(
                    res.data.data.map((c) => ({
                        value: c.name,
                        label: c.name,
                    })),
                );
                setIsLoadingCountry(false);
            } catch (error) {
                console.log('get country err', error);
                setIsLoadingCountry(false);
            }
        };
        handleGetAllCountry();
    }, []);

    // fetch city
    useEffect(() => {
        if (!selectedCountry) return;

        const handleGetAllState = async () => {
            setIsLoadingState(true);
            try {
                const res = await axios.post(`${ADDRESS_BASE_URL}/countries/states`, { country: selectedCountry });
                setStates(
                    res.data.data.states.map((s) => ({
                        value: s.name,
                        label: s.name,
                    })),
                );
                setIsLoadingState(false);
            } catch (error) {
                console.log('get states err', error);
                setIsLoadingState(false);
            }
        };
        handleGetAllState();
    }, [selectedCountry]);

    // fetch state
    useEffect(() => {
        if (!selectedState) return;

        const handleGetAllCity = async () => {
            setIsLoadingCity(true);
            try {
                const res = await axios.post(`${ADDRESS_BASE_URL}/countries/state/cities`, {
                    country: selectedCountry,
                    state: selectedState,
                });
                setCities(
                    res.data.data.map((c) => ({
                        value: c,
                        label: c,
                    })),
                );
                setIsLoadingCity(false);
            } catch (error) {
                console.log('get city err', error);
                setIsLoadingCity(false);
            }
        };

        handleGetAllCity();
    }, [selectedState]);

    if (isLoadingCountry) {
        return (
            <div className="flex items-center justify-center w-full py-10">
                <span className="text-gray-500">Loading...</span>
            </div>
        );
    }
    return (
        <div className="w-full min-h-[100px] bg-white p-5">
            <form className="flex flex-col gap-4" onSubmit={onSubmit}>
                <div className="flex flex-row justify-between gap-3">
                    <FormInputCustom
                        label={'First Name'}
                        isRequire
                        type={'text'}
                        name="firstName"
                        onChange={(e) => {
                            handleChange(e);
                        }}
                    />
                    <FormInputCustom
                        label={'Last Name'}
                        isRequire
                        type={'text'}
                        name="lastName"
                        onChange={(e) => {
                            handleChange(e);
                        }}
                    />
                </div>
                <FormInputCustom
                    label={'Company Name'}
                    type={'text'}
                    name="companyName"
                    onChange={(e) => {
                        handleChange(e);
                    }}
                />
                <FormInputCustom
                    label={'Country'}
                    isRequire
                    type={'select'}
                    name="country"
                    placeholder={'Select Country'}
                    data={countries}
                    value={selectedCountry}
                    onChange={(e) => {
                        setSelectedCountry(e.target.value);
                        handleChange(e);
                    }}
                />
                <FormInputCustom
                    label={'State'}
                    isRequire
                    type={'select'}
                    data={states}
                    name="state"
                    placeholder={isLoadingState ? 'Waiting...' : 'Select State'}
                    value={selectedState}
                    onChange={(e) => {
                        setSelectedState(e.target.value);
                        handleChange(e);
                    }}
                />
                <FormInputCustom
                    label={'City'}
                    isRequire
                    type={'select'}
                    data={cities}
                    name="city"
                    placeholder={isLoadingCity ? 'Waiting...' : 'Select City'}
                    onChange={(e) => {
                        handleChange(e);
                    }}
                />
                <FormInputCustom
                    label={'Street Address'}
                    isRequire
                    type={'text'}
                    placeholder={'Home number and street name'}
                    name="streetAddress"
                    onChange={(e) => {
                        handleChange(e);
                    }}
                />
                <FormInputCustom
                    label={'Detail Home'}
                    type={'select'}
                    isRequire
                    data={detailHomeData}
                    placeholder={'Select Type'}
                    name="detailHome"
                    onChange={(e) => {
                        handleChange(e);
                    }}
                />
                <FormInputCustom
                    label={'ZIP Code'}
                    isRequire
                    type={'text'}
                    placeholder={'ZIP Code'}
                    name="zipCode"
                    onChange={(e) => {
                        handleChange(e);
                    }}
                />
                <FormInputCustom
                    label={'Phone'}
                    isRequire
                    type={'text'}
                    name="phone"
                    onChange={(e) => {
                        handleChange(e);
                    }}
                />
                <FormInputCustom
                    label={'Email Address'}
                    isRequire
                    type={'text'}
                    name="email"
                    onChange={(e) => {
                        handleChange(e);
                    }}
                />
                <FormInputCustom
                    label={'Order Note'}
                    type={'textarea'}
                    placeholder={'Note anything you want'}
                    name="note"
                    onChange={(e) => {
                        handleChange(e);
                    }}
                />

                <div className="text-right mt-3">
                    <button className="bg-black text-white py-1 pb-2 px-2 rounded-lg">Process to Payment</button>
                </div>
            </form>
        </div>
    );
}

export default StepOne;

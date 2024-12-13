import { useState } from 'react';
import { FaFacebookF, FaSquareInstagram } from 'react-icons/fa6';
import { IoIosArrowDown } from 'react-icons/io';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
    const [openName, setOpenName] = useState(null);
    const sectionData = [
        {
            title: 'About Us',
            contents: [
                {
                    type: 'para',
                    value: 'Maverik Studio, established in 2018, is dedicated to offering high-quality, stylish, and versatile fashion products. We create designs that are both fashionable and practical, catering to diverse lifestyles and needs. At Maverik Studio, we aim to provide an exceptional shopping experience with modern, sustainable fashion.',
                },
            ],
            icon: [
                {
                    value: <FaFacebookF />,
                    link: 'https://www.facebook.com/profile.php?id=100049210788287',
                },
                {
                    value: <FaSquareInstagram />,
                    link: 'https://www.instagram.com/maverik.studio/',
                },
            ],
        },

        {
            title: 'Services',
            contents: [
                {
                    type: 'link',
                    value: 'Return Policy',
                    link: '/products/all',
                },
                {
                    type: 'link',
                    value: 'Shipping Policy',
                    link: '/products/all',
                },
                {
                    type: 'link',
                    value: 'Payment Guide',
                    link: '/products/all',
                },
            ],
        },

        {
            title: 'Contact Us',
            contents: [
                {
                    type: 'text',
                    value: 'Address: 230/1 Pasteur, Vo Thi Sau Ward, District 3, Ho Chi Minh City',
                },
                {
                    type: 'text',
                    value: 'Email: maverikstudio@gmail.com',
                },
                {
                    type: 'text',
                    value: 'Phone: 0901234567',
                },
            ],
        },

        {
            title: 'Our Stores',
            contents: [
                {
                    type: 'text',
                    value: 'Store 1: 230/1 Pasteur, Vo Thi Sau Ward, District 3, Ho Chi Minh City',
                },
                {
                    type: 'text',
                    value: 'Store 2: Aqua 4 Vinhome Golden River, District 1, Ho Chi Minh City',
                },
            ],
        },
    ];

    const handleToggleOpenName = (name) => {
        setOpenName((prev) => (prev === name ? null : name));
    };

    return (
        <div className="border-t border-gray-300 bg-white text-black sm:py-8">
            <div className="grid sm:grid-cols-4 sm:gap-16 sm:p-5 sm:px-10 sm:pb-12">
                {sectionData.map((section) => (
                    <div
                        key={section.title}
                        className="p-2 px-4 sm:px-0 sm:p-0 border-b border-gray-300 sm:border-none"
                    >
                        {/*Heading */}
                        <div className="flex justify-between items-center py-4 sm:py-0">
                            <h4 className="text-[18px] sm:text-[26px] font-semibold sm:mb-4">{section.title}</h4>

                            <IoIosArrowDown
                                onClick={() => {
                                    handleToggleOpenName(section.title);
                                }}
                                className={`w-[20px] h-[20px] sm:hidden transition-all duration-300 ${
                                    openName === section.title ? 'rotate-180' : ''
                                }`}
                            />
                        </div>

                        {/*Content */}
                        <div className={`${openName === section.title ? 'block py-2 slide-down' : 'hidden'} sm:block`}>
                            {section.contents.map((content, index) =>
                                content.type === 'link' ? (
                                    <Link key={index} to={content.link} className="mb-2 block">
                                        {content.value}
                                    </Link>
                                ) : (
                                    <p key={index} className={`${content.type === 'para' ? 'text-justify' : ''} mb-2`}>
                                        {content.value}
                                    </p>
                                ),
                            )}

                            {section.icon && (
                                <div className="flex mt-4">
                                    {section.icon.map((icon, index) => (
                                        <Link
                                            key={index}
                                            to={icon.link}
                                            className="mr-4 flex items-center justify-center w-[30px] h-[30px] bg-gray-300 text-black 
                                            hover:border-4 hover:border-gray-300 hover:bg-black hover:text-white hover:scale-125 transition-transform duration-200 ease-in-out  
                                            rounded-full text-[18px] cursor-pointer"
                                        >
                                            {icon.value}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            <div className='border-t border-gray-300 text-center py-4 sm:pt-8'>Copyright © 2024 MAVERIK STUDIO</div>
        </div>
    );
}

export default Footer;

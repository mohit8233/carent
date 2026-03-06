import React, { useEffect, useState } from 'react'
import { signupStyles } from '../assets/dummyStyles'
import { FaArrowLeft } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import logo from '../assets/logocar.png'



const SignUp = () => {

    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });
    const [showPassword, setShowPassword] = useState(false);
    const [acceptedTerms, setAcceptedTerms] = useState(false)
    const [isActive, setIsActive] = useState(false)

    useEffect(() => {
        setIsActive(true);
    }, []);

    return (
        <div className={signupStyles.pageContainer}>
            {/* Animated Background */}
            <div className={signupStyles.animatedBackground.base}>
                <div
                    className={`${signupStyles.animatedBackground.orb1} ${isActive
                            ? "translate-x-10 sm:translate-x-20 translate-y-5 sm:translate-y-10"
                            : ""
                        }`}
                ></div>
                <div
                    className={`${signupStyles.animatedBackground.orb2} ${isActive
                            ? "-translate-x-10 sm:-translate-x-20 -translate-y-5 sm:-translate-y-10"
                            : ""
                        }`}
                ></div>
                <div
                    className={`${signupStyles.animatedBackground.orb3} ${isActive
                            ? "-translate-x-5 sm:-translate-x-10 translate-y-10 sm:translate-y-20"
                            : ""
                        }`}
                ></div>
            </div>
            <a href="/" className={signupStyles.backButton}>
                <FaArrowLeft className='text-xs sm:text-sm group-hover:translate-x-1 transition-transform' />
                <span className='font-medium text-xs sm:text-sm'>Back to Home</span>
            </a>
            <div className={`${signupStyles.signupCard.container} ${isActive ? 'scale-100  opacity-100' : 'scale-90 opacity-0'}`}>
                <div className={signupStyles.signupCard.card}
                    style={{
                        boxShadow: '0 15px 35px rgba(0,0,0,0.2)',
                        borderRadius: "24px",
                    }}>
                    <div className={signupStyles.signupCard.decor1} />
                    <div className={signupStyles.signupCard.decor1} />

                    <div className={signupStyles.signupCard.headerContainer}>
                        <div className={signupStyles.signupCard.logoContainer}>
                            <div className={signupStyles.signupCard.logoText}>
                                <img src={logo} alt="logo" className='h[1.2em] w-auto block' style={{
                                    display: "block",
                                    
                                }} />
                                <span className='font-bold tracking-wider text-white mt-1'>ZENTRA</span>
                            </div>
                        </div>
                        <h1 className={signupStyles.signupCard.title}>Join PremiumDrive</h1>
                        <p className={signupStyles.signupCard.subtitle}>
                            Create your exclusive account
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp
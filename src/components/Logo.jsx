import React, { useEffect, useState } from 'react'

export default function Logo() {
    const [showLogo, setShowLogo] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setShowLogo(true);
            } else {
                setShowLogo(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
  return (
        <div>
            <img className={showLogo ? 'mainlogo show-logo' : 'mainlogo'} src='https://res.cloudinary.com/dzvvpbnai/image/upload/v1714814573/Screenshot_2024-05-04_144813-removebg-preview_fm8gkp.png' />
        </div>
  )
}

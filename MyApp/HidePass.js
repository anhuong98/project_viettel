import React, { useState } from 'react'
export const useTogglePasswordVisibility = () => {
    const [rightIcon, setRightIcon] = useState('eye');
    const [passVisibility, setPassVisibility] = useState(true);
    const handledPasswordVisibilit = () => {
        if (rightIcon === 'eye') {
            setRightIcon('eye-slash');
            setPassVisibility(!passVisibility)
        } else if (rightIcon === 'eye-slash') {
            setRightIcon('eye');
            setPassVisibility(!passVisibility);
        }
    };
    return {
        passVisibility,
        rightIcon,
        handledPasswordVisibilit
    };
}

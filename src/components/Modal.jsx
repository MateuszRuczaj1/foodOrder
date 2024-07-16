import React, { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
export default function Modal({ children, open }) {
    const dialog = useRef()
    useEffect(() => {
        const modal = dialog.current
        if (open) {
            modal.showModal()
        }
        return () => modal.close()
    }, [open])
    return createPortal(
        <dialog className='modal' ref={dialog}>
            {children}
        </dialog>,
        document.querySelector("#modal")
    )
}


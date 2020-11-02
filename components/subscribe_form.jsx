import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const SubscribeForm = () => {
    const { handleSubmit, register, reset, setError, errors } = useForm();

    const [successResponse, setSuccessResponse] = useState(null);

    const onSubmit = async (data) => {
        const { email } = data;
        const res = await fetch('/api/subscribe', {
            body: JSON.stringify({
                email
            }),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        });

        // check error
        const { error } = await res.json();
        if (error) {
            setError('email', {
                type: "manual",
                message: `Unexpected error: ${error}`
            });
            return;
        }

        // success
        reset();
        setSuccessResponse('Thanks! 🎉 You are now subscribed.');
    };

    const onUnsubscribe = async (data) => {
        const { email } = data;
        const res = await fetch('/api/unsubscribe', {
            body: JSON.stringify({
                email
            }),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        });

        // check error
        const { error } = await res.json();
        if (error) {
            setError('email', {
                type: "manual",
                message: `Unexpected error: ${error}`
            });
            return;
        }

        // success
        reset();
        setSuccessResponse('Cool! 🎉 You have been unsubscribed');
    };

    return (
        <form>
            <div>
                <label htmlFor='email' className='text-sm'> 
                    Email:
                    <input 
                        className={(errors.email) ? 'border-red-500' : ''} 
                        id='email'
                        name="email"
                        placeholder="email@gmail.com"
                        onChange={() => setSuccessResponse(null)}
                        ref={register({ 
                            required: "Error: Give me the email 😡! please",
                            pattern: {
                                value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                                message: "Entered value does not match email format"
                            },
                        })} 
                        type='email'
                    />
                </label>
                <button type="submit" onClick={handleSubmit(onSubmit)}>{'✨ Subscribe 💌'}</button>
                <button type="submit" onClick={handleSubmit(onUnsubscribe)}>{'✨ Unsubscribe 💌'}</button>
            </div>
            { (errors.email) && (
                <span className='text-red-500 text-sm'>
                    {errors.email.message}
                </span>
            )}
            { (successResponse) && (
                <span className='text-green-500 text-sm'>
                    {successResponse}
                </span>
            )}
        </form>
    );
}

export default SubscribeForm;
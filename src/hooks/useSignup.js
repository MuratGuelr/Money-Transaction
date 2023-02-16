import { projectAuth } from '../firebase/config'
import { useAuthContext } from './useAuthContext'
import { useEffect, useState } from 'react'

export const useSignup = () => {
    const [isCanceled, setIsCancaled] = useState(false)
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState(null)
    const { dispatch } = useAuthContext()

    const signup = async (displayName, email, password, ) => {
        setError(null)
        setIsPending(true)

        try {
            // signup user
            const res = await projectAuth.createUserWithEmailAndPassword(email, password)
            

            if (!res) {
                throw new Error('Could not complete signup!')
            }

            // add username to user
            await res.user.updateProfile({ displayName })

            // dispatch login action
            dispatch({ type: 'LOGIN', payload: res.user })

            if(!isCanceled){
            setIsPending(false)
            setError(null)
            }

        }
        catch (err) {
                if(!isCanceled){
                console.log(err.message)
                setError(err.message)
                setIsPending(false)
            }
        }
        
    }

    useEffect(() => {
        return () => setIsCancaled(true)
    }, [])

    return { error, isPending, signup }

}
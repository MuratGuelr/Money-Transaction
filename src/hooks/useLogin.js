import { useEffect, useState } from 'react'
import { projectAuth } from '../firebase/config'
import { useAuthContext } from './useAuthContext'

export const useLogin = () => {
    const [isCanceled, setIsCancaled] = useState(false)
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const { dispatch } = useAuthContext()

    const login = async (email, password) => {
        setError(null)
        setIsPending(true)

        // sign the user out
        try {
            const res = await projectAuth.signInWithEmailAndPassword(email, password)

            // dispatch login action
            dispatch({type: 'LOGIN', payload: res.user})

            // update state
            if(!isCanceled){
            setIsPending(false)
            setError(null)
            }

        } catch (err) {
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

    return { login , error, isPending }
}
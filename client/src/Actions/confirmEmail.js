import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import {showErrMsg, showSuccessMsg} from '../registration/notification/notification'

function ConfirmEmail() {
    const {auth_token} = useParams()
    const [err, setErr] = useState('')
    const [success, setSuccess] = useState('')

    useEffect(() => {
        if(auth_token){
            const confirmEmail = async () => {
                try {
                    const res = await axios.post('/users/activate', {auth_token})
                    setSuccess(res.data.msg)
                } catch (err) {
                    err.response.data.msg && setErr(err.response.data.msg)
                }
            }
            confirmEmail()
        }
    },[auth_token])

    return (
        <div className="active_page container">
            <br/>
            {err && showErrMsg(err)}
            {success && showSuccessMsg(success)}
            <br/> <br/> <br/> <br/> <br/> <br/> <br/>
            <br/> <br/> <br/> <br/>
        </div>
    )
}

export default ConfirmEmail

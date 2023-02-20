import React, {useState, useEffect} from 'react'
import toast from 'react-hot-toast';
import saveEmail from 'services/saveEmail';
import { validateEmail } from 'services/validation';

const ExitIntentModal = ({show, setShow}) => {

    const [email, setEmail] = useState('')
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        if(error) setError(false)
    }, [email])
    

    const submitResponse = async (e) => {
        e.preventDefault();
        try{
            if(!validateEmail(email)) {
                setError(true);
                return;
            }
            setLoading(true);
            let formdata = new FormData()
            formdata.append('source', 'exit-popup')
            formdata.append('email', email)
            await saveEmail(formdata);
            toast.success("Thank you for your submission. We will get in touch shortly!")
            setLoading(false)
        } catch(err){
            setLoading(false)
            console.log(err)
        }
    }
    

    return (
    <div class={`modal fade ${show ? 'show': ''}`} style = {{display: show ? 'block': 'none', background: 'rgba(1, 1, 1, 0.6'}} onClick={()=>setShow(false)}>
        <div class="modal-dialog modal-dialog-centered modal-lg" role="document" onClick={(e) => {
            e.stopPropagation()
        }}>
            <div class="modal-content p-5 text-center">
                <button  class="btn-close btn-close-model" onClick={() => setShow(false)}
                ><i class='ai-cross-alt pb-1'></i></button>
                <div class='h3 mt-4'>Join our community</div>
                <div class='text-white fs-lg'>
                We’re building a community of web3 growth leaders. Join us today to get a free trial & receive an exclusive invite to our marketing workshops.
                </div>
                <form class="subscription-form validate px-4 mt-5 mb-4"  style={{maxWidth: '500px'}}>
                    <div class="input-group">
                        <span class="input-group-text">
                            <i class="ai-mail"></i>
                        </span>
                        <input 
                            class={`form-control ${error && 'is-invalid'}`}
                            name="email" 
                            placeholder="Enter your email" 
                            value = {email}
                            onChange = {e => setEmail(e.target.value)}
                        />
                        <button 
                            class="btn btn-primary" 
                            type="submit" 
                            name="subscribe"
                            onClick={(e) => submitResponse(e)}
                        >
                            {loading && <span class='spinner-border spinner-border-sm me-2'></span>}
                            Subscribe*
                        </button>
                    </div>

                </form>
            </div>
        </div>
    </div>

  )
}

export default ExitIntentModal
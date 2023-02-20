import React, {useState, useEffect} from 'react'
import toast from 'react-hot-toast';
import saveData from 'services/saveEmail';
import { validateEmail } from 'services/validation';

const CallToAction = () => {

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
            formdata.append('source', 'crm3-page')
            formdata.append('email', email)
            await saveData(formdata);
            toast.success("Thank you for your submission. We will get in touch shortly!")
            setLoading(false)
        } catch(err){
            setLoading(false)
            console.log(err)
        }
    }


    return (
    <section class="bg-primary dark-mode py-5">
        <div class="container pt-lg-2 pt-xl-4 pt-xxl-5 pb-1 pb-sm-3">
            <div class="row pt-sm-3 pt-md-4">
                <div class="col-md-6 col-xl-5 offset-xl-1">
                    <h2 class="display-5">Get a free trial of Web3’s first CRM for marketing & analytics</h2>
                </div>
                <div class="col-md-6 col-lg-5 col-xl-4 offset-lg-1">
                    <p class=" pb-4 mb-2 mb-lg-3 lead">Partner with us for your marketing while you spend time hacking the future of the decentralized Web. LFG. 🚀</p>
                    <div class="input-group">
                        <span class="input-group-text text-muted">
                            <i class="ai-mail"></i></span>
                            <input 
                                class={`form-control ${error && 'is-invalid'}`}
                                name="email" 
                                placeholder="Enter your email" 
                                value = {email}
                                onChange = {e => setEmail(e.target.value)}
                            />
                            <button 
                                class="btn btn-warning" 
                                onClick={(e) => submitResponse(e)}
                            >
                                {loading && <span class='spinner-border spinner-border-sm me-2'></span>}
                                Book a call
                            </button>
                        </div>
                    </div>
                </div>
                <div class="d-none d-md-block text-center mt-n5">
                    <svg class="text-warning ms-lg-5" width="171" height="97" viewBox="0 0 171 97" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M169.319 54.333C162.404 55.9509 155.712 58.0764 149.09 60.6764L149.07 60.6761C148.967 60.7158 148.863 60.7554 148.76 60.7951C147.3 61.3811 148.325 63.4238 149.672 63.2067C154.548 62.4134 159.994 59.8725 164.87 59.0792C148.278 73.1339 129.684 89.2549 107.779 92.6402C85.6981 96.0539 65.5665 86.7839 56.8768 66.9865C70.9662 55.0671 79.2106 35.6614 79.0299 17.6457C78.9484 10.3157 76.1485 -3.36373 65.7068 1.21851C55.8557 5.53146 52.0466 22.5213 50.5736 31.7739C48.7364 43.2858 49.7593 55.5291 53.8643 66.2014C52.787 67.0812 51.6907 67.8989 50.5755 68.6546C40.6328 75.3851 27.1039 78.8929 16.4487 72.0362C2.91045 63.3259 1.93984 44.9485 1.56902 30.4091C1.54778 29.6265 0.359869 29.6092 0.360624 30.3915C0.322634 44.0809 0.835929 59.065 10.5664 69.6857C18.5722 78.4182 30.4315 79.7753 41.3346 75.9924C46.2437 74.2834 50.7739 71.7557 54.8581 68.6348C59.9738 80.2586 68.9965 89.6956 82.2735 93.7393C113.474 103.223 141.744 83.0494 164.903 63.697L161.901 71.0334C161.267 72.5887 163.76 73.2736 164.393 71.7389C165.986 67.8713 167.569 63.9933 169.152 60.1359C169.288 60.0247 169.695 58.6127 169.821 58.491C170.122 57.1161 169.152 60.1359 169.851 58.4169C170.189 57.6087 170.517 56.79 170.855 55.9818C171.248 54.9994 170.185 54.1192 169.319 54.333ZM54.3624 59.8578C51.4872 49.1623 51.6051 37.5841 54.2025 26.8039C55.5185 21.3369 57.4405 15.8066 60.1572 10.8541C61.2311 8.89354 62.5139 6.77134 64.2307 5.31421C69.4231 0.902277 74.3649 4.80357 75.8002 10.4446C80.5272 28.9489 70.1806 51.6898 55.8431 64.5114C55.2971 63.0109 54.793 61.4698 54.3624 59.8578Z"></path>
                    </svg>
                </div>
            </div>
        </section>
  )
}

export default CallToAction
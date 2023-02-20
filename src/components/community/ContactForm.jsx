import React, {useState} from 'react'
import { useEffect } from 'react';
import toast from 'react-hot-toast';
import saveData from 'services/saveEmail';
import { validateEmail } from 'services/validation';

const ContactForm = () => {

    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({...defaultError})
    const [state, setState] = useState({
        name: '',
        company: '',
        email: '',
        role: '',
        twitter: '',
    })

    useEffect(() => {
        setErrors({...defaultError})
    }, [state])

    const validate = () => {
        let new_errors = {...defaultError}
        if(!state.name || state.name.length < 2) new_errors.name = true
        if(!state.company || state.company.length < 2) new_errors.company = true
        if(!state.role || state.role.length < 2) new_errors.role = true
        if(!state.email || state.email.length < 2) new_errors.email = true
        if(!validateEmail(state.email)) new_errors.email = true;
        setErrors(new_errors)
        if(Object.values(new_errors).includes(true)) return false
        else return true;
    }

    const submitResponse = async (e) => {
        e.preventDefault();
        try{
            if(!validate()) {
                return;
            }
            setLoading(true);
            let formdata = new FormData();
            formdata.append('name', state.name)
            formdata.append('company', state.company)
            formdata.append('role', state.role)
            formdata.append('email', state.email)
            formdata.append('source', 'community')
            await saveData(formdata)
            toast.success("Thank you for your submission. We will get in touch shortly!")
            setLoading(false);
        } catch(err){
            setLoading(false);
            console.log(err)
        }
    }
    
    
    return (
    <div class='pt-5' id='signup-form'>
    <section class="container dark-mode rounded bg-primary pt-lg-3 mt-5" >
        <div class="card border-0 bg-primary position-relative py-lg-4 py-xl-5">
            <svg class="position-absolute end-0 mt-n2" width="242" height="331" viewBox="0 0 242 331" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M172.014 250.127C137.236 227.74 112.349 192.144 144.586 153.591C157.686 137.932 176.759 127.973 196.524 122.046C234.647 110.639 277.027 113.361 313.349 129.576C338.19 140.666 361.129 159.183 369.934 184.502C383.476 223.496 359.75 260.161 321.569 273.118C288.832 284.223 247.685 279.513 214.885 269.837C201.003 265.743 185.745 258.966 172.014 250.127Z" fill="#121519" fill-opacity=".07"></path>
                <path d="M20.3265 69.264C19.7064 43.0736 29.8071 17.1878 62.3851 19.8622C75.6229 20.9505 87.9525 27.2066 98.3563 35.3132C118.426 50.9253 132.424 73.896 136.952 98.6413C140.044 115.562 138.424 134.218 127.978 148C111.901 169.236 83.4531 170.283 62.5246 155.209C44.5807 142.281 32.0983 119.217 25.3391 98.6799C22.4836 89.9885 20.5616 79.6021 20.3265 69.264Z" fill="#121519" fill-opacity=".07"></path>
            </svg>
            <svg class="position-absolute start-0 bottom-0 ms-3" width="169" height="217" viewBox="0 0 169 217" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M34.2574 90.0177C29.666 97.6253 26.6254 106.591 24.9502 114.96C19.9522 140.043 26.4112 168.792 49.6162 181.885C66.0705 191.17 91.0017 189.904 108.062 183.692C125.725 177.266 135.045 168.04 142.29 150.389C151.409 128.174 150.912 99.6904 125.93 91.6429C115.423 88.254 104.723 86.5065 94.2249 82.5889C84.6622 79.0248 74.8545 72.1766 64.4411 71.6149C50.8011 70.8777 40.9122 79.0146 34.2574 90.0177Z" fill="#121519" fill-opacity="0.07"></path>
                <path d="M147.005 75.6331C152.135 70.7783 156.106 64.2374 159.153 57.9073C166.014 43.6372 174.127 22.1368 160.207 9.68505C152.924 3.17188 139.243 3.86644 130.324 5.29774C118.428 7.20428 107.295 8.85077 96.5031 14.783C85.8056 20.6599 79.0155 33.6997 77.0014 45.6686C75.4978 54.5776 79.63 63.6672 84.7391 70.7453C91.8208 80.5571 103.503 84.2003 114.817 84.3975C121.101 84.5081 127.716 84.0527 133.89 82.8121C138.932 81.7962 143.273 79.1597 147.005 75.6331Z" fill="#121519" fill-opacity="0.07"></path>
            </svg>
            <div class="card-body position-relative zindex-2 py-5">
                <form class="mx-auto" style={{maxWidth: "800px"}}>
                    <h2 class="h1 card-title text-center pb-4">Join our Exclusive Community</h2>
                    <div class="row g-4">
                        <div class="col-sm-6">
                            <label class="form-label fs-base" for="name">Name</label>
                            <input 
                                class={`form-control form-control-lg ${errors.name && 'is-invalid'}`}
                                type="text" 
                                placeholder="Your name" 
                                required="" 
                                name="name" 
                                value = {state.name}
                                onChange = {e => setState(prev => ({...prev, name: e.target.value}))}
                            />
                        </div>
                        <div class="col-sm-6">
                            <label class="form-label fs-base" for="company">Company</label>
                            <input 
                                class={`form-control form-control-lg ${errors.company && 'is-invalid'}`}
                                type="text" 
                                name="company"
                                placeholder="Your company name" 
                                value = {state.company}
                                onChange = {e => setState(prev => ({...prev, company: e.target.value}))}
                            />
                        </div>
                        <div class="col-sm-6">
                            <label class="form-label fs-base" for="email">Email</label>
                            <input 
                                class={`form-control form-control-lg ${errors.email && 'is-invalid'}`}
                                type="email" 
                                name= "email"
                                placeholder="Email address" required="" 
                                value = {state.email}
                                onChange = {e => setState(prev => ({...prev, email: e.target.value}))}
                            />
                        </div>
                        <div class="col-sm-6">
                            <label class="form-label fs-base">Your role</label>
                            <select 
                                class={`form-select form-select-lg ${errors.role && 'is-invalid'}`}
                                name="role"
                                placeholder="Your role" 
                                value = {state.role}
                                onChange = {e => setState(prev => ({...prev, role: e.target.value}))}
                            >
                                {options.map(i => (
                                    <option key = {i.value} value = {i.value}>{i.label}</option>
                                ))}
                            </select>
                        </div>
                        <div class="col-sm-12 text-center pt-4">
                            <button 
                                class="btn btn-lg btn-light" 
                                type="submit"
                                onClick={e => submitResponse(e)}
                            >{loading && <span class='spinner-border spinner-border-sm me-2 text-black'></span>}Join the community</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </section>
    </div>
  )
}

export default ContactForm


let defaultError = {
    name: false,
    company: false,
    email: false,
    role: false,
    twitter: false,
}


let options = [
    {label: 'Choose option', value: ''},
    {label: 'Founder', value: 'Founder'},
    {label: 'Marketing', value: 'Marketing'},
    {label: 'Growth hacker', value: 'Growth hacker'},
    {label: 'Designer', value: 'Designer'},
    {label: 'Product', value: 'Product'},
    {label: 'Content Creator', value: 'Content Creator'},
    {label: 'Community builder', value: 'Community builder'},
    {label: 'Investor', value: 'Investor'},
    {label: 'Web3 enthusiast', value: 'Web3 enthusiast'},
    {label: 'Others', value: 'Others'},
]
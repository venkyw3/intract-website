import React, {useState} from 'react'
import { useEffect } from 'react';
import toast from 'react-hot-toast';
import saveData from 'services/saveEmail';
import { validateEmail } from 'services/validation';

const CallToAction = () => {

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
    <section class="container mt-5 mb-n5 pt-5" id = "signup-form">
        <div class="bg-dark position-relative rounded-5 overflow-hidden px-4 pt-1 pb-2 py-sm-4 py-lg-5">
          	<div class="d-none d-dark-mode-block position-absolute top-0 start-0 w-100 h-100" style={{backgroundColor: "rgba(255,255,255, .02)"}}></div>
          		<div class="position-absolute top-0 end-0 pe-5 zindex-2">
            		<svg class="me-5" width="514" height="254" viewBox="0 0 514 254" fill="white" fill-opacity=".03" xmlns="http://www.w3.org/2000/svg">
              			<ellipse cx="257" cy="0.5" rx="257" ry="253.5"></ellipse>
            		</svg>
          	</div>
          	<div class="d-none d-lg-flex position-absolute start-0 bottom-0 ms-n4">
            	<div data-aos="fade-left" data-aos-duration="700" data-aos-anchor-placement="bottom-bottom" class="aos-init aos-animate">  
              		<svg class="" width="117" height="117" viewBox="0 0 117 117" fill="currentColor" xmlns="http://www.w3.org/2000/svg" style = {{color: '#D2CAEF'}}>
						<circle cx="58.5" cy="58.5" r="58.5"></circle>
              		</svg>
            	</div>
            	<div data-aos="fade-right" data-aos-duration="700" data-aos-anchor-placement="bottom-bottom" class="aos-init aos-animate">
              		<svg class="tning" width="117" height="117" viewBox="0 0 117 117" fill="currentColor" xmlns="http://www.w3.org/2000/svg" style = {{color: '#6F58C9'}}>
                		<path d="M-2.51516e-06 58.5C-3.52666e-06 70.0702 3.43096 81.3806 9.85902 91.0008C16.2871 100.621 25.4235 108.119 36.113 112.547C46.8025 116.975 58.5649 118.133 69.9128 115.876C81.2607 113.619 91.6844 108.047 99.8657 99.8657C108.047 91.6844 113.619 81.2607 115.876 69.9128C118.133 58.5649 116.975 46.8025 112.547 36.113C108.119 25.4235 100.621 16.2871 91.0009 9.85903C81.3806 3.43096 70.0702 -4.24071e-06 58.5 -5.11423e-06L58.5 58.5L-2.51516e-06 58.5Z"></path>
              		</svg>
            	</div>
          	</div>
          	<div class="dark-mode position-relative zindex-3  py-5 my-xl-3 mx-auto" >
            	<h2 class="display-5 text-center mb-5"> Come join us, and let’s get <br/>#HighonGrowth!</h2>
            	<form class="subscription-form validate mx-auto" style={{maxWidth: "800px"}}>
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
                                style = {{color: 'grey'}}
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
  )
}

export default CallToAction




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
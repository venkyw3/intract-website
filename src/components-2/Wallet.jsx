import React, {useState, useEffect} from 'react'
import {trackWalletConnect} from '@intract/attribution'

const Wallet = () => {

    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(false)
    const [status, setStatus] = useState('')

    useEffect(() => {
        if(!isMetaMaskInstalled){
            alert('Please install MetaMask wallet! You wont able to submit the form without it')
            return;
        }
    }, [])
    

    const isMetaMaskInstalled = () => {
        const { ethereum } = window;
        return Boolean(ethereum && ethereum.isMetaMask);
    };



    const connectWallet = async () => {
        try{
            let address = await connectMetamaskWallet()
            if(!address){
                return;
            }
            setLoading(false);
            alert("Your wallet has been succesfully added!")
        } catch(err){
            console.log(err)
            alert("Something went wrong, please try again")
            setLoading(false);
            setShow(false)
        }
    };




    const connectMetamaskWallet = async () => {
        if(!isMetaMaskInstalled()){
            alert('Please install MetaMask wallet!')
            return;
        }
        setLoading('metamask');
        setStatus('metamask');
        setShow(true);
        try{
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
			trackWalletConnect()
            if(accounts && accounts.length > 0) {
                let message = "Hey, just testing"
                const request = { method: "personal_sign", params: [message, accounts[0]] }
                const signature = await window.ethereum.request(request)
				console.log(signature)
                setStatus('complete')
                return accounts[0];
            } else {
                throw new Error("")
            }

        } catch(err){
            throw err;
        }
    };

	return (
        <div class='text-center py-5 my-5'>
			<div 
				class='btn btn-block btn-lg btn-primary'
				onClick={() => connectWallet()}
                loading = {loading}
			>
                {loading === 'metamask' ? 'Connecting...' : 'Connect Wallet'}
            </div>
        </div>
	)
}

export default Wallet


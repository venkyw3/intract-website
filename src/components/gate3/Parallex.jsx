import React, { useEffect, useRef } from 'react'
import Parallax from 'parallax-js'

const Parallex_ = () => {

    const ele = useRef()

    useEffect(() => {
        if(ele && ele.current){
            var p = new Parallax(ele.current)
        }
    }, [])
    
    return (
        <div>
            <div class='d-none d-lg-block'>
                <div className='parallax' ref = {ele}>
                    <div class="parallax-layer" data-depth="-0.05">
                        <img class="d-none d-dark-mode-block" src="/assets/img/gate3/01-dark.png" alt="Layer" />
                    </div>
                    <div class="parallax-layer" data-depth="0.1">
                        <img class="d-none d-dark-mode-block" src="/assets/img/gate3/bg.png" alt="Layer" />
                    </div>
                    <div class="parallax-layer zindex-2" data-depth="0.2">
                        <img class="d-none d-dark-mode-block" src="/assets/img/gate3/03-dark.png" alt="Layer" />
                    </div>
                    <div class="parallax-layer" data-depth="-0.2">
                        <img class="d-none d-dark-mode-block" src="/assets/img/gate3/coins.png" alt="Layer" />
                    </div>
                    <div class="parallax-layer" data-depth="-0.25">
                        <img class="d-none d-dark-mode-block" src="/assets/img/gate3/discord.png" alt="Layer" />
                    </div>
                </div>
            </div>
            <div class='d-block d-lg-none'>
                <div className='parallax' >
                    <div class="parallax-layer" >
                        <img class="d-none d-dark-mode-block" src="/assets/img/gate3/gate3-hero-sm.png" alt="Layer" />
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Parallex_
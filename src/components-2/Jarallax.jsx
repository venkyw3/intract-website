import React, { useRef, useEffect } from 'react';
import { jarallax } from 'jarallax';
import 'jarallax/dist/jarallax.css';

const Jarallax = () => {

    const $el = useRef();

    useEffect(() => {
        if ($el.current) {
            jarallax($el.current, {
                speed: 0.8
            });
        }
  
        return function destroy() {
            if ($el.current) {
                jarallax($el.current, 'destroy');
            }
        };
    }, []);

    
  return (
        <div class="jarallax position-absolute top-0 start-0 w-100 h-100 mt-5" ref={$el} >
            <div 
                class="jarallax-img position-absolute w-100 h-100 animate-waves" 
            ></div>
        </div>
  )
}

export default Jarallax
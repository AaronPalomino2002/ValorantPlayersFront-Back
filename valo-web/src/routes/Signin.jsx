import React from 'react'
import "../css/main.css"
import { Link } from 'react-router-dom'
import {ReactComponent as Logo} from '../assets/img/valorant-seeklogo.svg'

const Signin = () => {
  return (
    <div className='container'>
      <div className='min-h-screen flex flex-col'>
        <div id='header' className='accounts-header-container h-20 border-b border-b-gray-200 dark:border-b-gray-700 flex-none flex items-center lg:h-[100px] lg:border-none'>
          <div className='flex-1 flex h-8'>
            <Link to='/' className='flex-none flex items-center'>
              <Logo style={{width: '25%'}}/>
            </Link>
            <div className='grow'></div>
            <div class="flex-none">
              <div class="block">
                <button class="language-selector-button relative button-reg h-8 p-1 inline-flex space-x-2 items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
                    <path stroke="currentColor" stroke-miterlimit="10" d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Z"></path><path stroke="currentColor" stroke-miterlimit="10" d="M12 3c-2.513 0-4.875 4.03-4.875 9S9.487 21 12 21c2.512 0 4.875-4.03 4.875-9S14.512 3 12 3Z"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6 6c1.654 1.175 3.737 1.875 6 1.875 2.262 0 4.345-.7 6-1.875m0 12c-1.655-1.175-3.738-1.875-6-1.875-2.263 0-4.346.7-6 1.875"></path><path stroke="currentColor" stroke-miterlimit="10" d="M12 3v18m9-9H3">
                    </path>
                  </svg>
                  <div class="pr-4 hidden lg:block">español</div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" class="hidden lg:block">
                  </svg>
                </button>
              </div>
            </div>
          </div>


        </div>


        <div id='body' className='grow accounts-body-container mt-9 flex flex-col gap-10 lg:mt-0 lg:flex-row lg:justify-center lg:gap-[20px]'>
          <div className='lg:w-[460px] lg:flex-1 lg:flex lg:items-center lg:justify-center'>
            <div className='lg:w-[344px] lg:min-h-[456px]'>
              <div className='space-y-6'>
                <div class="h2-reg text-center">Iniciar sesión</div>
                <div class="p3-reg break-keep text-center">
                  Te damos la bienvenida a la comunidad de Valorant, en la que podras visualizar todo con respecto al juego.
                </div>
                <form className='space-y-6'>
                  <div className='peer flex flex-col space-y-2'>
                    <span className='group inline-block relative'>
                      <input placeholder='' className='peer p2-reg w-full px-4 py-3 bg-white dark:bg-darkpurple-900 rounded-md placeholder:text-gray-400 disabled:text-gray-300 dark:disabled:text-darkpurple-500 disabled:border-darkpurple-300 dark:disabled:border-darkpurple-500 border-gray-300 dark:border-darkpurple-500 border'
                        required autoComplete='username' type="email" />
                      <label className='peer-placeholder-shown:p2-reg peer-placeholder-shown:text-gray-400 dark:peer-placeholder-shown:text-darkpurple-400 absolute z-[1] left-4 peer-placeholder-shown:top-2.5 peer-placeholder-shown:bg-transparent peer-focus:caption-reg peer-focus:-top-3 peer-focus:bg-white dark:peer-focus:bg-darkpurple-900 peer-focus:py-0.5 peer-focus:text-blue-500 caption-reg -top-3 bg-white dark:bg-darkpurple-900 px-1 py-0.5 transition-all ease-in-out duration-200 pointer-events-none'>
                        Direccion de Correo Electronico
                      </label>
                    </span>
                  </div>
                  <div className='space-y-3'>
                    <button type="submit" disabled className='button-bold text-center px-[18px] py-[14px] leading-5 border rounded-md border-gray-300 dark:border-darkpurple-500 transition duration-100 ease-in min-h-[50px] bg-blue-500 border-none text-white hover:bg-blue-700 dark:hover:bg-blue-300 disabled:text-white dark:disabled:text-white disabled:bg-gray-300 dark:disabled:bg-darkpurple-500 w-full'>
                      Continuar con el correo electrónico
                    </button>
                    <div class="text-center leading-none">
                      <Link class="p3-reg text-blue-500">Inicia sesión con un código único</Link>
                    </div>
                  </div>
                </form>
                <div class="font-normal text-xs uppercase flex items-center gap-6">
                  <div class="grow h-px bg-gray-200 dark:bg-darkpurple-700">
                  </div>
                  <div class="grow-0">or</div>
                  <div class="grow h-px bg-gray-200 dark:bg-darkpurple-700">
                  </div>
                </div>
                <div className='flex justify-between lg:justify-center lg:gap-6'>
                  <button type="button" className='text-center leading-5 border border-gray-300 dark:border-darkpurple-500 transition duration-100 ease-in dark:disabled:text-gray-500 disabled:border-gray-300 dark:disabled:border-darkpurple-500 button-reg p-1 border-none bg-transparent dark:bg-transparent disabled:bg-transparent dark:disabled:bg-transparent hover:bg-transparent dark:hover:bg-transparent dark:text-darkpurple-200 min-h-0 text-gray-700 hover:text-blue-500 disabled:text-gray-300 block w-[56px] h-[56px] rounded-full'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="49" fill="none" class="dark:invert">
                      <rect width="48" height="48" y="0.5" fill="#0B0B0A" rx="24"></rect>
                      <path fill="#fff" fill-rule="evenodd" d="M27.086 13.5c.175 1.194-.31 2.365-.952 3.193-.686.888-1.87 1.575-3.015 1.539-.21-1.144.326-2.322.978-3.114.715-.874 1.94-1.545 2.989-1.618Zm3.443 16.814c.59-.906.811-1.362 1.27-2.385-3.336-1.268-3.87-6.01-.57-7.83-1.006-1.263-2.421-1.995-3.757-1.995-.962 0-1.622.25-2.221.48-.5.19-.958.364-1.515.364-.602 0-1.134-.191-1.693-.391-.613-.22-1.256-.451-2.055-.451-1.499 0-3.094.916-4.106 2.481-1.422 2.206-1.18 6.351 1.127 9.883.824 1.264 1.925 2.684 3.365 2.697.598.005.995-.173 1.426-.366.492-.22 1.028-.46 1.955-.466.932-.005 1.46.238 1.945.462.42.193.808.373 1.4.366 1.442-.011 2.604-1.585 3.428-2.85Z" clip-rule="evenodd">
                      </path>
                    </svg>
                  </button>
                  <button type="button" className='text-center leading-5 border border-gray-300 dark:border-darkpurple-500 transition duration-100 ease-in dark:disabled:text-gray-500 disabled:border-gray-300 dark:disabled:border-darkpurple-500 button-reg p-1 border-none bg-transparent dark:bg-transparent disabled:bg-transparent dark:disabled:bg-transparent hover:bg-transparent dark:hover:bg-transparent dark:text-darkpurple-200 min-h-0 text-gray-700 hover:text-blue-500 disabled:text-gray-300 block w-[56px] h-[56px] rounded-full'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" class="">
                      <rect width="47.5" height="47.5" x="0.25" y="0.25" fill="#fff" rx="23.75"></rect>
                      <rect width="47.5" height="47.5" x="0.25" y="0.25" stroke="#C3CBD1" stroke-width="0.5" rx="23.75"></rect>
                      <path fill="#EA4335" d="M24 16.845c2.191 0 3.669.946 4.511 1.736l3.293-3.214c-2.022-1.88-4.654-3.034-7.804-3.034-4.563 0-8.503 2.619-10.422 6.43l3.772 2.93c.947-2.813 3.565-4.849 6.65-4.849Z"></path><path fill="#4285F4" d="M35.2 24.26c0-.96-.078-1.66-.246-2.386H24v4.33h6.43c-.13 1.076-.83 2.696-2.386 3.785l3.682 2.852c2.204-2.035 3.474-5.03 3.474-8.582Z"></path><path fill="#FBBC05" d="M17.363 26.308A7.182 7.182 0 0 1 16.974 24c0-.804.143-1.581.376-2.307l-3.772-2.93A11.677 11.677 0 0 0 12.333 24c0 1.88.454 3.656 1.245 5.237l3.785-2.93Z"></path><path fill="#34A853" d="M24 35.667c3.15 0 5.795-1.037 7.726-2.826l-3.681-2.852c-.986.687-2.308 1.167-4.045 1.167-3.085 0-5.704-2.035-6.637-4.848l-3.772 2.93c1.918 3.81 5.846 6.429 10.41 6.429Z">
                      </path>
                    </svg>
                  </button>
                  <button type="button" className='text-center leading-5 border border-gray-300 dark:border-darkpurple-500 transition duration-100 ease-in dark:disabled:text-gray-500 disabled:border-gray-300 dark:disabled:border-darkpurple-500 button-reg p-1 border-none bg-transparent dark:bg-transparent disabled:bg-transparent dark:disabled:bg-transparent hover:bg-transparent dark:hover:bg-transparent dark:text-darkpurple-200 min-h-0 text-gray-700 hover:text-blue-500 disabled:text-gray-300 block w-[56px] h-[56px] rounded-full'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="49" fill="none" class="">
                      <rect width="48" height="48" y="0.5" fill="#1877F2" rx="24"></rect>
                      <path fill="#fff" d="m29.148 26.34.674-4.131h-4.215v-2.68c0-1.13.588-2.233 2.476-2.233H30V13.78s-1.74-.279-3.401-.279c-3.473 0-5.74 1.979-5.74 5.56v3.149H17v4.13h3.858v9.988c.775.114 1.568.173 2.375.173.807 0 1.6-.059 2.374-.173V26.34h3.541Z">
                      </path>
                    </svg>
                  </button>
                  <button type="button" className='text-center leading-5 border border-gray-300 dark:border-darkpurple-500 transition duration-100 ease-in dark:disabled:text-gray-500 disabled:border-gray-300 dark:disabled:border-darkpurple-500 button-reg p-1 border-none bg-transparent dark:bg-transparent disabled:bg-transparent dark:disabled:bg-transparent hover:bg-transparent dark:hover:bg-transparent dark:text-darkpurple-200 min-h-0 text-gray-700 hover:text-blue-500 disabled:text-gray-300 block w-[56px] h-[56px] rounded-full'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" class="">
                      <rect width="48" height="48" fill="#5865F2" rx="24"></rect>
                      <path fill="#fff" d="M33.177 15.62A20.36 20.36 0 0 0 28.02 14c-.223.402-.482.942-.661 1.372a18.938 18.938 0 0 0-5.716 0c-.18-.43-.445-.97-.669-1.372a20.29 20.29 0 0 0-5.161 1.625c-3.264 4.932-4.15 9.742-3.707 14.484 2.165 1.617 4.263 2.599 6.326 3.241.51-.7.963-1.446 1.355-2.23a13.33 13.33 0 0 1-2.134-1.04c.18-.132.354-.27.523-.413 4.114 1.924 8.583 1.924 12.648 0 .17.143.346.281.523.414a13.29 13.29 0 0 1-2.138 1.04c.392.783.844 1.53 1.355 2.231a20.578 20.578 0 0 0 6.33-3.243c.519-5.497-.887-10.263-3.717-14.488Zm-12.83 11.573c-1.235 0-2.248-1.153-2.248-2.557s.992-2.558 2.248-2.558c1.257 0 2.27 1.152 2.248 2.558.002 1.404-.991 2.557-2.248 2.557Zm8.306 0c-1.235 0-2.248-1.153-2.248-2.557s.991-2.558 2.248-2.558c1.256 0 2.269 1.152 2.247 2.558 0 1.404-.99 2.557-2.247 2.557Z">
                      </path>
                    </svg>
                  </button>

                </div>
              </div>
              <div className='mt-20 p3-reg text-center'>
                  ¿No eres miembro?
                  <Link className='text-blue-500 href="/accounts/signup?provider=opgg&amp;redirect_url=https%3A%2F%2Fwww.op.gg%2F'> Únete ya</Link>
              </div>
            </div>
          </div>
        </div>
        <div id='footer' className='flex-none flex items-center space-x-4 justify-center h-20'>
            <div className='flex space-x-4 text-base rtl:space-x-reverse'>
            <a target="_blank" href="https://policy.op.gg/last/TERMS_OF_USE?locale=es">Condiciones de uso</a>
            <a class="font-bold" target="_blank" href="https://policy.op.gg/last/PRIVACY_POLICY?locale=es">Política de privacidad</a>
            </div>
        </div>
      </div>
    </div>
  )
}



export default Signin
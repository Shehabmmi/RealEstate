import React from 'react'
import ProLogis from '../../assets/prologis.png'
import AmericamTower from '../../assets/tower.png'
import Equinix from '../../assets/equinix.png'
import DigitalRealty from '../../assets/realty.png'


export default function LogosSec() {
  return (
   <div className="w-full container py-10">
  <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 items-center w-full">
    <img src={ProLogis} alt="logo1" className="h-10 sm:h-12 object-contain justify-self-center" />
    <img src={AmericamTower} alt="logo2" className="h-10 sm:h-12 object-contain justify-self-center" />
    <img src={Equinix} alt="logo3" className="h-10 sm:h-12 object-contain justify-self-center" />
    <img src={DigitalRealty} alt="logo5" className="h-10 sm:h-12 object-contain justify-self-center" />
  </div>
</div>

  )
}

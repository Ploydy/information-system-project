import Image from "next/image";
import bgLogo from '@/app/(images)/logo.jpg'

export const PuLogo = () => {
  <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
    <Image alt="logo" src={bgLogo} 
    />
  </svg>
};
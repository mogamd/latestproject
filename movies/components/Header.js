import HeaderItem from "./HeaderItem";
import { HomeIcon, StarIcon  } from '@heroicons/react/outline';
import styled from 'styled-components';



function Header() {
    return (
        <header className='flex flex-row m-5 justify-between items-center'>

            <div className='flex flex-grow justify-evenly  max-w-2xl'>
                <HeaderItem title='HOME' Icon={HomeIcon}/> 
                <HeaderItem title='FAVOURITES' Icon={StarIcon}/> 
            </div>

            {/* Login Button */}
            <Login >Login</Login>

            
        </header>
    )
};

const Login = styled.a`
  background-color: rgba(0, 0, 0, 0.6);
  padding: 8px 16px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  border: 1px solid #f9f9f9;
  border-radius: 4px;
  transition: all 0.2s ease 0s;

  &:hover {
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
  }
`;

export default Header

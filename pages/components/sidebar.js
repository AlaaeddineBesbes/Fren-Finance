import React from 'react'
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ClearAllIcon from '@material-ui/icons/ClearAll';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

import { SocialIcon } from 'react-social-icons';
import SyncAltIcon from '@material-ui/icons/SyncAlt';
import LayersIcon from '@material-ui/icons/Layers';
import LockIcon from '@material-ui/icons/Lock';
import EcoIcon from '@material-ui/icons/Eco';


const Sidebar = () => {
    return (
        <div className="md:w-3/12 w-5/12 h-full shadow-md">
            <div className=" border-b py-3 mt-1 flex justify-around ">
                <p className="text-xl  font-semibold">Artemis Cat</p>
                <p>|</p>
                

            </div>
            <div className="p-4 space-y-14">
                <div className="space-y-4" >
                    <h1 className="text-gray-400 font-semibold">Menu</h1>
                    <div className="">
                        <div className="flex p-3 text-gray-700  space-x-4 0 hover:bg-gray-50 hover:text-blue-600  cursor-pointer  ">
                            <DonutLargeIcon className=" text-gray-300" />
                            <p className="font-semibold "  >Dashbord</p>
                        </div>
                    </div>
                    <div className="">
                        <div className="flex p-3 text-gray-700  space-x-4 0 hover:bg-gray-50 hover:text-blue-600  cursor-pointer  ">
                            <ClearAllIcon className="text-gray-300" />
                            <a href='https://poocoin.app/tokens/0xe0897cff301ead23e0fae7886eeeee27fd013297' className=" font-semibold  " >Poocoin</a>
                        </div>
                    </div>
                    <div className="">
                        <div className="flex p-3 text-gray-700  space-x-4 0 hover:bg-gray-50 hover:text-blue-600  cursor-pointer  ">
                            <ArrowUpwardIcon className="text-gray-300" />
                            <p className=" font-semibold  " >Pancakeswap</p>
                        </div>
                    </div>
                    <div className="">
                        <div className="flex p-3 text-gray-700  space-x-4 0 hover:bg-gray-50 hover:text-blue-600  cursor-pointer  ">
                            <ArrowDownwardIcon className="text-gray-300" />
                            <a href='https://mudra.website/?certificate=yes&type=0&lp=0x31db536dd43442ec426731571e1001a67e4ea23a' className="font-semibold " >Lock</a>
                        </div>
                    </div>
                   
                </div>
                <div className="space-y-6" >
                    <h1 className="text-black-400 font-semibold">Social Media</h1>
                    <div className="">
                        <div className="flex p-3 text-gray-700  space-x-4 0 hover:bg-gray-50 hover:text-blue-600  cursor-pointer  ">
                            <SocialIcon network="twitter" style={{ height: 35, width: 35 }} />
                            <a className=" font-semibold " href='https://twitter.com'>Twitter</a>
                        </div>
                    </div>
                    <div className="">
                        <div className="flex p-3 text-gray-700  space-x-4 0 hover:bg-gray-50 hover:text-blue-600  cursor-pointer  ">
                            <SocialIcon network="telegram" style={{ height: 35, width: 35 }} />
                            <a className=" font-semibold "  href='https://t.me/ArtemisCat'>Telegram</a>
                        </div>
                    </div>

                    <div className="">
                        <div className="flex p-3 text-gray-700  space-x-4 0 hover:bg-gray-50 hover:text-blue-600  cursor-pointer  ">
                             <SocialIcon network="discord" style={{ height: 35, width: 35 }} />
                            <a href='' className=" font-semibold " >Discord</a>
                        </div>
                    </div>

                    <div className="">
                        <div className="flex p-3 text-gray-700  space-x-4 0 hover:bg-gray-50 hover:text-blue-600  cursor-pointer  ">
                             <SocialIcon  style={{ height: 35, width: 35 }} />
                            <a href='https://artemiscatcoin.com/' className=" font-semibold " >Website</a>
                        </div>
                    </div>



                </div>
              
            </div>

        </div>
    )
}

export default Sidebar

import React, { useState , useEffect} from 'react'
import HomeIcon from '@mui/icons-material/Home';
import GrainIcon from '@mui/icons-material/Grain';
import { Link, useNavigate } from 'react-router-dom';
import {RxEyeClosed} from 'react-icons/rx'
import {BsFillSendPlusFill,BsReceipt} from 'react-icons/bs'
import {FcSimCardChip} from 'react-icons/fc'
import {ImConnection} from 'react-icons/im'
import { getBalance, getTransaction } from '../actions/getBalance';
import { getMe } from '../actions/LoginAction';
import PopModel from '../model/PopModel';
import Table  from '../model/Table';
const Dashboard = () => {
  const navigate = useNavigate();
  const [blur ,setBlur] = useState(false)
  const [balance ,setBalance] = useState(0)
  const [show, setShow] = useState(false);
  const [ showTxn , setTranc] = useState(false);
  const [ showTxnValue , setTrancValue] = useState([])
//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);
  const handleBlur = () => {
    setBlur(!blur)
  }

    function currencyFormat(num) {
        return '₦' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }
    useEffect(() => {
        getBalance('sk_test_a4f74739180087308a7bae941474051580e5bcac').then(res => {
            const bal = res.toString()
            res = bal.slice(0, bal.length - 2);
            setBalance(currencyFormat(Number(res)))
        })
    })


    useEffect(() => {
      if (!localStorage.TOKEN_VALUE) {
        // Set auth token header auth
        getMe(navigate);
      }
      // eslint-disable-next-line
    }, [navigate]);

    const fetchTxn =  () => {
        getTransaction('sk_test_a4f74739180087308a7bae941474051580e5bcac').then(res => {
            setTrancValue(res)
        })
        setTranc(!showTxn)
        
    }
  return (
    <>
        <div className='container flex sm:flex-row flex-col h-screen'>
            {show &&  
                <div className='fixed bg-popup h-screen w-full flex justify-center items-center cursor-pointer' onClick={() => setShow(!show)}><PopModel/></div>
            }
            <div className="sideview">
              <h3 className='sideview-text-logo text-white'>Welcome</h3>
              <p className='sideview-logo-sub'>Your name on here</p>
            </div>

            <div className="dashboard md:w-[70%] w-full px-4 md:px-0">
                <div className="badge flex items-center gap-2">
                    <Link className="flex gap-1 badge-box">
                        <HomeIcon fontSize="small" />
                        Home
                    </Link>

                    <p>/</p>

                    <Link className="flex gap-1 badge-box">
                        <GrainIcon  fontSize="small" />
                        Dashbaord
                    </Link>
                </div>
                <div className="dashboard-wrapper flex md:flex-row flex-col gap-3">
                    <div className="dashboard-box flex flex-col sm:p-6 p-2">
                        <div className='flex justify-between md:py-4 py-2'>
                            <span>Balance</span>
                            <span className='cursor-pointer' onClick={handleBlur}><RxEyeClosed /></span>
                        </div>
                        <h4 className={`md:text-[2rem] text-[1.7rem] font-bold text-primary ${blur && 'blur-md'}`}>{balance}</h4>

                        <div className='flex gap-3 mt-6 align-bottom'>
                            <button className='bg-primary flex items-center gap-3  rounded-full sm:p-2 p-1' onClick={() => setShow(!show)}><BsFillSendPlusFill/> Add Money</button>
                            <button className='bg-primary flex items-center gap-3  rounded-full sm:p-2 p-1' onClick={fetchTxn}><BsReceipt /> View Transaction</button>
                        </div>
                    </div>
                    <div className="dashboard-box flex flex-col gap-3">
                        <div className='flex justify-between'>
                            <span className='text-primary'>Debit Card</span>
                            <span>Bank</span>
                        </div>
                        <div className='flex justify-between items-center'>
                            <span><FcSimCardChip  size={60}/></span>
                            <span><ImConnection className='rotate-90' size={40}/></span>
                        </div>

                        <div className='sm:text-[1.3rem] text-[1rem]'>5199 45** **** **** **** **12 1234</div>
                        <span className='text-end'>21/25</span>
                        <span>Olawole Paul</span>
                    </div>
                </div>


                {showTxn &&  <div className='dashboard-wrapper'>
                    <Table value={showTxnValue}/>
                </div>
                }
            </div>
        </div>
    </>
  )
}

export default Dashboard
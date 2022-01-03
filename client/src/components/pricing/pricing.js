import React from 'react';
import { Link } from 'react-router-dom';
import { FaFire } from 'react-icons/fa';
import { BsXDiamondFill } from 'react-icons/bs';
import { GiCrystalize } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib'
import './pricing.css';
import Button from '../button/button';

const Pricing = () => {
    return (
        <IconContext.Provider value={{color: '#fff', size: 64}}>
        <div>
            <div className='pricing_section'>
                <div className='pricing_wrapper'>
                    <h1 className='pricing_header'>Pricing</h1>
                    <div className='pricing_container'>
                        <Link to='/' className='pricing_container-card'>
                            <div className='pricing_container-cardInfo'>
                                <div className='icon'>
                                    <FaFire />
                                </div>
                                <h3>Starter</h3>
                                <h4>$8.99</h4>
                                <p>per month</p>
                                <ul className='pricing_container-features'>
                                    <li>100 Transactions</li>
                                    <li>2% Cash Back</li>
                                    <li>$10,000 Limit</li>
                                </ul>
                                <Button buttonSize='btn-wide' buttonColor='primary' >
                                    Choose Plan
                                </Button>
                            </div>
                        </Link>

                        <Link to='/' className='pricing_container-card'>
                            <div className='pricing_container-cardInfo'>
                                <div className='icon'>
                                    <BsXDiamondFill />
                                </div>
                                <h3>Gold</h3>
                                <h4>$29.99</h4>
                                <p>per month</p>
                                <ul className='pricing_container-features'>
                                    <li>1000 Transactions</li>
                                    <li>3.5% Cash Back</li>
                                    <li>$100,000 Limit</li>
                                </ul>
                                <Button buttonSize='btn-wide' buttonColor='blue' >
                                    Choose Plan
                                </Button>
                            </div>
                        </Link>

                        <Link to='/' className='pricing_container-card'>
                            <div className='pricing_container-cardInfo'>
                                <div className='icon'>
                                    <GiCrystalize />
                                </div>
                                <h3>Diamond</h3>
                                <h4>$99.99</h4>
                                <p>per month</p>
                                <ul className='pricing_container-features'>
                                    <li>Unlimited Transactions</li>
                                    <li>5% Cash Back</li>
                                    <li>Unlimited Spending</li>
                                </ul>
                                <Button buttonSize='btn-wide' buttonColor='primary' >
                                    Choose Plan
                                </Button>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        </IconContext.Provider>
    )
}

export default Pricing

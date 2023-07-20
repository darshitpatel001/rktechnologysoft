import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Fileicon2 from "../assets/images/file-icon-grey.png"
import Settingicon from "../assets/images/setting-grey.png"
import Alarmicon from "../assets/images/circular-alarm-clock-tool.png"
import Whatsappicon from "../assets/images/whatsapp.png"
import Smsicon from "../assets/images/communication.png"
import Lettericon from "../assets/images/letter-i.png"
import Usericon from "../assets/images/user.png"

export default function Singleuserdetail(props) {

    const customerId = useParams();

    const userId = customerId.id;

    let blankPageId = props.blankPageId;

    if(userId === "" || userId === null || userId === undefined || userId === "customer"){
        blankPageId = "close";
    }
    else{
        blankPageId = "open";
    }

    const [firstCharacter, setFirstCharacter] = useState("");
    const [partyName, setPartyName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    useEffect(() => {

        fetch("http://localhost:3001/customer", {
        method: "GET",
        headers: {"content-type":"application/json"}
        }).then(async (res) => {
        
            let record = await res.json();

            for(var i = 0; i < record.length; i++){
                if(record[i].partyname === userId){
                    setFirstCharacter(record[i].firstCharacter);
                    setPartyName(record[i].partyname);
                    setPhoneNumber(record[i].phonenumber);
                }
            }
        
        }).catch((err) => {
            console.log("Record not found");
        })
    }, [])
    
    return (
        <div className={'single-user-data '+blankPageId}>
            <div className='blank-page'>
                <img src={Usericon} alt='' />
                <h4>No customer selected</h4>
            </div>
            <div className='single-user-detail-page'>
                <div className='username'>
                    <div className='name'>
                        <span>{firstCharacter}</span>
                        <div className='name-number'>
                            <h4>{partyName}</h4>
                            <p>{phoneNumber}</p>
                        </div>
                    </div>
                    <div className='report-setting-btn'>
                        <button className='report'><span><img src={Fileicon2} alt='' /></span>Report</button>
                        <button className='setting'><img src={Settingicon} alt='' /></button>
                    </div>
                </div>
                <div className='date-balance-row'>
                    <div className='due-date'>
                        <h3><span><img src={Alarmicon} alt='' /></span>Due Date:</h3>
                        <div className='date'>
                            <p>02 July 2023</p>
                            <button>Edit</button>
                        </div>
                    </div>
                    <div className='net-balance'>
                        <h4>Net Balance</h4>
                        <p>You'll Get: <span>₹1,256.25</span></p>
                    </div>
                </div>
                <div className='send-reminder-row'>
                    <h6>Send Reminder<span><img src={Lettericon} alt='' /></span></h6>
                    <div className='send-reminder-btn'>
                        <button className='whatsapp'><img src={Whatsappicon} alt='' />via<span>Whatsapp</span>from your number</button>
                        <button className='sms'><img src={Smsicon} alt='' />via<span>SMS</span>from Khatabook's number</button>
                    </div>
                </div>
                <div className='entries-table-section'>
                    <table>
                        <thead>
                            <tr>
                                <td className='entries'>Entries</td>
                                <td className='you-gave'>You Gave</td>
                                <td className='you-got'>You Got</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='entries'>
                                    <h5 className='date-time'>02 Jul 2023<span className='time'>12:44 AM</span></h5>
                                    <h6 className='balance'>Balance:- <span>1,570.00</span></h6>
                                    <p className='items'><span>391</span>items.</p>
                                </td>
                                <td className='you-gave'><span className='rupee-icon'>₹</span><span className='amount'>100.00</span><span className='blank'>-</span></td>
                                <td className='you-got'><span className='rupee-icon'>₹</span><span className='amount'>100.00</span><span className='blank'>-</span></td>
                            </tr>
                        
                        </tbody>
                    </table>
                </div>
                <div className='you-gave-got-btn'>
                    <button className='gave'>You Gave ₹</button>
                    <button className='got'>You Got ₹</button>
                </div>
            </div>
        </div>
    )
}
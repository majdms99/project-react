import {useState} from 'react'
import './Contact.css';
import {motion } from 'framer-motion'

function Contact() {



    const onSubmitHandler = (event) => {
        event.preventDefault();
    };
    {/*Check First Name*/}
    const [checkFName, setCheckFName] = useState({
        toutched: false,
        isValid: false,
        errMase : ''
    });

    const checkFirstName = (event) => {
        let valFN = event.target.value.trim();
        let valid = {...checkFName};
        valid.toutched = true;

        if(valFN.length <= 0){
            valid.isValid = false;
            valid.errMase = "entart the name";
        }
        else {
            valid.isValid = true;
            valid.errMase = "";
        }

        setCheckFName({...valid});
        console.log(valid)
    }
    {/*Check Last Name*/}
    const [checkLName, setCheckLName] = useState({
        toutched: false,
        isValid: false,
        errMase : ''
    });

    const checkLirstName = (event) => {
        let valLN = event.target.value.trim();
        let valid = {...checkLName};
        valid.toutched = true;

        if(valLN.length <= 0){
            valid.isValid = false;
            valid.errMase = "entart the name";
        }
        else {
            valid.isValid = true;
            valid.errMase = "";
        }

        setCheckLName({...valid});
        console.log(valid)
    }
    

    

    return (
        <div className='contact'>
            <div className='container'>
            <h3 className='special-heading'>Contact</h3>
                <p>We are born to create</p>
                <form onSubmit={onSubmitHandler}>
                    <motion.input type='text'
                     name="fname"
                     onBlur={checkFirstName}
                     placeholder="Enter The First Name.."
                     className={checkFName.toutched && checkFName.isValid? '':'border-red'}/>
                    {checkFName.errMase ? (
                        <small className="text-red">{checkFName.errMase}</small>
                    ): ("")}
                   

                    <input type='text' 
                    name="lname" 
                    onBlur={checkLirstName} 
                    placeholder="Enter The Last Name.."
                    className={checkLName.toutched && checkLName.isValid? '':'border-red'}/>
                    {checkFName.errMase ? (
                        <small className="text-red">{checkLName.errMase}</small>
                    ): ("")}

                    <input type='email' name="email" placeholder="Enter Your Email.."/>
                    <textarea type="text" name="mesage"  placeholder ="Enter Your Message" />
                    <button type='submit' name="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Contact

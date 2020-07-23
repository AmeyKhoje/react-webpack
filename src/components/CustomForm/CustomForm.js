import React, {useState} from 'react';
import classes from './CustomForm.css'

const CustomForm = () => {
    const [formFields, setFormFields] = useState({
        email: '',
        password: ''
    })

    const [formValidity, setFormValidity] = useState(true)
    
    const changeHandler = (e) => {
        const value = e.target.value
        setFormFields({
            ...formFields,
            [e.target.name]: value
        })

        if(formFields.email.length <= 2) {
            setFormValidity(false)
        }
        else {
            setFormValidity(true)
        }
    }
    let errorClass = !formValidity ? `error-class` : null
    // let btnDisabled = formValidity ? 'false' : 'true'
    const formSubmitHandler = () => {
        
    }

    console.log(formValidity);
    
    return (
        <div className={classes.CustomForm}>
            <form action="#">
                <div className={classes.InputCont}>
                    <div className={classes.LabelCont}>
                        <label for="" className={errorClass ? classes.ErrorEmailText : null}>Email:</label>
                    </div>
                    <div>
                        <input type="email" name="email" onChange={changeHandler} className={errorClass ? classes.ErrorClass : null} />
                    </div>
                </div>
                <div className={classes.InputCont}>
                    <div className={classes.LabelCont}>
                        <label for="">Password:</label>
                    </div>
                    <div>
                        <input type="password" name="password" onChange={changeHandler} />
                    </div>
                </div>
                <div className={classes.BtnsCont}>
                    <div className={classes.BtnCancel}>
                        <button type="button">
                            Cancel
                        </button>
                    </div>
                    <div className={classes.BtnSubmit}>
                        <button type="submit" onClick={formSubmitHandler} >
                            Submit
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default CustomForm;

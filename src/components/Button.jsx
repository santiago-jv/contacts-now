import React from 'react'
import { ButtonElement, Icon, Text} from "../common/styles"

const Button = ({text,action,icon,isSubmitBtn=false,isAlternative=false,dragProps}) => {
    return (
        <ButtonElement {...dragProps} type={isSubmitBtn ? 'submit' : 'button'} onClick={action} alternative={isAlternative}>
            <Icon  className={icon} alternative={isAlternative}></Icon> <Text alternative={isAlternative}>{text}</Text>
        </ButtonElement>
    )
}

export default Button

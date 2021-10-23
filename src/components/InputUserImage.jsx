import React, { useRef } from 'react'
import { defaultProfile } from '../constants.js';
import {
    UserProfile,
    ProfileImage,
    UploadContainer
} from '../styles/ImageUpload.styles.js'
import Button from './Button';


const InputUserImage = ({profileImage, setProfileImage}) => {
    const fileInput = useRef()
    const handleImage = (event)=>{
        const reader = new FileReader();
        reader.onload = function(){
          const dataURL = reader.result;
          setProfileImage(dataURL)
        };
        reader.readAsDataURL(event.target.files[0]);
    }

    const uploadImage = ()=>{
        fileInput.current.click()

    }
    const setDefaultImage = ()=>{
        setProfileImage(defaultProfile)
    }
    return (
      
            <>  
                <input accept="image/*" style={{display: 'none'}}   ref={fileInput} type="file"  onChange={handleImage}/>
                <UserProfile>  
                <ProfileImage onClick={uploadImage} src={profileImage} /> 
                    <UploadContainer >
                        <Button  margin={"1rem 0"} action={uploadImage}  text="upload" icon="fas fa-file-upload"></Button>
                        {profileImage !== defaultProfile  && <Button action={setDefaultImage}  text="use default" icon="fas fa-undo"></Button>}
                    </UploadContainer>
                </UserProfile>
                
            </>
   
    )
}

export default InputUserImage

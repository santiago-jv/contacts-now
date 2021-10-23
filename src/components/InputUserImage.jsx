import React from 'react'
import ImageUploading from 'react-images-uploading';
import { defaultProfile } from '../constants';
import {
    UserProfile,
    ProfileImage,
    UploadContainer
} from '../styles/ImageUpload'
import Button from './Button';

const InputUserImage = ({profileImage, setProfileImage}) => {

    const handleImage = (imageList)=>{
        setProfileImage(imageList)
    }

    return (
        <ImageUploading value={profileImage} acceptType={['jpg', 'png','jpeg','svg']} onChange={handleImage} dataURLKey="data_url">
            {({
                imageList,
                onImageUpload,
                onImageRemoveAll,
                onImageUpdate,
                onImageRemove,
                isDragging,
                dragProps,
            }) => (
                <>  
                   
                    <UserProfile> 

                        { imageList.length > 0 ?imageList.map((image, index) => (
                            <ProfileImage onClick={onImageUpload} {...dragProps} key={index} src={image.data_url}></ProfileImage>))    
                        :
                            <ProfileImage onClick={onImageUpload} {...dragProps} src={defaultProfile} /> 
                        }
                    
                       <UploadContainer > 
                           <Button action={onImageUpload} dragProps={dragProps}   text="upload or drag an image" icon="fas fa-file-upload"></Button>
                       </UploadContainer>
                    </UserProfile>
                    
                </>
            )}
        </ImageUploading>
    )
}

export default InputUserImage

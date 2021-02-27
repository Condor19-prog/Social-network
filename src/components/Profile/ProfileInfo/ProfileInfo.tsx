import React from "react";
import s from './ProfileInfo.module.css'
import Preloader from "../../Common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";


type profileInfoType = {
    profile: any
    status: string
    updateStatusTC: (status: string) => void
}

function ProfileInfo(props: profileInfoType) {

    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div>
                {/*<img src="https://i.ytimg.com/vi/xX5vNmZMLNk/hqdefault.jpg" alt="content"/>*/}
            </div>
            <div className={s.discriptionBlock}>
                <img src={props.profile.photos.large} alt="profile"/>
                <ProfileStatus status={props.status} updateStatusTC={props.updateStatusTC}/>
            </div>
        </div>
    )
}

export default ProfileInfo
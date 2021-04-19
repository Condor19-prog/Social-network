import {PhotosType, ProfileType} from "../types/types";
import {instance, MeResponseType} from "./api";

type SavePhotoResponseType = {
    photos: PhotosType
}

export const ProfileAPI = {
    getProfile(userId: number) {
        return instance.get<ProfileType>(`profile/` + userId).then(res => res.data)
    },
    getStatus(userId: number) {
        return instance.get(`profile/status/${userId}`).then(res => res.data)
    },
    updateStatus(status: string) {
        return instance.put<MeResponseType>(`profile/status`, {status}).then(res => res.data)
    },
    savePhoto(photoFile: File) {
        const formData = new FormData()
        formData.append('image', photoFile)
        return instance.put<MeResponseType<SavePhotoResponseType>>(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(res => res.data)
    },
    saveProfile(profile: ProfileType) {
        return instance.put<MeResponseType>('profile', profile).then(res => res.data)
    }
}
import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUserProfile, savePhoto, saveProfile, updateStatus} from "../../Redux/profile-reducer";
import {RootStateType} from "../../Redux/redux-store";
import {withRouter} from "react-router";
import {compose} from "redux";
import {RouteComponentProps} from "react-router-dom";
import {ProfileType} from "../../types/types";

type PathParamsType = {
    userId: string
}
type mapStateToPropsType = ReturnType<typeof mapStateToProps>

type mapDispatchPropsType = {
    getUserProfile: (userId: number) => void
    getStatus: (userId: number) => void
    updateStatus: (status: string) => void
    savePhoto: (file: File) => void
    saveProfile: (profile: ProfileType) => Promise<any>
}

type PropsType = mapStateToPropsType & mapDispatchPropsType & RouteComponentProps<PathParamsType>

class ProfileContainer extends React.Component<PropsType> {
    constructor(props: PropsType) {
        super(props);
    }

    refreshProfile() {
        let userId: number | null = +this.props.match.params.userId
        if (!userId) {
            userId = this.props.authorizedUserId
            if (!userId) {
                this.props.history.push("/Login");
            }
        }
        this.props.getUserProfile(userId as number)
        this.props.getStatus(userId as number)
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: PropsType, prevState: PropsType) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile();
        }
    }

    componentWillUnmount() {
    }

    render() {
        return (
            <Profile {...this.props}
                     isOwner={!this.props.match.params.userId}
                     profile={this.props.profile}
                     status={this.props.status}
                     savePhoto={this.props.savePhoto}
                     saveProfile={this.props.saveProfile}
            />
        )
    }
}

const mapStateToProps = (state: RootStateType) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
})
export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        getUserProfile,
        getStatus,
        savePhoto,
        saveProfile,
        updateStatus
    }), withRouter)(ProfileContainer)

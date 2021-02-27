import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, setUserProfile} from "../../Redux/profile-reducer";
import {RootState} from "../../Redux/redux-store";
import {withRouter} from "react-router";
import {compose} from "redux";

type mapStateToPropsType = {
    profile: any
}
type mapDispatchToPropsType = {
    setUserProfile: (profile: any) => void
    getUserProfile: (userId: number) => void
}

class ProfileContainer extends React.Component<any, any> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 2
        }
        this.props.getUserProfile(userId)
    }

    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        )
    }
}

const mapStateToProps = (state: RootState) => ({
    profile: state.profilePage.profile
})
export default compose(connect(mapStateToProps, {setUserProfile, getUserProfile}),
    withRouter)(ProfileContainer)

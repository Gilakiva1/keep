import { useSelector } from "react-redux";
import { LoginPage } from "../pages/LoginPage"

export const AppHeader = () => {
    const loggedInUser = useSelector(state => state.userModule.loggedInUser);
    console.log(loggedInUser);

    return (
        <div className="header">
            <span>Keep</span>
            {
                !loggedInUser ?<LoginPage />:<span>Hello {loggedInUser.user}</span>
            }

        </div>
    )
}
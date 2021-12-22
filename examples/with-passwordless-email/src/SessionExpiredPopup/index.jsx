import { useEffect } from "react";
import { redirectToAuth } from "supertokens-auth-react/recipe/emailpassword";

export default function SessionExpiredPopup() {
    useEffect(() => {
        window.alert("Session Expired. Please login again");
        redirectToAuth();
    }, []);

    return null;
}

import react from "react";
import { useHistory } from "react-router-dom";
import { ChatEngine } from "react-chat-engine";
import { auth } from "../firebase";

const Chats = () => {
    return (
        <div className="chats-page">
            <div className="nav-bar">
                <div className="logo-tab">
                    Messenger
                </div>
                <div>
                    Logout
                </div>
            </div>
        </div>
    );
}

export default ChannelMergerOptions;
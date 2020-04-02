import React from 'react';

class Sidepanel extends React.Component {
    render() {
        return (
            <div id="sidepanel">
            <div id="profile">
                <div className="wrap">
                <img id="profile-img" src="http://iciindustries.com.au/wp-content/uploads/2015/06/450-x-450-placeholder.png" className="online" alt="" />
                <p>Hidde</p>
                <i className="fa fa-chevron-down expand-button" aria-hidden="true"></i>
                <div id="status-options">
                    <ul>
                    <li id="status-online" className="active"><span className="status-circle"></span> <p>Online</p></li>
                    <li id="status-away"><span className="status-circle"></span> <p>Away</p></li>
                    <li id="status-busy"><span className="status-circle"></span> <p>Busy</p></li>
                    <li id="status-offline"><span className="status-circle"></span> <p>Offline</p></li>
                    </ul>
                </div>
                <div id="expanded">
                    {/* <label htmlFor="twitter"><i className="fa fa-facebook fa-fw" aria-hidden="true"></i></label>
                    <input name="twitter" type="text" value="mikeross" />
                    <label htmlFor="twitter"><i className="fa fa-twitter fa-fw" aria-hidden="true"></i></label>
                    <input name="twitter" type="text" value="ross81" />
                    <label htmlFor="twitter"><i className="fa fa-instagram fa-fw" aria-hidden="true"></i></label>
                    <input name="twitter" type="text" value="mike.ross" /> */}
                </div>
                </div>
            </div>
            <div id="contacts">
                <ul>
                <li className="contact">
                    <div className="wrap">
                    <span className="contact-status online"></span>
                    <img src="http://iciindustries.com.au/wp-content/uploads/2015/06/450-x-450-placeholder.png" alt="" />
                    <div className="meta">
                        <p className="name">test</p>
                        <p className="preview">test</p>
                    </div>
                    </div>
                </li>
                <li className="contact active">
                    <div className="wrap">
                    <span className="contact-status busy"></span>
                    <img src="http://iciindustries.com.au/wp-content/uploads/2015/06/450-x-450-placeholder.png" alt="" />
                    <div className="meta">
                        <p className="name">test user</p>
                        <p className="preview">test</p>
                    </div>
                    </div>
                </li>
                </ul>
            </div>
            <div id="bottom-bar">
                <button id="addcontact"><i className="fa fa-user-plus fa-fw" aria-hidden="true"></i> <span>Add contact</span></button>
                <button id="settings"><i className="fa fa-cog fa-fw" aria-hidden="true"></i> <span>Settings</span></button>
            </div>
            </div>
            
        );
    };
}

export default Sidepanel;
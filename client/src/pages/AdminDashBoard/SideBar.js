import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import "./SideBar.css"
import logo10 from "./logo10.png"
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'



const Sidebar = () => {
  const dispatch = useDispatch();
  const history = useNavigate ();
  const [showOptions, setShowOptions] = useState({
    option1: false,
    option2: false,
    option3: false,
    option4: false,
    option5: false,
    option6: false,
    option7: false,
    option8: false,
    option9: false,
  });

  const toggleOptions = (option) => {
    setShowOptions({
      ...showOptions,
      [option]: !showOptions[option]
    });
  };

  const [userData, setUserData] = useState(null);

  useEffect(() => {
      const userDataFromStorage = localStorage.getItem('user');
      console.log(userDataFromStorage)
      if (userDataFromStorage) {
          setUserData(JSON.parse(userDataFromStorage));
      }
  }, []);

  const handleLogout = () => {
    // Dispatch logout action
    localStorage.clear("user");
    localStorage.clear("auth_token");
    dispatch({ type: "CLEAR__USER" });
   history("/login")
  };


  return (
    <div className="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header" id="appContent">
    <div className="app-header header-shadow">
    <div className="app-header-logo"></div>
    <div className="app-header-mobile-menu">
        <div>
            <button type="button" className="hamburger hamburger--elastic mobile-toggle-nav">
                <span className="hamburger-box">
                    <span className="hamburger-inner"></span>
                </span>
            </button>
        </div>
    </div>
    <div className="app-header-menu">
        <span>
            <button type="button" className="btn-icon btn-icon-only btn btn-primary btn-sm mobile-toggle-header-nav">
                <span className="btn-icon-wrapper">
                    <i className="fa fa-ellipsis-v fa-w-6"></i>
                </span>
            </button>
        </span>
    </div>
    <div className="app-header-content">

    <div className="app-header-left">
            <div className="header-pane ">
                {/* <div>
                     <Link to="/home" className='p-1 m-0 font-weight-medium' style={{fontSize: '1.2rem'}}>Home</Link>
                </div> */}
            </div>
        </div>
   
        <div className="app-header-right">
        <div className="app-header-right d-flex align-items-center">
  {userData ? (
    <>
     <p className='p-1 m-0 font-weight-medium' style={{fontSize: '1.2rem'}}>{userData.userName}</p>

      <button className="ml-2 p-1 btn btn-sm btn-danger"style={{fontSize: '1rem'}} onClick={handleLogout}>Logout</button>
    </>
  ) : (
    <Link to="/login">Login</Link>
  )}  
</div>


</div>
     

    </div>
</div>
       
<div className="ui-theme-settings">
    <button type="button" id="TooltipDemo" className="btn-open-options btn ">
        <i className="fa fa-cog fa-w-16 fa-spin fa-2x"></i>
    </button>
    <div className="theme-settings-inner">
        <div className="scrollbar-container">
            <div className="theme-settings-options-wrapper">
                <h3 className="themeoptions-heading">Theme Customizer</h3>
                <div className="p-3">
                    <div className="list-group">
                        <div className="list-group-item">
                            <div className="themeoptions-heading mb-3 borderCercle d-flex justify-content-between">
                                <div>
                                    Mode
                                </div>
                                <button type="button" id="resetModeBtn"
                                    className="btn btn-outline-dark btn-sm ressetButton">
                                    Restore Default
                                </button>
                            </div>
                            <div className="theme-box">
                                <div className="change-mode " id="defoltChangeMode"
                                    onclick="setThemeMode('app-theme-white')">
                                    <div className="change-mode-icon">
                                        <img src="assets/images/icon/light-icon.svg" alt=""/>
                                    </div>
                                    <span className="mode-name">Light</span>
                                    <div className="chack-icon">
                                        <i className="fa-solid fa-check"></i>
                                    </div>
                                </div>
                                <div className="change-mode" onclick="setThemeMode('app-theme-dark')" id="themeDark">
                                    <div className="change-mode-icon">
                                        <img src="assets/images/icon/Dark.svg" alt=""/>
                                    </div>
                                    <span className="mode-name">Dark</span>
                                    <div className="chack-icon">
                                        <i className="fa-solid fa-check"></i>
                                    </div>
                                </div>
                                <div className="change-mode" onclick="setThemeMode('app-theme-gradien')" id="themeGradien">
                                    <div className="change-mode-icon">
                                        <img src="assets/images/icon/Gradient-icon.png" alt=""/>
                                    </div>
                                    <span className="mode-name">Gradien</span>
                                    <div className="chack-icon">
                                        <i className="fa-solid fa-check"></i>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>

                <div className="p-3">
                    <ul className="list-group">
                        <li className="list-group-item">
                            <h5 className="pb-3 teameTa">Choose Color Scheme
                            </h5>
                            <div className="theme-settings-switches">
                                <div className="theme-box">
                                    <div className="theme-color-holder switch-header-cs-className switch-sidebar-cs-className"
                                        id="colorDefault" data-className="" onclick="storeColorScheme('')">
                                        <div className="theme-color-holder-color bg-light"></div>
                                    </div>

                                    <div className="theme-color-holder switch-header-cs-className switch-sidebar-cs-className"
                                        id="bg-primary" data-className="bg-primary header-text-light sidebar-text-light"
                                        onclick="storeColorScheme('bg-primary')">
                                        <div className="theme-color-holder-color bg-primary"></div>
                                    </div>

                                    <div className="theme-color-holder switch-header-cs-className switch-sidebar-cs-className"
                                        id="bg-midnight-bloom"
                                        data-className="bg-midnight-bloom header-text-light sidebar-text-light"
                                        onclick="storeColorScheme('bg-midnight-bloom')">
                                        <div className="theme-color-holder-color bg-midnight-bloom"></div>
                                    </div>


                                    <div className="theme-color-holder switch-header-cs-className switch-sidebar-cs-className"
                                        id="bg-amy-crisp" data-className="bg-amy-crisp header-text-light sidebar-text-light"
                                        onclick="storeColorScheme('bg-amy-crisp')">
                                        <div className="theme-color-holder-color bg-amy-crisp"></div>
                                    </div>

                                    <div className="theme-color-holder switch-header-cs-className switch-sidebar-cs-className"
                                        id="bg-plum-plate"
                                        data-className="bg-plum-plate header-text-light sidebar-text-light"
                                        onclick="storeColorScheme('bg-plum-plate')">
                                        <div className="theme-color-holder-color bg-plum-plate"></div>
                                    </div>

                                    <div className="theme-color-holder switch-header-cs-className switch-sidebar-cs-className"
                                        id="bg-slick-carbon"
                                        data-className="bg-slick-carbon header-text-light sidebar-text-light"
                                        onclick="storeColorScheme('bg-slick-carbon')">
                                        <div className="theme-color-holder-color bg-slick-carbon"></div>
                                    </div>

                                    <div className="theme-color-holder switch-header-cs-className switch-sidebar-cs-className"
                                        id="bg-arielle-smile"
                                        data-className="bg-arielle-smile header-text-light sidebar-text-light"
                                        onclick="storeColorScheme('bg-arielle-smile')">
                                        <div className="theme-color-holder-color bg-arielle-smile"></div>
                                    </div>

                                    <div className="theme-color-holder switch-header-cs-className switch-sidebar-cs-className"
                                        id="bg-alternate" data-className="bg-alternate header-text-light sidebar-text-light"
                                        onclick="storeColorScheme('bg-alternate')">
                                        <div className="theme-color-holder-color bg-alternate"></div>
                                    </div>


                                    <div className="theme-color-holder switch-header-cs-className switch-sidebar-cs-className"
                                        id="bg-grow-early"
                                        data-className="bg-grow-early header-text-light sidebar-text-light"
                                        onclick="storeColorScheme('bg-grow-early')">
                                        <div className="theme-color-holder-color bg-grow-early"></div>
                                    </div>

                                    <div className="theme-color-holder switch-header-cs-className switch-sidebar-cs-className"
                                        id="bg-love-kiss" data-className="bg-love-kiss header-text-light sidebar-text-light"
                                        onclick="storeColorScheme('bg-love-kiss')">
                                        <div className="theme-color-holder-color bg-love-kiss"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="themeoptions-heading mt-3 borderCercle d-flex justify-content-between">
                                <div>Sidebar Options</div>
                                <button type="button"
                                    className="btn btn-outline-dark btn-sm ressetButton
                                switch-header-cs-className switch-sidebar-cs-className"
                                    data-className="" id="resetColor">
                                    Restore Default
                                </button>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="p-3">
                    <ul className="list-group">
                        <li className="list-group-item">
                            <div className="widget-content p-0">
                                <div className="widget-content-wrapper">
                                    <div className="switch has-switch switch-container-className" data-className="fixed-footer">
                                        <input type="checkbox" className="form-check-input" data-toggle="toggle"
                                            id="footerCheck" data-onstyle="success" onclick="toggleFooter()"/>
                                    </div>
                                    <div className="widget-content-left ms-3">
                                        <div className="widget-heading">Fixed Footer</div>
                                        <div className="widget-subheading">Makes the app footer bottom fixed, always
                                            visible!
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
   
         <div className="app-sidebar sidebar-shadow">
        <div className="scrollbar-sidebar pb-3">
          <div className="branding-logo mb-4 text-start px-3">
            <img src={logo10} alt=""/>
          </div>
          <div className="branding-logo-forMobile mb-4">
            <a href="/">
              <img src="http://admin.razinskills.com/assets/images/app-logo.svg" alt=""/>
            </a>
          </div>
          <div className="app-sidebar-inner">
         
      <div className="option" onClick={() => toggleOptions('option1')}>
        <NavLink to="/studentDashboard" activeClassName="active-link vertical-nav-menu">
          <i className="fa-solid fa-home menu-icon"></i>
          Dashboard
        </NavLink>
       
      </div>
      <div className="option" onClick={() => toggleOptions('option2')}>
        <NavLink  activeClassName="active-link vertical-nav-menu">
        <i className="fa-solid fa-gem menu-icon"></i>
                  Course Management
                
        </NavLink>
        {showOptions.option2 &&
          <div className="sub-options">
            <NavLink to="/category" activeClassName="active-link">
              <i className="fa-solid fa-swatchbook"></i>
              &nbsp;  Category
            </NavLink>
            <NavLink to="/DashBoardCourse" activeClassName="active-link">
              <i className="fa-solid fa-book-open-reader" ></i>
              &nbsp; All Course
            </NavLink>
            <NavLink to="/chapter" activeClassName="active-link">
              <i className="fa-solid fa-photo-film"></i>
              &nbsp; Chapter
            </NavLink>
          </div>
        }
      </div>
      <div className="option" onClick={() => toggleOptions('option3')}>
        <NavLink  activeClassName="active-link vertical-nav-menu">
        <i className="fa-solid fa-tasks menu-icon"></i>
          Enroll Managemant
        </NavLink>
        {showOptions.option3 &&
          <div className="sub-options">
            <NavLink to="/studentdash" activeClassName="active-link">
              <i className="fa-solid fa-swatchbook"></i>
              &nbsp;  Student 
            </NavLink>
            <NavLink to="/teacherdash" activeClassName="active-link">
              <i className="fa-solid fa-book-open-reader" ></i>
              &nbsp; Teacher
            </NavLink>
           
          </div>
        }
      </div>
      <div className="option" onClick={() => toggleOptions('option4')}>
        <NavLink  activeClassName="active-link vertical-nav-menu">
        <i className="fa-solid fa-file-lines menu-icon"></i>
          Admin Management
        </NavLink>
        {showOptions.option4 &&
          <div className="sub-options">
            <NavLink to="/createdashUser" activeClassName="active-link">
              <i className="fa-solid fa-swatchbook"></i>
              &nbsp;  Create User
            </NavLink>
            <NavLink to="/createdashcourse" activeClassName="active-link">
              <i className="fa-solid fa-book-open-reader" ></i>
              &nbsp; Create Course
            </NavLink>
            <NavLink to="/updatedashRole" activeClassName="active-link">
              <i className="fa-solid fa-photo-film"></i>
              &nbsp; Update Role
            </NavLink>
          </div>
        }
      </div>
      <div className="option" onClick={() => toggleOptions('option5')}>
        <NavLink  activeClassName="active-link vertical-nav-menu">
        <i className="fa-solid fa-money-bill-transfer menu-icon"></i>
          Transaction
        </NavLink>
       
      </div>
      <div className="option" onClick={() => toggleOptions('option6')}>
        <NavLink to="/studentdash" activeClassName="active-link vertical-nav-menu">
        <i className="fa-solid fa-users menu-icon"></i>
          Student
        </NavLink>
        
      </div>
      <div className="option" onClick={() => toggleOptions('option7')}>
        <NavLink  activeClassName="active-link vertical-nav-menu">
        <i className="fa-solid fa-credit-card menu-icon"></i>
          Payment Method
        </NavLink>
        {showOptions.option7 &&
          <div className="sub-options">
            <NavLink to="/category/list" activeClassName="active-link">
              <i className="fa-solid fa-swatchbook"></i>
              &nbsp;  Category
            </NavLink>
            <NavLink to="/DashBoardCourse" activeClassName="active-link">
              <i className="fa-solid fa-book-open-reader" ></i>
              &nbsp; All Course
            </NavLink>
            <NavLink to="/chapter/select_course" activeClassName="active-link">
              <i className="fa-solid fa-photo-film"></i>
              &nbsp; Chapter
            </NavLink>
          </div>
        }
      </div>
      <div className="option" onClick={() => toggleOptions('option8')}>
        <NavLink  activeClassName="active-link">
          <i className="fa-solid fa-gear menu-icon"></i>
          Settings
        </NavLink>
        {showOptions.option8 &&
          <div className="sub-options">
            <NavLink to="/user/edit/1" activeClassName="active-link">
              <i className="fa-solid fa-gear"></i>
            </NavLink>
            <button type="button" className="fullbtn hite-icon">
              <i className="fa-solid fa-expand"></i>
            </button>
            <NavLink to="/logout" activeClassName="active-link">
              <i className="fa-solid fa-power-off"></i>
            </NavLink>
          </div>
        }
      </div>
      <div className="option" onClick={() => toggleOptions('option9')}>
        <NavLink  activeClassName="active-link">
        <i className="fa-solid fa-bell menu-icon"></i>
          Notifications
        </NavLink>
        {showOptions.option9 &&
          <div className="sub-options">
            <NavLink to="/user/edit/1" activeClassName="active-link">
              <i className="fa-solid fa-gear"></i>
            </NavLink>
            <button type="button" className="fullbtn hite-icon">
              <i className="fa-solid fa-expand"></i>
            </button>
            <NavLink to="/logout" activeClassName="active-link">
              <i className="fa-solid fa-power-off"></i>
            </NavLink>
          </div>
        }
      </div>
    </div>
    </div>
    </div>
    </div>
  );
}

export default Sidebar;

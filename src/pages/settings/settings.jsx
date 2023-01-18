import React from "react"
import './settings.css'
import '../styleguide.css'

function Settings() {
    console.log('loaded App')
    return <Settings2 {...settingsData} />
}

export default Settings

function Settings2(props) {
    const {
        menuIconTopRight,
        dashboardIcon,
        energyCostsIcon,
        energyConsumptionIcon,
        carbonFootprintIcon,
        subtract,
        schneiderElectricLogo,
        spanText1,
        spanText2,
        spanText3,
        spanText4
    } = props

    return (
        <div className="container-center-horizontal">
            <div className="settings screen">
                <div className="overlap-group2">
                    <div className="overlap-group1">
                        <img src={menuIconTopRight} alt="dashboard icon" className="menu-icon-top-right" />
                        <img src={energyCostsIcon} alt="energy costs icon" className="sidebar-menu-item" />
                        <img src={energyConsumptionIcon} alt="energy consumption icon" className="sidebar-menu-item" />
                        <img src={carbonFootprintIcon} alt="carbon footprint icon" className="sidebar-menu-item" />
                        <div className="overlap-group">
                            <img src={subtract} alt="icon settings" className="icon-settings" />
                        </div>
                    </div>
                </div>
                <img src={schneiderElectricLogo} alt="schneider electric logo" className="schneider-electric-logo" />
                <div className="place aileron-regular-normal-white-16px">
                    <span className="aileron-regular-normal-white-16px">{spanText1}</span>
                </div>
                <div className="support aileron-regular-normal-white-16px">
                    <span className="aileron-regular-normal-white-16px">{spanText2}</span>
                </div>
                <div className="my-account-aileron-regular-normal-white-16px">
                    <span className="aileron-regular-normal-white-16px">{spanText3}</span>
                </div>
                <h1 className="page-title aileron-bold-white-25px">
                    <span className="aileron-bold-white-25px">{spanText4}</span>
                </h1>
            </div>
        </div>
    )
}

const settingsData = {
    menuIconTopRight: "menu-icon-top-right-1.png",
    dashboardIcon: "dashboard-icon-2.png",
    energyCostsIcon: "energy-costs-icon-1.png",
    energyConsumptionIcon: "energy-consumption-icon-1.png",
    carbonFootprintIcon: "carbon-footprint-icon-1.png",
    subtract: "subtract-1.png",
    schneiderElectricLogo: "schneider-electric-logo-2.png",
    spanText1: "home",
    spanText2: "support",
    spanText3: "my account",
    spanText4: "SETTINGS",
}
// Dependencies
import { FC } from "react";

// Components
import UserCard from "./UserCard";
import SidebarButton from "./Button";
import SidebarButtonsContainer from "./ButtonsContainer";


const Body: FC = () => {
  return (
    <div className="sidebar-body">
      <UserCard />
      <SidebarButtonsContainer title="Global" isCollapsed={true}>
        <SidebarButton title={"Dashboard"} icon="apps" active={true}></SidebarButton>
      </SidebarButtonsContainer>
      <SidebarButtonsContainer title="Examples" isCollapsed={true}>
        <SidebarButton title={"Charts"} icon="pie_chart" ></SidebarButton>
        <SidebarButton title={"Cards"} icon="playing_cards"></SidebarButton>
        <SidebarButton title={"Forms / Buttons"} icon="contract_edit"></SidebarButton>
        <SidebarButton title={"Colors / Fonts"} icon="palette"></SidebarButton>
      </SidebarButtonsContainer>
    </div>
  )
}

export default Body;

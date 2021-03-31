import React from 'react';
import {
    Button,
    Classes,
    Navbar,
    NavbarDivider,
    NavbarGroup,
    NavbarHeading
} from "@blueprintjs/core";

interface INavigation {
    mode : string
    title: string
}

const Navigation: React.FC<INavigation> = ({mode, title} : INavigation) => {
  

    return (
        <Navbar className={mode}>
            <NavbarGroup >
                <NavbarHeading className={Classes.ALIGN_RIGHT} >{title}</NavbarHeading>
                <NavbarDivider />
                <Button className={Classes.MINIMAL}  text="Main" />
                <Button className={Classes.MINIMAL}  text="Drone Paths" />
            </NavbarGroup>
        </Navbar>
    )
}

export default Navigation;

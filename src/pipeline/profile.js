import React from "react";
import { readProfile } from "../memory/profile.js";
import { render } from "ink";
import { ProfileUI } from "../renderer/components/ProfileUI.js";

export const showProfile = async () => {
    const profile = await readProfile();
    render(React.createElement(ProfileUI, {profile}));
}
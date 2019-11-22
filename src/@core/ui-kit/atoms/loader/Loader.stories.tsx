import React from "react";
import { Loader } from "@core/ui-kit";

export default { title: "Loader", component: Loader };

export const initial = () => <Loader />;
export const notCentered = () => <Loader isCentered={false} />;
export const withCustomCaption = () => <Loader>Caption</Loader>;

import React from "react";

export interface LayoutInterface {
	children: React.ReactNode;
	type?: string;
	text?: string;
}

export interface LayoutStateInterface {
	openDrawer: boolean;
}

'use client'

import React from "react";
import SearchContainer from "../components/home/searchContainer";
import CanteenList from "../components/home/canteenList";
import MenuList from "../components/home/menuList";

type Props = {};


export default function layout({}: Props) {
	return (
		<div>   
            <SearchContainer/>            
            <CanteenList/>
            <MenuList/>
		</div>
	);
}

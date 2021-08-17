import React from 'react';
import LinkBtn from "./link_btn";
import "../styles/global.css";

interface FooterProps {
	msg: string
};

export default function NavBar(props: FooterProps) {
	const theory_links = [
		["CS5401 (DBMS)","https://patnanit.sharepoint.com/sites/July_2021_CS5401DatabaseManagementSystems/Shared%20Documents/Forms/AllItems.aspx?RootFolder=%2Fsites%2FJuly%5F2021%5FCS5401DatabaseManagementSystems%2FShared%20Documents%2FGeneral&FolderCTID=0x012000F222092D50505D47BD65019273A2B56B"],
		["CS5402 (AI)","https://patnanit.sharepoint.com/sites/July_2021_CS5402ArtificialIntelligence/Shared%20Documents/Forms/AllItems.aspx?RootFolder=%2Fsites%2FJuly%5F2021%5FCS5402ArtificialIntelligence%2FShared%20Documents%2FGeneral&FolderCTID=0x012000F222092D50505D47BD65019273A2B56B"],
		["CS5403 (Networks)","https://patnanit.sharepoint.com/sites/July_2021_CS5403ComputerNetworks/Shared%20Documents/Forms/AllItems.aspx?RootFolder=%2Fsites%2FJuly%5F2021%5FCS5403ComputerNetworks%2FShared%20Documents%2FGeneral&FolderCTID=0x012000F222092D50505D47BD65019273A2B56B"],
		["CS5404 (Compiler)","https://patnanit.sharepoint.com/sites/July_2021_CS5404CompilerDesign/Shared%20Documents/Forms/AllItems.aspx?RootFolder=%2Fsites%2FJuly%5F2021%5FCS5404CompilerDesign%2FShared%20Documents%2FGeneral&FolderCTID=0x012000F222092D50505D47BD65019273A2B56B"],
		["CS5469 (Microprocessor)","https://patnanit.sharepoint.com/sites/July_2021_CS5469MicroprocesorandMicrocontrollers/Shared%20Documents/Forms/AllItems.aspx?RootFolder=%2Fsites%2FJuly%5F2021%5FCS5469MicroprocesorandMicrocontrollers%2FShared%20Documents%2FGeneral&FolderCTID=0x012000F222092D50505D47BD65019273A2B56B"],
	];

	const lab_links = [
		["CSL5401","https://patnanit.sharepoint.com/sites/July_2021_CSL5401DatabaseManagementSystemsLab/Shared%20Documents/Forms/AllItems.aspx?RootFolder=%2Fsites%2FJuly%5F2021%5FCSL5401DatabaseManagementSystemsLab%2FShared%20Documents%2FGeneral&FolderCTID=0x012000F222092D50505D47BD65019273A2B56B"]
		["CSL5402","https://patnanit.sharepoint.com/sites/July_2021_CSL5402ArtificialIntelligenceLab/Shared%20Documents/Forms/AllItems.aspx?RootFolder=%2Fsites%2FJuly%5F2021%5FCSL5402ArtificialIntelligenceLab%2FShared%20Documents%2FGeneral&FolderCTID=0x012000F222092D50505D47BD65019273A2B56B"]
		["CSL5403","https://patnanit.sharepoint.com/sites/July_2021_CSL5403ComputerNetworkslab/Shared%20Documents/Forms/AllItems.aspx?RootFolder=%2Fsites%2FJuly%5F2021%5FCSL5403ComputerNetworkslab%2FShared%20Documents%2FGeneral&FolderCTID=0x012000F222092D50505D47BD65019273A2B56B"]
		["CSL5404","https://patnanit.sharepoint.com/sites/July_2021_CSL5404CompilerDesignLab/Shared%20Documents/Forms/AllItems.aspx?RootFolder=%2Fsites%2FJuly%5F2021%5FCSL5404CompilerDesignLab%2FShared%20Documents%2FGeneral&FolderCTID=0x012000F222092D50505D47BD65019273A2B56B"]
	];

	return (
		<footer className="centered">
			<div style={{padding: '5px', fontSize: 'large'}}>
				{
					theory_links.map(p => (
						<LinkBtn name={p[0]} link={p[1]} />
					))
				}
			</div>
			<hr style={{width: '60%'}} />
			<div style={{padding: '5px', fontSize: 'large'}}>
				{
					lab_links.map(p => (
						<LinkBtn name={p[0]} link={p[1]} />
					))
				}
			</div>
			<hr style={{width: '60%'}} />
			<div>
				{props.msg}
			</div>
		</footer>
	);
}

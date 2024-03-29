import io from "socket.io-client";
import React, {useEffect, useState} from "react";
import Leaderboard from "./Leaderboard";
import QRButton from "./QRButton";

const socket = io.connect("http://localhost:3001");
function Navbar({onToggleScanner, handleOpenLB}) {
    //
    // const [showLeaderboard, setShowLeaderboard] = useState(false);
    // const [leaderboardData, setLeaderboardData] = useState([]);
    //
    // useEffect(() => {
    //     socket.on("point_update", (data) => {
    //         setLeaderboardData(leaderboardData);
    //     });
    //
    // }, [socket]);
    //
    // // const leaderboardTemp = [
    // //     { username: 'Alice', score: 1200 },
    // //     { username: 'Bob', score: 950 },
    // //     { username: 'Charlie', score: 800 },
    // //     { username: 'David', score: 1100 },
    // // ];
    //
    //
    // const handleLeaderboardClick = () => {
    //     setShowLeaderboard(true);
    // };
    // const handleCloseLeaderboard = () => {
    //     setShowLeaderboard(false);
    // };

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <a className="btn btn-ghost text-xl">RoomRival</a>
            </div>
            <div className="navbar-center lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li onClick={onToggleScanner} style={{backgroundColor:"white"}}><QRButton/></li>
                </ul>
            </div>
            <div className="navbar-end">
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li onClick= {handleOpenLB}><a>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                                 stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                            </svg>
                            Leaderboard</a></li>
                    </ul>
                    {/*{showLeaderboard && (*/}
                    {/*    <Leaderboard onClose={handleCloseLeaderboard} leaderboardData={leaderboardData} />*/}
                    {/*)}*/}
                </div>
            </div>
        </div>
    )
}

export default Navbar;


// <div className="navbar bg-base-100">
//     <div className="flex-1">
//         <a className="btn btn-ghost text-xl">RoomRival</a>
//     </div>
//     <div className="flex-none">
//         <ul className="menu menu-horizontal px-1">
//             <li><a>
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
//                      stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
//                           d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
//                 </svg>
//                 Leaderboard</a></li>
//         </ul>
//     </div>
// </div>
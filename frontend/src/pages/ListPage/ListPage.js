// import React, { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { useParams } from "react-router-dom";
// import "./ListPage.css";
// import { Link } from "react-router-dom";
// import {
//   showUpAction,
//   showBelowAction,
// } from "../../redux/searchCoin/searchAction";
// import AdvanceFilter from "../../../AdvanceFilter/AdvanceFilter";

// const ListPage = () => {
//   const { id } = useParams();
//   const coins = useSelector((store) => store.coinsReducer.coins);
//   const filteredCoins = coins.filter((coin) => coin.groupId === id);
//   const [searchLine, setSearchLine] = useState("");
//   const searchLineChangeHandler = (e) => {
//     setSearchLine(e.target.value);
//   };
//   const showUpButton = useSelector((store) => store.searchReducer.showUp);
//   const showBelowButton = useSelector((store) => store.searchReducer.showBelow);
//   const dispatch = useDispatch();

//   const showUp = () => {
//     dispatch(showUpAction());
//   };
//   const showBelow = () => {
//     dispatch(showBelowAction());
//   };
//   return (
//     <div className="list-page">
//       <div className="search-box">
//         <div className="search-box__header">
//           <p>List of the coins</p>
//         </div>
//         <div className="coin-group__back__button">
//           <Link to="/">HomePage</Link>
//           <p>--List of the coins</p>
//         </div>

//         <div className="search-box__form">
//           <label className="search-box__form-label">
//             Input field
//             <input
//               value={searchLine}
//               type="text"
//               className="search-box__form-input"
//               onChange={searchLineChangeHandler}
//             />
//           </label>
//           <button
//             type="submit"
//             className="search-box__form-submit"
//             disabled={!searchLine}
//           >
//             Search
//           </button>
//         </div>
//       </div>
// <AdvanceFilter/>
//       <div className="coins_container">
//         <ul>
//           {filteredCoins.map((coin) => (
//             <li key={coin.id}>
//               <div className="coins">
//                 <img className="coin-image" src={image_url} alt={coin_name} />
//                 <div>
//                   <p className="coin_name">{coin_name}</p>
//                   <p className="description_s">{description_s}</p>
//                 </div>
//               </div>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default ListPage;

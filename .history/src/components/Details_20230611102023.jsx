// import React, { useEffect, useState } from "react";
// import { Link, useParams } from "react-router-dom/dist";
// import Spinner from "./Spinner";
// import axios from "axios";
// const Details = () => {
//   const [user, setUser] = useState(null);
//   const [isLoding, setIsLoding] = useState(true);
//   //console.log(user);
//   const { id } = useParams();
//   //console.log(id);
//   useEffect(() => {
//     const getUser = async () => {
//       try {
//         // Make an HTTP GET request to retrieve user data from the API
//         const res = await axios.get(
//           "https://jsonplaceholder.typicode.com/users"
//         );
//         setIsLoding(false);
//         // Find the user object with the matching ID from the response data
//         setUser(res.data.find((el) => el.id === id));
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     // Call the getUser function when the component mounts or when the ID changes
//     getUser();
//   }, [getUser]);

//   return (
//     <div>
//       {/* Link to the home page */}
//       <Link to="/">
//         {/* Display a loading spinner and text while the data is being fetched */}
//         <button>home</button>
//       </Link>
//       {isLoding ? (
//         <div>
//           <Spinner />
//           <h1>Loading...</h1>
//         </div>
//       ) : (
//         // If the data has been fetched, display the user's name

//         user && (
//           <>
//             <h1>name :{user.name}</h1>
//           </>
//         )
//       )}
//       Details
//     </div>
//   );
// };

// export default Details;

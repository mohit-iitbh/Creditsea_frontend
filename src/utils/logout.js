import axios from "axios";

//logout funtion
const logout = () => {
  axios
    .post(
      `${process.env.REACT_APP_API_URL}/logout`,
      {},
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    )
    .then(() => {
      console.log("Logged out successfully");
      localStorage.clear();
      window.location.href = "/login";
    })
    .catch((error) => {
      console.error("Error logging out: ", error);
    });
};

export default logout;
import { Link } from "react-router";
const HomePage = () => {
    return (
        <div>
        <h1>Home Page</h1>
        <p>Syarat dan ketentuan</p>

        <Link to="/terms">Terms</Link>
        </div>
    );

}
export default HomePage;
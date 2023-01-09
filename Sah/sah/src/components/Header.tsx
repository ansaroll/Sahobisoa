import { AppBar } from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => {
    return ( 
        <AppBar>
            <Link to="/">Accueil</Link>
            <Link to="/survey">Questionnaire</Link>
        </AppBar>
     );
}
 
export default Header;
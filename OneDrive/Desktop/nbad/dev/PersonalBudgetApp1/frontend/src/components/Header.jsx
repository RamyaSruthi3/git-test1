import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import NavigationLink from "./shared/NavigationLink";
import { useAuth } from "../context/AuthContext";


const Header = () => {
  const auth = useAuth();
  return (
    
      <AppBar
        sx={{ bgcolor: "#4d5791", position: "static", boxShadow: "none" }}
      >
        <Toolbar sx={{ display: "flex", justifyContent:"end" }}>
          <div>
            {auth?.isLoggedIn ? (
              <>
                <NavigationLink
                  to="/"
                  text="logout"
                  onClick={auth.logout}
                />
              </>
            ) : (
              <>
                <NavigationLink
                  to="/login"
                  text="Login"
                />
                <NavigationLink
                
                  to="/signup"
                  text="Signup"
                />
              </>
            )}
          </div>
        </Toolbar>
        
      </AppBar>
      
 
    
  
  );
    
 
};

export default Header;

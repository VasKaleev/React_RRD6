import { useLocation } from "react-router-dom";
import {Link} from 'react-router-dom';
function Users() {
  let url = useLocation();
  console.log(url);
    return (
      <div>  
      <h1>Users</h1> 
      <ul>
        <li><Link to={`${url.pathname}/ivanov`}>Ivanov</Link></li>
        <li><Link to={`${url.pathname}/petrov`}>Petrov</Link></li> 
      </ul>
      </div>     
    );
  }
  
  export default Users;
import classes from "./Layout.css";
import TopNav from "./MainNavbar";

function Layout(props) {
  return (
    <div className="Layout">
      <TopNav />
      <main>{props.children}</main>
    </div>
  );
}

export default Layout;

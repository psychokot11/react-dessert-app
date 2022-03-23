import classes from "./Layout.module.css";
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

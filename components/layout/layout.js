import MainHeader from "./main-heade";


const Layout = (props) => {
    return (
        <>
            <MainHeader />
            <main>{props.children}</main>
        </>
    );
};

export default Layout;
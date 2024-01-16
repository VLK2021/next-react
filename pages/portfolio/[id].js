import {useRouter} from "next/router";


const PortfolioProjectName = () => {
    const router = useRouter();

    console.log(router.pathname);
    console.log(router.query);


    return (
        <div>
            PORTFOLIOPROJECTNAME
        </div>
    );
};

export default PortfolioProjectName;
import path from "path";
import fs from "fs/promises";


function ProductDetailPage(props) {
    const {loadedProduct} = props;

    return <>
        <h1>{loadedProduct.title}</h1>
        <p>{loadedProduct.description}</p>
    </>
}

// export async function getData() {
//     const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
//     const jsonData = await fs.readFile(filePath, 'utf-8');
//     const data = JSON.parse(jsonData);
//
//     return data;
// }


export async function getStaticProps(context) {
    const {params} = context;
    const productId = params.pid;

    const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
    const jsonData = await fs.readFile(filePath, 'utf-8');
    const data = JSON.parse(jsonData);

    // const data = await getData();
    const product = data.products.find(product => product.id === productId);

    return {
        props: {
            loadedProduct: product,
        }
    };
}

export async function getStaticPaths() {
    // const data = await getData();

    const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
    const jsonData = await fs.readFile(filePath, 'utf-8');
    const data = JSON.parse(jsonData);

    const ids = data.products.map(product => product.id);
    const pathsWithParams = ids.map((id) => ({params: {pid: id}}));


    return {
        paths: pathsWithParams,
        fallback: false,
    };
}

export default ProductDetailPage;
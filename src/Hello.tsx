const Hello: React.FC<{ name: string }> = ({ name }) => {
    return <h1 className="text-3xl">Hello, {name}!</h1>;
};


export default Hello;
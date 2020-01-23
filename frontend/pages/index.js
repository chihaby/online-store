import Link from 'next/link';

const Home = props => (
    <div>
        <p>Home from index</p>
        <Link href="/sell">
            <a>to sell from index</a>
        </Link>
        
    </div>
);

export default Home;
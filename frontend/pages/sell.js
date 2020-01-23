import Link from 'next/link';

const Sell = props => (
    <div>
        <p>Sell from sell page</p>
        <Link href="/">
            <a>to home from sell page</a>
        </Link>
    </div>
);

export default Sell;
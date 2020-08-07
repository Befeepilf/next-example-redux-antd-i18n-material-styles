import Link from 'next/link';
import Clock from './Clock.jsx';

export default function Page(props) {
    return (
        <div>
            <h1>{props.title}</h1>

            <Clock/>

            <nav>
                <Link href={props.linkTo}>
                    <a>Navigate</a>
                </Link>
                <Link href="/image">
                    <a>See an image</a>
                </Link>
            </nav>
        </div>
    );
}
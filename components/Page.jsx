import Link from 'next/link';
import {withTranslation} from '../i18n.js';
import Clock from './Clock.jsx';

function Page({t, ...props}) {
    return (
        <div>
            <h1>{props.title}</h1>

            <Clock/>

            <nav>
                <Link href={props.linkTo}>
                    <a>{t('navigate')}</a>
                </Link>
                <Link href="/image">
                    <a>{t('to-image')}</a>
                </Link>
            </nav>
        </div>
    );
}

export default withTranslation('page')(Page);
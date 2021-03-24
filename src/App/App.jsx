import { AboutMe } from '../components/AboutMe/AboutMe';
import { Header } from '../components/Header/Header';
import { Welcome } from '../components/Welcome/Welcome';
import '../style/main.scss';

export const App = () => {
    return (
        <section>
            <div className="container">
                <Header />
                <Welcome />
                <AboutMe />
            </div>
        </section>
    );
}

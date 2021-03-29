import { AboutMe } from '../components/AboutMe/AboutMe';
import { Header } from '../components/Header/Header';
import { MyKnowledge } from '../components/MyKnowledge/MyKnowledge';
import { Welcome } from '../components/Welcome/Welcome';
import '../style/main.scss';

export const App = () => {
    return (
        <section>
            <div className="container">
                <Header />
                <Welcome />
                <AboutMe />
                {/* <MyKnowledge /> */}
                <p style={{marginTop: '1150px'}}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum ipsam perferendis fuga esse amet repellendus fugiat! Dignissimos maiores minus nam mollitia qui velit explicabo necessitatibus, dolorum nemo tempore odit, ipsa accusamus et ab dolore similique maxime quisquam molestias sint cumque?
                </p>
            </div>
        </section>
    );
}

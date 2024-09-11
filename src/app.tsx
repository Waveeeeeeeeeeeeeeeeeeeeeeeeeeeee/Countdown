import { SApp, SHeader } from './assets/styles/app.styles';
import { Countdown } from './components/Countdown';

function App() {
    return (
        <SApp>
            <SHeader>
                <Countdown></Countdown>
            </SHeader>
        </SApp>
    );
}

export default App;

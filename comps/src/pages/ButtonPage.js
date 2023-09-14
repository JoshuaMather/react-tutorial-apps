import Button from "../components/Button";
import { GoBell, GoCloud, GoDatabase } from 'react-icons/go';

function ButtonPage() {
    const handleClick = () => {
        console.log('Click');
    };

    return (
        <div>
            <div>
                <Button primary rounded outline className="mb-5" onClick={handleClick}>
                    <GoBell />
                    Button 1
                </Button>
            </div>
            <div>
                <Button danger outline>
                    <GoCloud />
                    Button 2
                </Button>
            </div>
            <div>
                <Button warning>
                    <GoDatabase />
                    Button 3
                </Button>
            </div>
            <div>
                <Button success outline>
                    Button 4
                </Button>
            </div>
            <div>
                <Button secondary rounded>
                    Button 5
                </Button>
            </div>
        </div>
    )
}

export default ButtonPage;
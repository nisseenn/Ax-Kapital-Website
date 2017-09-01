import { render } from 'react-dom'
import {
    MorphIcon,
    CloseButton,
    NavButton,
    PlusButton,
} from 'react-svg-buttons'

const Demo = () => (
    <div>
        <MorphIcon type="thunderbolt" />
        <CloseButton />
        <NavButton direction="right" opened={false} />
        <PlusButton />
    </div>
)

render(<Demo />, document.getElementById('demo'))

import { withA11y } from '@storybook/addon-a11y';
import { document, console } from 'global';
import { storiesOf, addDecorator, addParameters} from '@storybook/html';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import { linkTo } from '@storybook/addon-links'


storiesOf('Form', module)
  .add('heading', () => '<h1>Hello World</h1>')
  .add('button', () => {
    const button = document.createElement('button');
    button.type = 'button';
    button.innerText = 'Hello Button';
    button.addEventListener('click', e => console.log(e));
    return button;
  });
import { withA11y } from '@storybook/addon-a11y';
import { document, console } from 'global';
import { storiesOf, addDecorator, addParameters} from '@storybook/html';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import { linkTo } from '@storybook/addon-links'
addDecorator(withA11y);

const storiesb = storiesOf('Storybook Knobs', module);
storiesb.addDecorator(withKnobs)


storiesb
  .add('buttonnew', () => {
    const button = document.createElement('button');
    const test1 = text('Label', 'Hello Storybookdfdfd')
    button.style.color = 'darkRed';
    button.style.backgroundColor = 'red';
    button.type = 'button';
    button.innerText = test1;
    
    button.addEventListener('click', e =>  linkTo('Storybook Knobs', 'heading2'));
    return button },
    {
      notes: 'A very simple example of addon notes for button',
    } )

    .add('with emoji', () => {
        const button = document.createElement('button');
        button.innerText = '😀 😎 👍 💯';
        return button;
      })
import { withA11y } from '@storybook/addon-a11y';
import { document, console } from 'global';
import { storiesOf, addDecorator, addParameters} from '@storybook/html';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import { linkTo } from '@storybook/addon-links'

addDecorator(withA11y);
//addParameters({ viewport: { viewports: newViewports } });


const stories = storiesOf('Storybook Knobs', module);
stories.addDecorator(withKnobs)
.add('heading2', () => '<h1>{{text}}</h1>')

storiesOf('Demo', module)
  .add('heading', () => '<h1>Hello World</h1>')
  .add('button', () => {
    const button = document.createElement('button');
    button.type = 'button';
    button.innerText = 'Hello Button';
    button.addEventListener('click', e => console.log(e));
    return button;
  });

  stories
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

  .add('heading', () => '<h1>Hello Worldssss</h1>')
  .add('button', () => {
    const button = document.createElement('button');
    button.type = 'button';
    button.innerText = text('Hello Button');
    button.addEventListener('click', e => console.log(e));
    return button } )
    
    .add('with text', () => {
      
      '<button class="btn">{{text}}</button>'})
    .add('with emoji', () => {
      const button = document.createElement('button');
      button.innerText = '😀 😎 👍 💯';
      return button;
    })
    .add('button1', () => {
      const button = document.createElement('button');
      button.type = 'button';
      button.innerText = text('Label', 'Hello Storybookkkk');
      button.addEventListener('click', e => console.log(e));
      return button } )
      .add('with a button', () => ({
        components: { MyButton },
        props: {
          isDisabled: {
            default: boolean('Disabled', false)
          },
          text: {
            default: text('Text', 'Hello Storybook')
          }
        },
        template: `<MyButton :isDisabled="isDisabled">{{ text }}</MyButton>`
      }));




 
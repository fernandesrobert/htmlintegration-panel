import { PanelPlugin } from '@grafana/data';
import { SimpleOptions } from './types';
import { SimplePanel } from './components/SimplePanel';

export const plugin = new PanelPlugin<SimpleOptions>(SimplePanel).setPanelOptions((builder) => {
  return builder
    .addTextInput({
      path: 'htmlCode',
      name: 'HTML Code',
      description: 'Enter your HTML code here',
      defaultValue: '<div>Hello Grafana!</div>',
    })
    .addTextInput({
      path: 'cssCode',
      name: 'CSS Code',
      description: 'Enter your CSS code here',
      defaultValue: 'div { color: red; }',
    });
});

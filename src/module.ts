import { PanelPlugin } from '@grafana/data';
import RenderedContent from './components/RenderedContent';

export const plugin = new PanelPlugin<RenderedContentProps>(RenderedContent);

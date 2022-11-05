import { Title as TitleComponent } from '../components';

export default {
  title: 'Components/Title',
  component: TitleComponent,
};

export const Title = (args) => <TitleComponent {...args} />;

import type { NextPage } from 'next';
import { Button, Htag, P, Tag } from '../components';

const Home: NextPage = () => {
  return (
    <>
      <Htag tag='h1'>Text</Htag>
      <Button appearance='primary' arrow='right'>Button</Button>
      <Button appearance='ghost' arrow='down'>Button</Button>
      <P size="l">Big</P>
      <P>Default</P>
      <P size='s'>Small</P>
      <Tag size='s'>Tag1</Tag>
      <Tag size='m' color='green' href="1212">Tag2</Tag>
    </>
  );
};

export default Home;
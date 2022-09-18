import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { Button, Htag, P, Tag, Rating } from '../components';
import { withLayout } from '../layout/Layout';

const Home: NextPage = () => {
  const [rating, setRating] = useState<number>(4);

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
      <Rating rating={rating} isEditable setRating={setRating}></Rating>
    </>
  );
};

export default withLayout(Home);
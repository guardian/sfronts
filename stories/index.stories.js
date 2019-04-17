import React from 'react';
import { css, cx } from 'emotion';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withKnobs, text, select, number } from '@storybook/addon-knobs';

import { Button, Welcome } from '@storybook/react/demo';
import Container, { anchors } from './Container';

storiesOf('Container', module)
	.addDecorator(withKnobs)
	.add('1x', () => (
		<div
			className={css({
				width: 400,
				height: 400,
				'& > *': {
					width: '100%',
					height: '100%',
				},
			})}
		>
			<Container
				split={number('Split', 50)}
				anchor={select('Anchor', anchors)}
				scale={number('Scale', 1)}
				padding={number('Padding', 0)}
			/>
		</div>
	));

storiesOf('Welcome', module).add('to Storybook', () => (
	<Welcome showApp={linkTo('Button')} />
));

storiesOf('Button', module)
	.add('with text', () => (
		<Button onClick={action('clicked')}>Hello Button</Button>
	))
	.add('with some emoji', () => (
		<Button onClick={action('clicked')}>
			<span role="img" aria-label="so cool">
				😀 😎 👍 💯
			</span>
		</Button>
	));

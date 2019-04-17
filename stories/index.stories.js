import React from 'react';
import { css, cx } from 'emotion';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withKnobs, select, number, boolean } from '@storybook/addon-knobs';

import { Button, Welcome } from '@storybook/react/demo';
import Container, { anchors, textAnchors } from './Container';

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
				gridlines={boolean('Gridlines', true)}
				split={number('Split', 50, { range: true, min: 10, max: 90 })}
				textWidth={number('Text width', 50, { range: true, min: 0, max: 200 })}
				anchor={select('Anchor', anchors, anchors[0])}
				textAnchor={select('Text anchor', textAnchors, textAnchors[1])}
				scale={number('Scale', 1, {
					range: true,
					min: 0,
					max: 2,
					step: 0.01,
				})}
				padding={[
					number('Image translate X', 0, {
						range: true,
						min: -100,
						max: 100,
						step: 1,
					}),
					number('Image translate Y', 0, {
						range: true,
						min: -100,
						max: 100,
						step: 1,
					}),
				]}
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

import React from 'react';
import { css, cx } from 'emotion';
import { palette } from '@guardian/pasteup/palette';
import { boolean } from '@storybook/addon-knobs';

const anchors = ['left', 'right', 'top', 'bottom'];
const textAnchors = ['start', 'center', 'end'];

const metrics = {
	gutter: 10,
	baseline: 4,
};

const Text = ({ children, className }) => (
	<div className={className}>
		<h2 style={{ margin: 0 }}>{children}</h2>
	</div>
);

const getFlexForTextAnchor = textAnchor => {
	if (textAnchor === 'start')
		return {
			alignSelf: 'flex-start',
		};
	if (textAnchor === 'end')
		return {
			alignSelf: 'flex-end',
		};
};

const getFlexBoxForAnchor = anchor => {
	if (anchor === 'left')
		return {
			flexDirection: 'row-reverse',
		};
	if (anchor === 'top')
		return {
			flexDirection: 'column-reverse',
		};
	if (anchor === 'bottom')
		return {
			flexDirection: 'column',
		};
};

const styles = ({ anchor, gridlines }) =>
	css({
		overflow: 'hidden',
		background: palette.brand.main,
		color: palette.highlight.main,
		display: 'flex',
		alignItems: 'center',
		padding: `${metrics.baseline}px ${metrics.gutter}px`,
		justifyContent: 'flex-end',
		...getFlexBoxForAnchor(anchor),
		...(gridlines
			? {
					'& > *': {
						boxShadow: 'inset 0 0 0 1px rgba(255,255,255,.25)',
					},
			  }
			: {}),
	});

const Container = ({
	anchor,
	textAnchor,
	textWidth,
	split,
	scale,
	padding,
	gridlines,
}) => (
	<div className={styles({ anchor, gridlines })}>
		<div
			className={css({
				flex: `1 1 0`,
				transform: `scale(${scale}) translateX(${padding[0]}%) translateY(${
					padding[1]
				}%)`,
			})}
		>
			<img src="http://pngimg.com/uploads/avocado/avocado_PNG15489.png" />
		</div>
		<div
			className={css({
				flex: `0 0 ${split}%`,
				...getFlexForTextAnchor(textAnchor),
			})}
		>
			<Text
				className={css({
					width: textWidth + '%',
				})}
			>
				Avocado thief on the loose
			</Text>
		</div>
	</div>
);

export { anchors, textAnchors };
export default Container;

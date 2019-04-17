import React from 'react';
import { css, cx } from 'emotion';
import { palette } from '@guardian/pasteup/palette';

const anchors = ['left', 'right', 'top', 'bottom'];

const metrics = {
	gutter: 10,
	baseline: 4,
};

const Text = ({ children, className }) => (
	<div className={className}>
		<h2>{children}</h2>
	</div>
);

const getFlexBoxForAnchor = anchor => {
	if (anchor === 'right')
		return {
			justifyContent: 'flex-end',
		};
	if (anchor === 'left')
		return {
			justifyContent: 'flex-end',
			flexDirection: 'row-reverse',
		};
	if (anchor === 'top')
		return {
			justifyContent: 'flex-end',
			flexDirection: 'column-reverse',
		};
	if (anchor === 'bottom')
		return {
			justifyContent: 'flex-end',
			flexDirection: 'column',
		};
};

const styles = ({ anchor }) =>
	css({
		overflow: 'hidden',
		background: palette.brand.main,
		color: palette.highlight.main,
		display: 'flex',
		alignItems: 'center',
		padding: `${metrics.baseline}px ${metrics.gutter}px`,
		...getFlexBoxForAnchor(anchor),
	});

const Container = ({ anchor, split, scale, padding }) => (
	<div className={styles({ anchor, split })}>
		<div
			className={css({
				flex: `1 1 0`,
				transform: `scale(${scale})`,
				padding,
			})}
		>
			<img src="http://pngimg.com/uploads/avocado/avocado_PNG15489.png" />
		</div>
		<Text
			className={css({
				flex: `0 0 ${split}%`,
			})}
		>
			Avocado thief on the loose
		</Text>
	</div>
);

export { anchors };
export default Container;

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { cover } from '@wordpress/icons';

const variations = [
	{
		name: 'cover',
		title: __( 'Cover' ),
		description: __(
			'Add an image or video with a text overlay — great for headers.'
		),
		attributes: { layout: { type: 'constrained' } },
		isDefault: true,
		scope: [ 'block', 'inserter', 'transform' ],
		isActive: ( blockAttributes ) =>
			! blockAttributes.layout ||
			! blockAttributes.layout?.type ||
			blockAttributes.layout?.type === 'constrained',
		icon: cover,
	},
];

export default variations;

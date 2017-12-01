import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledText = styled.p.attrs({
		/*color: ({ color }) => color === 'white' ? 'white' : 
			color === 'light' ? 'rgb(117, 117, 117)' : 'rgb(80, 80, 80)',*/
		color: ({ type }) => {
				if (type === 'body-title') return 'rgb(117, 117, 117)';
				else if (type === 'page-header-title') return 'white';
				return 'black';
		},
		margin: ({ type }) => {
			if (type === 'body-title') return '6.4rem 0 3.2rem 3.2rem';
			return 0;
		}
	})`
		align-self: center;
		color: ${props => props.color}; 
		display: inline-flex;
		font-size: 2.4rem;
  		margin: ${props => props.margin};
		position: relative;
`;

const Text = ({ children, color, type }) => {
    return (
		<StyledText type={type}>{children}</StyledText>
    );
};

Text.propTypes = {
	color: PropTypes.string,
	type: PropTypes.string,
}

export default Text;
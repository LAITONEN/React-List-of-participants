import styled from 'styled-components';

export const BackdropDiv = styled.div`
	background-color: rgba(0, 0, 0, 0.5);
	height: 100%;
	&:hover {
		cursor: pointer;
	}
	left: 0;
	position: fixed;
	top: 0;
	width: 100%;
	z-index: 100;
`;
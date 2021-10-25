import { css } from '@emotion/react';

export default theme => css`
    .nav-links {
	    display: flex;
        flex-direction: row;
        
	    a {
		    text-decoration: none;
            color: white;
		    transition: color ease-in-out 0.2s;
		    
		    &.active {
			    font-weight: bold;
		    }
		    &:hover {
			    color: red;
		    }
	    }
    }

    background: green;
    color: blue;
`;

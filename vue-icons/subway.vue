
    <template>
      <svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
	<g clipPath="url(#clip0_2_19597)">
		<path d="M24 0H0V24H24V0Z" fill="white" fillOpacity="0.01"/>
		<path d="M19 3H5C4.44772 3 4 3.44772 4 4V15C4 15.5523 4.44772 16 5 16H19C19.5523 16 20 15.5523 20 15V4C20 3.44772 19.5523 3 19 3Z" stroke="#333333" strokeWidth="2"/>
		<path d="M7 14.5C7.55228 14.5 8 14.0523 8 13.5C8 12.9477 7.55228 12.5 7 12.5C6.44772 12.5 6 12.9477 6 13.5C6 14.0523 6.44772 14.5 7 14.5Z" fill="#333333"/>
		<path d="M17 14.5C17.5523 14.5 18 14.0523 18 13.5C18 12.9477 17.5523 12.5 17 12.5C16.4477 12.5 16 12.9477 16 13.5C16 14.0523 16.4477 14.5 17 14.5Z" fill="#333333"/>
		<path d="M17 6H7V11H17V6Z" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
		<path d="M16 16L20 20.5" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
		<path d="M8.5 16L4 20.5" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
	</g>
	<defs>
		<clipPath id="clip0_2_19597">
			<rect height="24" width="24" fill="white"/>
		</clipPath>
	</defs>
</svg>
    </template>
    <script>
    export default {
      name: 'subway',
      props: {
        width: {
          type: String,
          default: '24px'
        },
        height: {
          type: String,
          default: '24px'
        }
      }
    };
    </script>
  
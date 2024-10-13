
    <template>
      <svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
	<g clipPath="url(#clip0_2_20651)">
		<path d="M24 0H0V24H24V0Z" fill="white" fillOpacity="0.01"/>
		<path d="M7.5 6L9 3H15L16.5 6H7.5Z" stroke="#333333" strokeLinejoin="round" strokeWidth="2"/>
		<path d="M20.5 6H3.5C2.67157 6 2 6.67157 2 7.5V19.5C2 20.3284 2.67157 21 3.5 21H20.5C21.3284 21 22 20.3284 22 19.5V7.5C22 6.67157 21.3284 6 20.5 6Z" stroke="#333333" strokeLinejoin="round" strokeWidth="2"/>
		<path d="M12 17.5C14.2092 17.5 16 15.7092 16 13.5C16 11.2908 14.2092 9.5 12 9.5C9.79085 9.5 8 11.2908 8 13.5C8 15.7092 9.79085 17.5 12 17.5Z" stroke="#333333" strokeLinejoin="round" strokeWidth="2"/>
	</g>
	<defs>
		<clipPath id="clip0_2_20651">
			<rect height="24" width="24" fill="white"/>
		</clipPath>
	</defs>
</svg>
    </template>
    <script>
    export default {
      name: 'camera',
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
  
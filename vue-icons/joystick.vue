
    <template>
      <svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
	<g clipPath="url(#clip0_2_20154)">
		<path d="M24 0H0V24H24V0Z" fill="white" fillOpacity="0.01"/>
		<path d="M22 16.5H2V21.5H22V16.5Z" stroke="#333333" strokeLinejoin="round" strokeWidth="2"/>
		<path d="M19 13H13V16.5H19V13Z" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
		<path d="M9 7C10.3807 7 11.5 5.88071 11.5 4.5C11.5 3.11929 10.3807 2 9 2C7.61929 2 6.5 3.11929 6.5 4.5C6.5 5.88071 7.61929 7 9 7Z" stroke="#333333" strokeLinejoin="round" strokeWidth="2"/>
		<path d="M8 7L4.5 16.5" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
	</g>
	<defs>
		<clipPath id="clip0_2_20154">
			<rect height="24" width="24" fill="white"/>
		</clipPath>
	</defs>
</svg>
    </template>
    <script>
    export default {
      name: 'joystick',
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
  
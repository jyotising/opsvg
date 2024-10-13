
    <template>
      <svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
	<g clipPath="url(#clip0_2_20570)">
		<path d="M24 0H0V24H24V0Z" fill="white" fillOpacity="0.01"/>
		<path d="M4 6V22H20V2H7L4 6Z" fillRule="evenodd" stroke="#333333" strokeLinejoin="round" strokeWidth="2"/>
		<path d="M7.5 7.5V10.5" stroke="#333333" strokeLinecap="round" strokeWidth="2"/>
		<path d="M10.5 6V9" stroke="#333333" strokeLinecap="round" strokeWidth="2"/>
		<path d="M16.5 6V9" stroke="#333333" strokeLinecap="round" strokeWidth="2"/>
		<path d="M13.5 6V9" stroke="#333333" strokeLinecap="round" strokeWidth="2"/>
	</g>
	<defs>
		<clipPath id="clip0_2_20570">
			<rect height="24" width="24" fill="white"/>
		</clipPath>
	</defs>
</svg>
    </template>
    <script>
    export default {
      name: 'sd-card',
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
  
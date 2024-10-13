
    <template>
      <svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
	<g clipPath="url(#clip0_2_20848)">
		<path d="M24 0H0V24H24V0Z" fill="white" fillOpacity="0.01"/>
		<path d="M21 2H3V7H21V2Z" stroke="#333333" strokeLinejoin="round" strokeWidth="2"/>
		<path d="M21 9.5H3V14.5H21V9.5Z" stroke="#333333" strokeLinejoin="round" strokeWidth="2"/>
		<path d="M21 17H3V22H21V17Z" stroke="#333333" strokeLinejoin="round" strokeWidth="2"/>
		<path d="M10.5 4.5H13.5" stroke="#333333" strokeLinecap="round" strokeWidth="2"/>
		<path d="M10.5 12H13.5" stroke="#333333" strokeLinecap="round" strokeWidth="2"/>
		<path d="M10.5 19.5H13.5" stroke="#333333" strokeLinecap="round" strokeWidth="2"/>
	</g>
	<defs>
		<clipPath id="clip0_2_20848">
			<rect height="24" width="24" fill="white"/>
		</clipPath>
	</defs>
</svg>
    </template>
    <script>
    export default {
      name: 'file-cabinet',
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
  
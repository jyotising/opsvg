
    <template>
      <svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
	<g clipPath="url(#clip0_2_21045)">
		<path d="M24 0H0V24H24V0Z" fill="white" fillOpacity="0.01"/>
		<mask height="24" id="mask0_2_21045" style={{"maskType":"alpha"}} width="24" x="0" y="0" maskUnits="userSpaceOnUse">
			<path d="M24 0H0V24H24V0Z" fill="#333333"/>
		</mask>
		<g mask="url(#mask0_2_21045)">
			<path d="M5 15L19 15V9L5 9V15Z" stroke="#333333" strokeLinejoin="round" strokeWidth="2"/>
			<path d="M21 20H3" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
			<path d="M21 4H3" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
		</g>
	</g>
	<defs>
		<clipPath id="clip0_2_21045">
			<rect height="24" width="24" fill="white"/>
		</clipPath>
	</defs>
</svg>
    </template>
    <script>
    export default {
      name: 'distribute-vertically',
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
  
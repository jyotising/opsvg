
    <template>
      <svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
	<g clipPath="url(#clip0_2_21616)">
		<path d="M24 0H0V24H24V0Z" fill="white" fillOpacity="0.01"/>
		<path d="M11.5 2H2V13H11.5V2Z" stroke="#333333" strokeLinejoin="round" strokeWidth="2"/>
		<path d="M22 17H2V21.5H22V17Z" stroke="#333333" strokeLinejoin="round" strokeWidth="2"/>
		<path d="M22 2H15.5V5.99999H22V2Z" stroke="#333333" strokeLinejoin="round" strokeWidth="2"/>
		<path d="M22 9H15.5V13H22V9Z" stroke="#333333" strokeLinejoin="round" strokeWidth="2"/>
	</g>
	<defs>
		<clipPath id="clip0_2_21616">
			<rect height="24" width="24" fill="white"/>
		</clipPath>
	</defs>
</svg>
    </template>
    <script>
    export default {
      name: 'page-template',
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
  
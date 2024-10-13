
    <template>
      <svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
	<g clipPath="url(#clip0_2_20352)">
		<path d="M24 0H0V24H24V0Z" fill="white" fillOpacity="0.01"/>
		<path d="M17 18L11 12L17 6" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
		<path d="M7 6V18" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
	</g>
	<defs>
		<clipPath id="clip0_2_20352">
			<rect height="24" width="24" fill="white"/>
		</clipPath>
	</defs>
</svg>
    </template>
    <script>
    export default {
      name: 'go-start',
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
  
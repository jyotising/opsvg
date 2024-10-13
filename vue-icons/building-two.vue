
    <template>
      <svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
	<g clipPath="url(#clip0_2_19982)">
		<path d="M24 0H0V24H24V0Z" fill="white" fillOpacity="0.01"/>
		<path d="M10.5 6.5L5.5 10V22" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
		<path d="M10.5 2L15.5 5.5V12L19 14.5V22H10.5V2Z" fillRule="evenodd" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
		<path d="M2 22H22" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
	</g>
	<defs>
		<clipPath id="clip0_2_19982">
			<rect height="24" width="24" fill="white"/>
		</clipPath>
	</defs>
</svg>
    </template>
    <script>
    export default {
      name: 'building-two',
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
  

    <template>
      <svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
	<g clipPath="url(#clip0_2_19602)">
		<path d="M24 0H0V24H24V0Z" fill="white" fillOpacity="0.01"/>
		<path d="M12 22C16.6944 22 20.5 18.1944 20.5 13.5C20.5 8.80558 16.6944 5 12 5C7.30558 5 3.5 8.80558 3.5 13.5C3.5 18.1944 7.30558 22 12 22Z" stroke="#333333" strokeLinejoin="round" strokeWidth="2"/>
		<path d="M9 2H15" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
		<path d="M12 9.5V13.5" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
		<path d="M16 13.5H12" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
		<path d="M12 2V4" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
	</g>
	<defs>
		<clipPath id="clip0_2_19602">
			<rect height="24" width="24" fill="white"/>
		</clipPath>
	</defs>
</svg>
    </template>
    <script>
    export default {
      name: 'stopwatch-start',
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
  

    <template>
      <svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
	<g clipPath="url(#clip0_2_19789)">
		<path d="M24 0H0V24H24V0Z" fill="white" fillOpacity="0.01"/>
		<path d="M2 12V6H6.5V5C6.5 3.34315 7.84315 2 9.5 2C11.1569 2 12.5 3.34315 12.5 5V6H17V12H19C20.6569 12 22 13.3431 22 15C22 16.6569 20.6569 18 19 18H17V22H2V18H4C5.65685 18 7 16.6569 7 15C7 13.3431 5.65685 12 4 12H2Z" stroke="#333333" strokeLinejoin="round" strokeWidth="2"/>
	</g>
	<defs>
		<clipPath id="clip0_2_19789">
			<rect height="24" width="24" fill="white"/>
		</clipPath>
	</defs>
</svg>
    </template>
    <script>
    export default {
      name: 'puzzle',
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
  
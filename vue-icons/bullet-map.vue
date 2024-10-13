
    <template>
      <svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
	<g clipPath="url(#clip0_2_21327)">
		<path d="M24 0H0V24H24V0Z" fill="white" fillOpacity="0.01"/>
		<path d="M3 3V21H21" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
		<path d="M8 20V4.5C8 3.94771 8.5267 3.5 9.17645 3.5H16.8235C17.4733 3.5 18 3.94771 18 4.5V20" stroke="#333333" strokeLinecap="round" strokeWidth="2"/>
		<path d="M8.5 16.0541H17" stroke="#333333" strokeLinecap="round" strokeWidth="2"/>
		<path d="M11 9.5H15" stroke="#333333" strokeLinecap="round" strokeWidth="2"/>
		<path d="M13 7V16.0541" stroke="#333333" strokeLinecap="round" strokeWidth="2"/>
	</g>
	<defs>
		<clipPath id="clip0_2_21327">
			<rect height="24" width="24" fill="white"/>
		</clipPath>
	</defs>
</svg>
    </template>
    <script>
    export default {
      name: 'bullet-map',
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
  
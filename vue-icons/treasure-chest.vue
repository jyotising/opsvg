
    <template>
      <svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
	<g clipPath="url(#clip0_2_21683)">
		<path d="M24 0H0V24H24V0Z" fill="white" fillOpacity="0.01"/>
		<path d="M21 2H3C2.44772 2 2 2.44772 2 3V21C2 21.5523 2.44772 22 3 22H21C21.5523 22 22 21.5523 22 21V3C22 2.44772 21.5523 2 21 2Z" stroke="#333333" strokeLinejoin="round" strokeWidth="2"/>
		<path d="M2 12H8.5" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
		<path d="M15.5 12H22" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
		<path d="M12 15.5C13.933 15.5 15.5 13.933 15.5 12C15.5 10.067 13.933 8.5 12 8.5C10.067 8.5 8.5 10.067 8.5 12C8.5 13.933 10.067 15.5 12 15.5Z" stroke="#333333" strokeLinejoin="round" strokeWidth="2"/>
	</g>
	<defs>
		<clipPath id="clip0_2_21683">
			<rect height="24" width="24" fill="white"/>
		</clipPath>
	</defs>
</svg>
    </template>
    <script>
    export default {
      name: 'treasure-chest',
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
  